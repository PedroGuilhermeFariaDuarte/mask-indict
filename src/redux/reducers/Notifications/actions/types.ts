// Actions Types
export enum NotificationsActions {
    NotificationsActions_addNotification = "@notificationAction/add-notification",
}

// Data Types
export interface NotificationsData {
    notification?: Object
}

// State Types
export interface NotificationsState {
    notification?: object[]
}
