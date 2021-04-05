
-- --------------- ENUMS ---------------------

DROP TYPE IF EXISTS "tt"."enum_state_test";
CREATE TYPE "tt"."enum_state_test" AS ENUM ('Asignada', 'En curso', 'Aprobada', 'Reprobada');

-- --------------- ENUMS ---------------------


-- --------------- SEQUENCE ---------------------

-- ----------------------------
-- Sequence structure for tt_tests_students_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_tests_students_seq";
CREATE SEQUENCE "tt"."tt_tests_students_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tt_tests_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_tests_seq";
CREATE SEQUENCE "tt"."tt_tests_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_difficulties_tests_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_difficulties_tests_seq";
CREATE SEQUENCE "tt"."tt_difficulties_tests_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_answers_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_answers_seq";
CREATE SEQUENCE "tt"."tt_answers_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_bancks_questions_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_bancks_questions_seq";
CREATE SEQUENCE "tt"."tt_bancks_questions_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_difficulties_questions_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_difficulties_questions_seq";
CREATE SEQUENCE "tt"."tt_difficulties_questions_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_options_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_options_seq";
CREATE SEQUENCE "tt"."tt_options_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_topics_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_topics_seq";
CREATE SEQUENCE "tt"."tt_topics_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- --------------- SEQUENCE ---------------------



-- --------------- TABLES ---------------------

-- ----------------------------
-- Table structure for tt_tests_students
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_tests_students";
CREATE TABLE "tt"."tt_tests_students" (
  "id_test_students" int4 NOT NULL DEFAULT nextval('tt.tt_tests_students_seq'::regclass),
  "id_test" int4,
  "id_prospect_preferent" int4,
  "id_aut_user" int4,
  "date_start" timestamp,
  "date_end" timestamp,
  "date_send" timestamp,
  "final_score" int4 ,
  "state_test" tt.enum_state_test
)
;


