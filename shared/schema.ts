import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  planType: text("plan_type").notNull(), // "storage", "office", "adobe"
  planTier: text("plan_tier"), // For storage plans: "1TB", "2TB", etc.
  status: text("status").notNull(), // "active", "canceled", "expired"
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  subscriptionId: integer("subscription_id").references(() => subscriptions.id),
  amount: integer("amount").notNull(), // Amount in VND
  status: text("status").notNull(), // "succeeded", "pending", "failed"
  transactionId: text("transaction_id"), // Payment gateway transaction ID
  paymentMethod: text("payment_method").notNull(), // "vnpay", "momo", "zalopay"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Export schemas for inserting data
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertSubscriptionSchema = createInsertSchema(subscriptions).pick({
  userId: true,
  planType: true,
  planTier: true,
  status: true,
  currentPeriodEnd: true,
});

export const insertPaymentSchema = createInsertSchema(payments).pick({
  userId: true,
  subscriptionId: true,
  amount: true,
  status: true,
  transactionId: true,
  paymentMethod: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Subscription = typeof subscriptions.$inferSelect;
export type Payment = typeof payments.$inferSelect;