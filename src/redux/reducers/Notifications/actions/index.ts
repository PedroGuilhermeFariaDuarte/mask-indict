import { action } from "typesafe-actions"
import { NotificationsActions, NotificationsData } from "./types";

// Add a notification
export const NotificationsActions_addNewNotification = (data: NotificationsData) => action(NotificationsActions.NotificationsActions_addNotification, data)
