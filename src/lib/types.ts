export type Role='student'|'faculty'|'staff'|'admin'|'super_admin'
export type IssueStatus='Open'|'Under Discussion'|'Resolved'|'Closed'
export type Priority='Low'|'Medium'|'High'|'Critical'
export type Category='Academics'|'Facilities'|'IT & Internet'|'Student Services'|'Enrollment & Registrar'|'Safety & Security'|'Finance'|'Other'
export interface User{id:string;username:string;email:string;full_name:string;role:Role;is_active:boolean;created_at:string}
export interface TokenResponse{access_token:string;token_type:string;expires_in:number;user:User}
export interface Argument{id:string;type:'pro'|'con';text:string;author:User;created_at:string}
export interface Position{id:string;text:string;author:User;is_accepted:boolean;created_at:string;arguments:Argument[];vote_count:number;voted_by_me:boolean}
export interface Issue{id:string;title:string;description:string;category:Category;priority:Priority;status:IssueStatus;reporter:User;created_at:string;updated_at:string;positions:Position[];position_count:number;argument_count:number}
export interface IssuePage{items:Issue[];total:number;limit:number;offset:number}
export interface Dashboard{total_issues:number;open:number;under_discussion:number;resolved:number;closed:number;positions:number;arguments:number;by_category:{category:string;count:number}[];top_positions:{id:string;text:string;issue_title:string;vote_count:number;issue_id:string}[];recent_issues:{id:string;title:string;category:Category;priority:Priority;status:IssueStatus;created_at:string;reporter_name:string}[]}
export interface AuditLog{id:string;actor_id:string|null;actor_name:string|null;action:string;entity_type:string;entity_id:string|null;details:Record<string,unknown>;ip_address:string|null;created_at:string}
export interface CommunityThread{id:string;title:string;body:string;category:string;is_pinned:boolean;is_locked:boolean;created_at:string;updated_at:string;author:Pick<User,'id'|'username'|'full_name'|'role'>;reply_count:number;like_count:number;liked_by_me:boolean}
export interface CommunityReply{id:string;thread_id:string;parent_reply_id:string|null;body:string;created_at:string;author:Pick<User,'id'|'username'|'full_name'|'role'>}
export interface CaseMessage{id:string;issue_id:string;body:string;visibility:'public'|'internal';created_at:string;author:Pick<User,'id'|'username'|'full_name'|'role'>}
export interface Notice{id:string;kind:string;title:string;body:string;href:string;is_read:boolean;created_at:string}
export interface AdminOverview{users:{total:number;students:number;faculty:number;staff:number;admins:number;super_admins:number;inactive:number};issues:{total:number;open:number;under_discussion:number;resolved:number;closed:number;high_priority:number};by_category:{category:string;count:number}[];open_flags:number;conversation_messages:number;recent_activity:{id:string;action:string;entity_type:string;entity_id:string|null;created_at:string;actor_name:string|null}[]}
export interface ModerationFlag{id:string;thread_id:string|null;reply_id:string|null;reason:string;details:string;status:string;created_at:string;reporter_name:string;thread_title:string|null;reply_body:string|null}
