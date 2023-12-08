# CENTRICE

CENTRICE adalah layanan pendaftaran coworking space yang dibangun dengan Next.js.

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal proyek ini:

1. Clone repositori ini:
    ```bash
    git clone https://github.com/cathlauretta/ii3120-smart-coworking-space
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd ii3120-smart-coworking-space
    ```
3. Instal dependensi menggunakan npm atau yarn:
    ```bash
    npm install
    ```

## Build

Untuk membangun proyek ini, jalankan perintah berikut:

```bash
npm run build
```

## Skema Database

Berikut adalah skema database untuk layanan CENTRICE menggunakan DDL:

```sql
create table
  public.user (
    id uuid not null,
    email character varying null,
    full_name text null,
    phone_number text null,
    current_membership_id uuid null,
    created_at timestamp with time zone not null default now(),
    constraint user_pkey primary key (id),
    constraint user_current_membership_id_fkey foreign key (current_membership_id) references membership (id) on update cascade on delete cascade,
    constraint user_id_fkey foreign key (id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;

create table
  public.membership (
    id uuid not null default gen_random_uuid (),
    plan text null,
    started_at time without time zone null,
    expired_at timestamp without time zone null,
    created_at timestamp with time zone not null default now(),
    constraint membership_pkey primary key (id)
  ) tablespace pg_default;

create table
  public.workspace (
    id uuid not null default gen_random_uuid (),
    name text null,
    contact text null,
    location text null,
    created_at timestamp with time zone not null default now(),
    city text null,
    constraint workspace_pkey1 primary key (id)
  ) tablespace pg_default;

create table
  public.room (
    created_at timestamp with time zone not null default now(),
    name text null,
    facilities text null,
    capacity numeric null default '0'::numeric,
    workspace_id uuid null,
    occupancy numeric null default '0'::numeric,
    id uuid not null default gen_random_uuid (),
    constraint room_pkey primary key (id),
    constraint room_workspace_id_fkey foreign key (workspace_id) references workspace (id)
  ) tablespace pg_default;

create table
  public.event (
    name text null,
    workspace_id uuid null,
    "desc" text null,
    date date null,
    start_time time without time zone null,
    end_time time without time zone null,
    created_at timestamp with time zone not null default now(),
    contact text null,
    id uuid not null default gen_random_uuid (),
    constraint event_pkey primary key (id),
    constraint event_workspace_id_fkey foreign key (workspace_id) references workspace (id)
  ) tablespace pg_default;
```
