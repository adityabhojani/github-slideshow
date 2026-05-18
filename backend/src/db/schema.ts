import { pgTable, serial, text, date, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

export const userProfiles = pgTable('user_profiles', {
  clerk_id: text('clerk_id').primaryKey(),
  email: text('email'),
  passport_code: text('passport_code'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const visitedCountries = pgTable('visited_countries', {
  id: serial('id').primaryKey(),
  clerk_id: text('clerk_id').references(() => userProfiles.clerk_id),
  country_code: text('country_code').notNull(),
  visited_at: date('visited_at'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const trips = pgTable('trips', {
  id: serial('id').primaryKey(),
  clerk_id: text('clerk_id').references(() => userProfiles.clerk_id),
  name: text('name'),
  passport_code: text('passport_code'),
  stops: jsonb('stops'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const visaAlerts = pgTable('visa_alerts', {
  id: serial('id').primaryKey(),
  clerk_id: text('clerk_id').references(() => userProfiles.clerk_id),
  passport_code: text('passport_code').notNull(),
  destination_code: text('destination_code').notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: text('email').unique().notNull(),
  passport_code: text('passport_code'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  description: text('description'),
  content: text('content').notNull(),
  published: boolean('published').default(false),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const siteSettings = pgTable('site_settings', {
  key: text('key').primaryKey(),
  value: text('value'),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});
