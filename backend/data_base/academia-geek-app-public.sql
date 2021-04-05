/*
 Navicat PostgreSQL Data Transfer

 Source Server         : LocalPostgress
 Source Server Type    : PostgreSQL
 Source Server Version : 120000
 Source Host           : localhost:5432
 Source Catalog        : academia-geek-app
 Source Schema         : auth

 Target Server Type    : PostgreSQL
 Target Server Version : 120000
 File Encoding         : 65001

 Date: 23/02/2021 18:42:39
*/


-- ----------------------------
-- Sequence structure for auth_assignment_permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_assignment_permissions_id_seq";
CREATE SEQUENCE "auth"."auth_assignment_permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_permissions_id_seq";
CREATE SEQUENCE "auth"."auth_permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_permissions_section_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_permissions_section_id_seq";
CREATE SEQUENCE "auth"."auth_permissions_section_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_roles_id_seq";
CREATE SEQUENCE "auth"."auth_roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_sections_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_sections_id_seq";
CREATE SEQUENCE "auth"."auth_sections_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_user_roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_user_roles_id_seq";
CREATE SEQUENCE "auth"."auth_user_roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_user_status_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_user_status_id_seq";
CREATE SEQUENCE "auth"."auth_user_status_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_users_id_seq";
CREATE SEQUENCE "auth"."auth_users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for auth_assignment_permissions
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_assignment_permissions";
CREATE TABLE "auth"."auth_assignment_permissions" (
  "id" int4 NOT NULL DEFAULT nextval('auth_assignment_permissions_id_seq'::regclass),
  "id_user" int4,
  "id_rol" int4,
  "id_permission" int4,
  "id_section" int4,
  "p_create" int4 DEFAULT 0,
  "p_read" int4 DEFAULT 0,
  "p_update" int4 DEFAULT 0,
  "p_remove" int4 DEFAULT 0
)
;

