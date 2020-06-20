# Migration `20200620091956-create-libraries`

This migration has been generated at 6/20/2020, 9:19:56 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Library" (
"address" text  NOT NULL ,"avatar" text  NOT NULL ,"city" text  NOT NULL ,"id" SERIAL,"latitude" Decimal(65,30)  NOT NULL ,"longitude" Decimal(65,30)  NOT NULL ,"state" text  NOT NULL ,"status" text  NOT NULL ,"zip" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200620091956-create-libraries
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+datasource DS {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+model Library {
+  id        Int     @id @default(autoincrement())
+  address   String
+  city      String
+  state     String
+  zip       String
+  latitude  Float
+  longitude Float
+  avatar    String
+  status    String
+}
```


