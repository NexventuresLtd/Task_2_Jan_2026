export type ApplicationStatus=
|'Submitted'
|'Under-Review'
|'Approved'
|'Rejected'

export type ApplicationType=
|'National ID'
|'Driving License'
|'Health Insurance'



export interface Application{
    id:string,
    applicationName:string,
    applicationType:ApplicationType,
    applicationStatus:ApplicationStatus,
    submitedAt:string
}