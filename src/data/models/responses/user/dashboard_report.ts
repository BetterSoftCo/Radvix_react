export interface DashboardMyReport {
    status:  number;
    result:  DashboardMyReportResult;
    message: string;
}

export interface DashboardMyReportResult {
    countUsers:         number;
    countEquipment:     number;
    countTaskCompleted: number;
    countTaskPending:   number;
    daysLeftDeadline:   number;
}
