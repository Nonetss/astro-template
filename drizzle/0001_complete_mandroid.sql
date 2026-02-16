ALTER TABLE "user" ADD COLUMN "groups" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "username" text DEFAULT '' NOT NULL;