-- ----------------------------
-- Table structure for auth_permissions
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_permissions";
CREATE TABLE "auth"."auth_permissions" (
  "id" int4 NOT NULL DEFAULT nextval('auth_permissions_id_seq'::regclass),
  "permission_name" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for auth_permissions_section
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_permissions_section";
CREATE TABLE "auth"."auth_permissions_section" (
  "id" int4 NOT NULL DEFAULT nextval('auth_permissions_section_id_seq'::regclass),
  "id_permission" int4,
  "id_section" int4
)
;

-- ----------------------------
-- Table structure for auth_roles
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_roles";
CREATE TABLE "auth"."auth_roles" (
  "id" int4 NOT NULL DEFAULT nextval('auth_roles_id_seq'::regclass),
  "role_name" varchar(255) COLLATE "pg_catalog"."default",
  "parent" int4 DEFAULT 0
)
;

-- ----------------------------
-- Records of auth_roles
-- ----------------------------
INSERT INTO "auth"."auth_roles" VALUES (1, 'Instructor', 0);
INSERT INTO "auth"."auth_roles" VALUES (2, 'Estudiante', 0);
INSERT INTO "auth"."auth_roles" VALUES (3, 'Cordinador', 0);

-- ----------------------------
-- Table structure for auth_sections
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_sections";
CREATE TABLE "auth"."auth_sections" (
  "id" int4 NOT NULL DEFAULT nextval('auth_sections_id_seq'::regclass),
  "section_name" varchar(255) COLLATE "pg_catalog"."default",
  "section_parent" int4 DEFAULT 0,
  "section_link" varchar(255) COLLATE "pg_catalog"."default",
  "section_order" int4,
  "isadmin" bool DEFAULT false,
  "isprivate" bool DEFAULT false
)
;
COMMENT ON COLUMN "auth"."auth_sections"."isadmin" IS 'Estas secciones solo se le van a cargar a los usuarios que tienen que en auth_user en su campo admin 1';
COMMENT ON COLUMN "auth"."auth_sections"."isprivate" IS 'Estas secciones no se cargan en el menu, hacen parte de secciones que son internas de cada funcionalida. Deben ser asignadas a los usuarios, pero no se cargan en el menu principal. ';

-- ----------------------------
-- Table structure for auth_session
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_session";
CREATE TABLE "auth"."auth_session" (
  "sid" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
;

-- ----------------------------
-- Table structure for auth_user_roles
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_user_roles";
CREATE TABLE "auth"."auth_user_roles" (
  "id" int4 NOT NULL DEFAULT nextval('auth_user_roles_id_seq'::regclass),
  "id_user" int4,
  "id_role" int4
)
;

-- ----------------------------
-- Table structure for auth_user_status
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_user_status";
CREATE TABLE "auth"."auth_user_status" (
  "id" int4 NOT NULL DEFAULT nextval('auth_user_status_id_seq'::regclass),
  "user_status" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of auth_user_status
-- ----------------------------
INSERT INTO "auth"."auth_user_status" VALUES (1, 'Activo');
INSERT INTO "auth"."auth_user_status" VALUES (2, 'Pendienete por validar');
INSERT INTO "auth"."auth_user_status" VALUES (3, 'Suspendio o Inhabilitado');
INSERT INTO "auth"."auth_user_status" VALUES (4, 'Eliminado');
INSERT INTO "auth"."auth_user_status" VALUES (5, 'No ingresado');

-- ----------------------------
-- Table structure for auth_users
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_users";
CREATE TABLE "auth"."auth_users" (
  "id" int4 NOT NULL DEFAULT nextval('auth_users_id_seq'::regclass),
  "full_name" varchar(255) COLLATE "pg_catalog"."default",
  "last_name" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "pass" varchar(255) COLLATE "pg_catalog"."default",
  "register_time" int4,
  "last_entry" int4,
  "status" int4 DEFAULT 1,
  "admin" int4 DEFAULT 0,
  "parent_id" int4 DEFAULT 0,
  "upgrade_time" int4,
  "mobile_phone" varchar(30)
)
;

-- ----------------------------
-- Records of auth_users
-- ----------------------------
INSERT INTO "auth"."auth_users" VALUES (2, NULL, NULL, 'diego@gmail.com', NULL, NULL, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (7, 'Diego 22', 'Osok', 'prprpdssdf@gmail.com', '123', 1614090703, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (6, 'Diego 22', 'Osok', 'di1222999999o@gmail.com', '123', 1614090703, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (5, 'Diego 22', 'Osoksdkrio2 22', 'di1222o@gmail.com', '123', 1614090703, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (4, 'Diego 22', 'Osoksdkrio2 22', 'diegdddd2222o@gmail.com', '123', 1614090703, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (3, 'Diego 22', 'Osorio2 22', 'dieg2222o@gmail.com', '123', 1614090703, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (10, 'Diego 22', 'Osok', 'prprpdsdssssdf@gmail.com', '123', 1614091125, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (17, 'Diego 22', 'Osok', 'pasd@gmail.com', '$2b$10$h2ov7ZXm9eZ3TNhnFKDofee7sZb4QwpS5zXepxsGLnlYzT/GYxpDy', 1614110197, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (36, 'Diego 22', 'Osok', 'pa22222sd@gmail.com', '$2b$10$W3Zfs4e/CFHwXnkcIEG0UeS01.8ZNwkcCV1LpNsObozWiGBqHq9iK', 1614111918, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (39, 'Diego 22', 'Osok', 'pa22ddsdsd222sd@gmail.com', '$2b$10$YchteMcMhJQu84/tFGvrZ.eH9G31hDPL7r1p9/6JdrIAaqroOCCzG', 1614112406, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (41, 'Diego 22', 'Osok', 'pa22ddsdsd22222sd@gmail.com', '$2b$10$DbbRxhiYEa8I7EuB/7YQbejeNRIiUD3KXD2eIPGoQlObzvOwu6xKu', 1614112686, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (42, 'Diego 22', 'Osok', 'pa22ddsdsds922222sd@gmail.com', '$2b$10$Dkxw138yA/7vrwncF8RK6.g2JdMjLx/ntHxHmeYm20CwD7n0b0rHS', 1614114501, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (43, 'Diego 22', 'Osok', 'pa22ddsdsd9s922222sd@gmail.com', '$2b$10$TQAP53VYEnTTx7BlYqZ6yOUUl5Gd9AjmCmi1G1gfBL0u.D/4iostq', 1614114607, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (44, 'Diego 22', 'Osok', 'pa22ddsdsd9s922222sd@gmawwwwil.com', '$2b$10$LIt3bxciWlMjWRcGk6m8W.O3Y0w4II8TtS8K81dr6wznw4bca5Eau', 1614114701, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (46, 'Diego 22', 'Osok', 'psd9s922222sd@gmawwwwil.com', '123', 1614114987, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (47, 'Diego 22', 'Osok', 'psd9s922222sd@gma987wwwwil.com', '123', 1614115047, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (49, 'Diego 22', 'Osok', 'psd9s922222sd@gma987wwwwil.cm', '123', 1614115099, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (50, 'Diego 22', 'Osok', '22222sd@gma987wwwwil.cm', '123', 1614116551, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (51, 'Diego 22', 'Osok', '22222sd@g87wwwwil.cm', '$2b$10$6djQ/tbzrQjk9EIpgBzngulZSxeHxD/EvyMpS8BMJxQk/3An3q9zW', 1614116695, NULL, 1, 0, 0, NULL);
INSERT INTO "auth"."auth_users" VALUES (58, 'Oscar H', 'Mesa Tales', 'oscarmesa.elpoli@gmail.com', '$2b$10$1.okz4ZePXgBSptaILbg5Od9YdTvUhl5rGa0GQ5l0AqJ2ycCUV7XG', 1614122632, NULL, 1, 0, 0, 1614123452);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "auth"."auth_assignment_permissions_id_seq"
OWNED BY "auth"."auth_assignment_permissions"."id";
SELECT setval('"auth"."auth_assignment_permissions_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_permissions_id_seq"
OWNED BY "auth"."auth_permissions"."id";
SELECT setval('"auth"."auth_permissions_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_permissions_section_id_seq"
OWNED BY "auth"."auth_permissions_section"."id";
SELECT setval('"auth"."auth_permissions_section_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_roles_id_seq"
OWNED BY "auth"."auth_roles"."id";
SELECT setval('"auth"."auth_roles_id_seq"', 4, true);
ALTER SEQUENCE "auth"."auth_sections_id_seq"
OWNED BY "auth"."auth_sections"."id";
SELECT setval('"auth"."auth_sections_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_user_roles_id_seq"
OWNED BY "auth"."auth_user_roles"."id";
SELECT setval('"auth"."auth_user_roles_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_user_status_id_seq"
OWNED BY "auth"."auth_user_status"."id";
SELECT setval('"auth"."auth_user_status_id_seq"', 6, true);
ALTER SEQUENCE "auth"."auth_users_id_seq"
OWNED BY "auth"."auth_users"."id";
SELECT setval('"auth"."auth_users_id_seq"', 59, true);

-- ----------------------------
-- Uniques structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "qu_role_seccion" UNIQUE ("id_rol", "id_section");
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "qu_role_permission" UNIQUE ("id_rol", "id_permission");

-- ----------------------------
-- Primary Key structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "auth_assignment_permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_permissions" ADD CONSTRAINT "auth_permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_permissions_section
-- ----------------------------
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_roles
-- ----------------------------
ALTER TABLE "auth"."auth_roles" ADD CONSTRAINT "auth_roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table auth_sections
-- ----------------------------
ALTER TABLE "auth"."auth_sections" ADD CONSTRAINT "uq_link_seccion" UNIQUE ("section_link");

-- ----------------------------
-- Primary Key structure for table auth_sections
-- ----------------------------
ALTER TABLE "auth"."auth_sections" ADD CONSTRAINT "auth_sections_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table auth_session
-- ----------------------------
CREATE INDEX "IDX_session_expire" ON "auth"."auth_session" USING btree (
  "expire" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table auth_session
-- ----------------------------
ALTER TABLE "auth"."auth_session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid");

-- ----------------------------
-- Primary Key structure for table auth_user_roles
-- ----------------------------
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "auth_user_roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_user_status
-- ----------------------------
ALTER TABLE "auth"."auth_user_status" ADD CONSTRAINT "auth_user_status_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "uq_email_auth_user" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "auth_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_permission" FOREIGN KEY ("id_permission") REFERENCES "auth"."auth_permissions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_rol" FOREIGN KEY ("id_rol") REFERENCES "auth"."auth_roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_section" FOREIGN KEY ("id_section") REFERENCES "auth"."auth_sections" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table auth_permissions_section
-- ----------------------------
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "auth"."auth_permissions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_id_section_fkey" FOREIGN KEY ("id_section") REFERENCES "auth"."auth_sections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table auth_user_roles
-- ----------------------------
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "fk_aut_rol_id_rol" FOREIGN KEY ("id_role") REFERENCES "auth"."auth_roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "fk_aut_rol_id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "fk_status" FOREIGN KEY ("status") REFERENCES "auth"."auth_user_status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
