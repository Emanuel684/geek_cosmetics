-- --------------- SEQUENCE ---------------------

-- ----------------------------
-- Sequence structure for articulos_orden_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "articulos_orden_seq" CASCADE;
CREATE SEQUENCE "articulos_orden_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for articulos_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "articulos_seq" CASCADE;
CREATE SEQUENCE "articulos_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for ordenes_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "ordenes_seq" CASCADE;
CREATE SEQUENCE "ordenes_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- --------------- SEQUENCE ---------------------



-- --------------- TABLES ---------------------




-- ----------------------------
-- Table structure for articulos_orden
-- ----------------------------
DROP TABLE IF EXISTS "articulos_orden";
CREATE TABLE "articulos_orden" (
  "id_articulo_orden" int4 NOT NULL DEFAULT nextval('articulos_orden_seq'::regclass),
  "id_articulo" int4,
  "id_orden" int4,
  "cantidad_articulo" int4
)
;

-- ----------------------------
-- Table structure for articulos
-- ----------------------------
DROP TABLE IF EXISTS "articulos";
CREATE TABLE "articulos" (
  "id_articulo" int4 NOT NULL DEFAULT nextval('articulos_seq'::regclass),
  "descripcion_articulo" text,
  "precio" int4,
  "existencia" int4
)
;


-- ----------------------------
-- Table structure for ordenes
-- ----------------------------
DROP TABLE IF EXISTS "ordenes";
CREATE TABLE "ordenes" (
  "id_orden" int4 NOT NULL DEFAULT nextval('ordenes_seq'::regclass),
  "numero_orden" varchar(20),
  "nombre_usuario" varchar(150),
  "fecha_orden" timestamp DEFAULT current_timestamp,
  "subtotal_orden" int4 NOT NULL,
  "totalIVA_orden" int4 NOT NULL,
  "total_orden" int4 NOT NULL
);




-- --------------- PRIMARY KEY ---------------------

-- ----------------------------
-- Primary Key structure for table articulos
-- ----------------------------
ALTER TABLE "articulos" ADD CONSTRAINT "articulos_pkey" PRIMARY KEY ("id_articulo");

-- ----------------------------
-- Primary Key structure for table articulos_orden
-- ----------------------------
ALTER TABLE "articulos_orden" ADD CONSTRAINT "articulos_orden_pkey" PRIMARY KEY ("id_articulo_orden");

-- ----------------------------
-- Primary Key structure for table ordenes
-- ----------------------------
ALTER TABLE "ordenes" ADD CONSTRAINT "ordenes_pkey" PRIMARY KEY ("id_orden");




-- --------------- UNIQUES ----------------- --

-- ----------------------------
-- Uniques structure for table ordenes
-- ----------------------------
ALTER TABLE "ordenes" ADD CONSTRAINT "uq_numero_orden_ordenes" UNIQUE ("numero_orden");

-- --------------- UNIQUES ----------------- --






-- --------------- FORENS KEYS ---------------------

-- ----------------------------
-- Foreign Keys structure for table articulos_orden
-- ----------------------------
ALTER TABLE "articulos_orden" ADD CONSTRAINT "id_articulo_fkey" FOREIGN KEY ("id_articulo") REFERENCES "articulos" ("id_articulo") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "articulos_orden" ADD CONSTRAINT "id_orden_fkey" FOREIGN KEY ("id_orden") REFERENCES "ordenes" ("id_orden") ON DELETE CASCADE ON UPDATE CASCADE;