-- ----------------------------
-- Table structure for tt_tests
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_tests";
CREATE TABLE "tt"."tt_tests" (
  "id_test" int4 NOT NULL DEFAULT nextval('tt.tt_tests_seq'::regclass),
  "id_topic_test" int4,
  "name_test" varchar(50),
  "description_test" text,
  "time_duration" varchar(20),
  "date_start" timestamp,
  "date_end" timestamp,
  "password_test" varchar(10),
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;


-- ----------------------------
-- Table structure for tt_difficulties_tests
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_difficulties_tests";
CREATE TABLE "tt"."tt_difficulties_tests" (
  "id_difficulty_test" int4 NOT NULL DEFAULT nextval('tt.tt_difficulties_tests_seq'::regclass),
  "id_difficulty" int4,
  "id_test" int4,
  "number_questions" int4,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
);


-- ----------------------------
-- Table structure for tt_answers
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_answers";
CREATE TABLE "tt"."tt_answers" (
  "id_answer" int4 NOT NULL DEFAULT nextval('tt.tt_answers_seq'::regclass),
  "id_option" int4,
  "id_test_person" int4,
  "date_registration" timestamp NULL DEFAULT current_timestamp
)
;


-- ----------------------------
-- Table structure for tt_bancks_questions
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_bancks_questions";
CREATE TABLE "tt"."tt_bancks_questions" (
  "id_question" int4 NOT NULL DEFAULT nextval('tt.tt_bancks_questions_seq'::regclass),
  "id_difficulty" int4,
  "id_topic_question" int4,
  "id_img_question" int4,
  "description_question" text,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;


-- ----------------------------
-- Table structure for tt_difficulties_questions
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_difficulties_questions";
CREATE TABLE "tt"."tt_difficulties_questions" (
  "id_difficulty" int4 NOT NULL DEFAULT nextval('tt.tt_difficulties_questions_seq'::regclass),
  "name_category" varchar(50),
  "points_question" int4,
  "date_creation" timestamp NULL DEFAULT current_timestamp
)
;


-- ----------------------------
-- Table structure for tt_options
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_options";
CREATE TABLE "tt"."tt_options" (
  "id_option" int4 NOT NULL DEFAULT nextval('tt.tt_options_seq'::regclass),
  "id_question" int4,
  "id_img_option" int4,
  "description_option" text,
  "answer_option" json,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;


-- ----------------------------
-- Table structure for tt_topics
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_topics";
CREATE TABLE "tt"."tt_topics" (
  "id_topic" int4 NOT NULL DEFAULT nextval('tt.tt_topics_seq'::regclass),
  "name_topic" varchar(50),
  "description_topic" text,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;

-- --------------- TABLES ---------------------



-- --------------- PRIMARY KEY ---------------------

-- ----------------------------
-- Primary Key structure for table tt_tests_students
-- ----------------------------
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "tt_test_students_pkey" PRIMARY KEY ("id_test_students");

-- ----------------------------
-- Primary Key structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "tt_tests_pkey" PRIMARY KEY ("id_test");

-- ----------------------------
-- Primary Key structure for table tt_difficulties
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "tt_difficulties_tests_pkey" PRIMARY KEY ("id_difficulty_test");

-- ----------------------------
-- Primary Key structure for table tt_answers
-- ----------------------------
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "tt_answers_pkey" PRIMARY KEY ("id_answer");

-- ----------------------------
-- Primary Key structure for table tt_bancks_questions
-- ----------------------------
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "tt_bancks_questions_pkey" PRIMARY KEY ("id_question");

-- ----------------------------
-- Primary Key structure for table tt_difficulties_questions
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_questions" ADD CONSTRAINT "tt_difficulties_questions_pkey" PRIMARY KEY ("id_difficulty");

-- ----------------------------
-- Primary Key structure for table tt_options
-- ----------------------------
ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "tt_options_pkey" PRIMARY KEY ("id_option");

-- ----------------------------
-- Primary Key structure for table tt_topics
-- ----------------------------
ALTER TABLE "tt"."tt_topics" ADD CONSTRAINT "tt_topics_pkey" PRIMARY KEY ("id_topic");


-- --------------- PRIMARY KEY ---------------------



-- --------------- UNIQUES ----------------- --

-- ----------------------------
-- Uniques structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "uq_password_test" UNIQUE ("password_test");

-- --------------- UNIQUES ----------------- --






-- --------------- FORENS KEYS ---------------------

-- ----------------------------
-- Foreign Keys structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "tt_tests_fkey" FOREIGN KEY ("id_topic_test") REFERENCES "tt"."tt_topics" ("id_topic") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_bancks_questions
-- ----------------------------
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_difficulty_fkey" FOREIGN KEY ("id_difficulty") REFERENCES "tt"."tt_difficulties_questions" ("id_difficulty") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_topic_question_fkey" FOREIGN KEY ("id_topic_question") REFERENCES "tt"."tt_topics" ("id_topic") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_img_question_fkey" FOREIGN KEY ("id_img_question") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCA1DE;


-- ----------------------------
-- Foreign Keys structure for table tt_difficulties_tests
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "id_difficulty_fkey" FOREIGN KEY ("id_difficulty") REFERENCES "tt"."tt_difficulties_questions" ("id_difficulty") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "tt"."tt_tests" ("id_test") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_answers
-- ----------------------------
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "id_option_fkey" FOREIGN KEY ("id_option") REFERENCES "tt"."tt_options" ("id_option") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "id_test_person_fkey" FOREIGN KEY ("id_test_person") REFERENCES "tt"."tt_tests_students" ("id_test_students") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_options
-- ----------------------------
ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "tt"."tt_bancks_questions" ("id_question") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "id_img_option_fkey" FOREIGN KEY ("id_img_option") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_tests_students
-- ----------------------------
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "tt"."tt_tests" ("id_test") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "public"."tt_tests_students" ADD CONSTRAINT "id_prospect_preferent_fkey" FOREIGN KEY ("id_prospect_preferent") REFERENCES "public"."adm_prospects_preference" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "id_aut_user_fkey" FOREIGN KEY ("id_aut_user") REFERENCES "auth"."auth_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
