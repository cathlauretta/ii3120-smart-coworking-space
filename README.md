<img src='public/doc/Header.png'>

## II3120 - Information System Technology Services
<center>
CENTRICE adalah layanan pendaftaran coworking space yang dibangun dengan Next.js.
</center>

## Table of Content
- [Requirements](#requirements)
- [How to Run the Program](#how-to-run-the-program)
- [Program Usage Guide](#program-usage-guide)
- [Database Schema](#database-schema)
- [Progress Report](#progress-report)
- [Authors](#authors)

## Requirements
- [NodeJS](https://nodejs.org/en/download)

## How to Run the Program
1. Clone this repository
    ```bash
    git clone https://github.com/cathlauretta/ii3120-smart-coworking-space
    ```
2. Change the directory to the cloned repository
    ```bash
    cd ii3120-smart-coworking-space
    ```
3. Install the required dependencies/package
    ```bash
    npm install
    ```
4. Run the program
    ```bash
    npm run dev
    ```
5. Open the application on ``localhost:3000`` or access the program from this [link](www.google.com)

## Program Usage Guide


## Database Schema
Below are the database schema used in the program. There are five tables: user, membership, workspace, room, and event that stores different attributes/informations and some refer to another attribute in another table. 

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

create table
  public.fnb (
    id uuid not null default gen_random_uuid (),
    name text null,
    "desc" text null,
    price integer null,
    created_at timestamp with time zone not null default now(),
    url_img text null,
    constraint fnb_pkey primary key (id)
  ) tablespace pg_default;
```

## Progress Report
| Implementation | Done |
|---|---|
| User can register themself | &check; |
| User can log in | &check; |
| User can subscribe membership | &cross; |
| User can book a room | &cross; |
| User can order menu | &cross; |
| User can do payment | &cross; |

## Authors
| Student ID | Name |
|---|---|
| 18221121 | Rozan Ghosani |
| 18221149 | Rayhan Nugraha Putra |
| 18221157 | Cathleen Lauretta |
| 18221171 | Hans Stephano Edbert N |
| 18221173 | Naura Valda Prameswari |
