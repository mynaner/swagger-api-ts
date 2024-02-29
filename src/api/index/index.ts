import { server } from '@/utils/axios/request';
import { TccCarType } from '@/types'; 



              
export interface Paging {
    pageNum?: number;
    pageSize?: number;
    [key: string]: any;
  }
  
  export interface IPage<T> {
    current: number;
    pages: number;
    records: T[];
    size: number;
    total: number;
  }
  
  export interface MsgType {
    node: string;
    type: number;
    value?: number;
  }

              
   export interface GetTccYdps  extends YdpSearchDto,Paging {
        
      
      }
  /** 
   * @description:  诱导屏-带分页
   * @param {GetTccYdps} params? 
   * @return {*}
   */
  export const get_tcc_ydps = async(params?:GetTccYdps) => {
    
  const res = await server.GET<IPage<YdpVo>> (`/tcc/ydps`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新诱导屏
   * @param {YdpDto} data? 
   * @return {*}
   */
  export const put_tcc_ydps = async(data?:YdpDto) => {
    
  const res = await server.PUT (`/tcc/ydps`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加诱导屏
   * @param {YdpDto} data? 
   * @return {*}
   */
  export const post_tcc_ydps = async(data?:YdpDto) => {
    
  const res = await server.POST (`/tcc/ydps`,{data} );

        return res?.success; 
        }
    
   export interface GetTccYdpsCards   {
        id?:string;
      
      }
  /** 
   * @description:  诱导屏下已有卡
   * @param {GetTccYdpsCards} params? 
   * @return {*}
   */
  export const get_tcc_ydps_cards = async(params?:GetTccYdpsCards) => {
    
  const res = await server.GET<YdpCardRgplVo[]> (`/tcc/ydps/cards`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  编辑卡号
   * @param {YdpCardDto} data? 
   * @return {*}
   */
  export const put_tcc_ydps_cards = async(data?:YdpCardDto) => {
    
  const res = await server.PUT (`/tcc/ydps/cards`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加卡号
   * @param {YdpCardDto} data? 
   * @return {*}
   */
  export const post_tcc_ydps_cards = async(data?:YdpCardDto) => {
    
  const res = await server.POST (`/tcc/ydps/cards`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  显示屏模板-分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_tcc_xsg_template = async(params?:Paging) => {
    
  const res = await server.GET<IPage<TccXspTemplate>> (`/tcc/xsg-template`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑模板
   * @param {TccXspTemplate} data? 
   * @return {*}
   */
  export const put_tcc_xsg_template = async(data?:TccXspTemplate) => {
    
  const res = await server.PUT (`/tcc/xsg-template`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加模板
   * @param {TccXspTemplate} data? 
   * @return {*}
   */
  export const post_tcc_xsg_template = async(data?:TccXspTemplate) => {
    
  const res = await server.POST (`/tcc/xsg-template`,{data} );

        return res?.success; 
        }
    
   export interface GetTccStationUser  extends TccStationUserSearchDto,Paging {
        
      
      }
  /** 
   * @description:  岗亭人员列表-分页
   * @param {GetTccStationUser} params? 
   * @return {*}
   */
  export const get_tcc_station_user = async(params?:GetTccStationUser) => {
    
  const res = await server.GET<IPage<TccStationUserVo>> (`/tcc/station/user`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新岗亭人员
   * @param {TccStationUserDto} data? 
   * @return {*}
   */
  export const put_tcc_station_user = async(data?:TccStationUserDto) => {
    
  const res = await server.PUT (`/tcc/station/user`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加岗亭人员
   * @param {TccStationUserDto} data? 
   * @return {*}
   */
  export const post_tcc_station_user = async(data?:TccStationUserDto) => {
    
  const res = await server.POST (`/tcc/station/user`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改员工密码
   * @param {StationResetPasswordDto} data? 
   * @return {*}
   */
  export const put_tcc_station_user_password = async(data?:StationResetPasswordDto) => {
    
  const res = await server.PUT<Boolean> (`/tcc/station/user/password`,{data} );

        return res?.result; 
        }
    
   export interface GetTccSpecialCar  extends TccSpecialCarSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetTccSpecialCar} params? 
   * @return {*}
   */
  export const get_tcc_special_car = async(params?:GetTccSpecialCar) => {
    
  const res = await server.GET<IPage<TccSpecialCarVo>> (`/tcc/special-car`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新特殊车辆
   * @param {TccSpecialCarDto} data? 
   * @return {*}
   */
  export const put_tcc_special_car = async(data?:TccSpecialCarDto) => {
    
  const res = await server.PUT (`/tcc/special-car`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增特殊车辆
   * @param {TccSpecialCarDto} data? 
   * @return {*}
   */
  export const post_tcc_special_car = async(data?:TccSpecialCarDto) => {
    
  const res = await server.POST (`/tcc/special-car`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量删除特殊车辆
   * @param {string[]} data? 
   * @return {*}
   */
  export const delete_tcc_special_car = async(data?:string[]) => {
    
  const res = await server.DELETE (`/tcc/special-car`,{data} );

        return res?.success; 
        }
    
   export interface GetTccInfo  extends TccInfoSearchDto,Paging {
        
      
      }
  /** 
   * @description:  车厂列表-分页
   * @param {GetTccInfo} params? 
   * @return {*}
   */
  export const get_tcc_info = async(params?:GetTccInfo) => {
    
  const res = await server.GET<IPage<TccInfoVo>> (`/tcc/info`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑
   * @param {Lot} data? 
   * @return {*}
   */
  export const put_tcc_info = async(data?:Lot) => {
    
  const res = await server.PUT (`/tcc/info`,{data} );

        return res?.success; 
        }
    
   export interface GetTccGuest  extends GuestSearchDto,Paging {
        
      
      }
  /** 
   * @description:  列表-分页
   * @param {GetTccGuest} params? 
   * @return {*}
   */
  export const get_tcc_guest = async(params?:GetTccGuest) => {
    
  const res = await server.GET<IPage<TccGuestVo>> (`/tcc/guest`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改访客车
   * @param {TccGuestDto} data? 
   * @return {*}
   */
  export const put_tcc_guest = async(data?:TccGuestDto) => {
    
  const res = await server.PUT (`/tcc/guest`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加访客车
   * @param {TccGuestDto} data? 
   * @return {*}
   */
  export const post_tcc_guest = async(data?:TccGuestDto) => {
    
  const res = await server.POST (`/tcc/guest`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量删除特殊车辆
   * @param {string[]} data? 
   * @return {*}
   */
  export const delete_tcc_guest = async(data?:string[]) => {
    
  const res = await server.DELETE (`/tcc/guest`,{data} );

        return res?.success; 
        }
    
   export interface GetTccChannel  extends TccChannelSearchDto,Paging {
        
      
      }
  /** 
   * @description:  通道列表-分页
   * @param {GetTccChannel} params? 
   * @return {*}
   */
  export const get_tcc_channel = async(params?:GetTccChannel) => {
    
  const res = await server.GET<IPage<ChannelVo>> (`/tcc/channel`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑通道
   * @param {TccChannelDto} data? 
   * @return {*}
   */
  export const put_tcc_channel = async(data?:TccChannelDto) => {
    
  const res = await server.PUT (`/tcc/channel`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加通道
   * @param {TccChannelDto} data? 
   * @return {*}
   */
  export const post_tcc_channel = async(data?:TccChannelDto) => {
    
  const res = await server.POST (`/tcc/channel`,{data} );

        return res?.success; 
        }
    
   export interface PutTccChannelNtpId   {
        id?:string;
      
      }
  /** 
   * @description:  通道显示屏时间同步
   * @param {PutTccChannelNtpId} params? 
   * @return {*}
   */
  export const put_tcc_channel_ntp_id = async(params?:PutTccChannelNtpId) => {
    
  const res = await server.PUT (`/tcc/channel/ntp/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetTccBlacklist  extends BlacklistSearchDto,Paging {
        
      
      }
  /** 
   * @description:  黑名单查询-分页
   * @param {GetTccBlacklist} params? 
   * @return {*}
   */
  export const get_tcc_blacklist = async(params?:GetTccBlacklist) => {
    
  const res = await server.GET<IPage<BlacklistVo>> (`/tcc/blacklist`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新
   * @param {BlacklistDto} data? 
   * @return {*}
   */
  export const put_tcc_blacklist = async(data?:BlacklistDto) => {
    
  const res = await server.PUT (`/tcc/blacklist`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增
   * @param {BlacklistDto} data? 
   * @return {*}
   */
  export const post_tcc_blacklist = async(data?:BlacklistDto) => {
    
  const res = await server.POST (`/tcc/blacklist`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量删除
   * @param {string[]} data? 
   * @return {*}
   */
  export const delete_tcc_blacklist = async(data?:string[]) => {
    
  const res = await server.DELETE (`/tcc/blacklist`,{data} );

        return res?.success; 
        }
    
   export interface GetSystemUsers  extends UserSearchDto,Paging {
        
      
      }
  /** 
   * @description:  用户列表-带分页
   * @param {GetSystemUsers} params? 
   * @return {*}
   */
  export const get_system_users = async(params?:GetSystemUsers) => {
    
  const res = await server.GET<IPage<UserVo>> (`/system/users`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新用户
   * @param {UserDto} data? 
   * @return {*}
   */
  export const put_system_users = async(data?:UserDto) => {
    
  const res = await server.PUT (`/system/users`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加用户
   * @param {UserDto} data? 
   * @return {*}
   */
  export const post_system_users = async(data?:UserDto) => {
    
  const res = await server.POST (`/system/users`,{data} );

        return res?.success; 
        }
    
   export interface PutSystemUsersIdResetStatus   {
        id?:string;
      
      }
  /** 
   * @description:  更新用户状态
   * @param {PutSystemUsersIdResetStatus} params? 
   * @return {*}
   */
  export const put_system_users_id_reset_status = async(params?:PutSystemUsersIdResetStatus) => {
    
  const res = await server.PUT (`/system/users/${params?.id}/reset-status`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更新用户密码
   * @param {ResetPassDto} data? 
   * @return {*}
   */
  export const put_system_users_reset_pass = async(data?:ResetPassDto) => {
    
  const res = await server.PUT (`/system/users/reset-pass`,{data} );

        return res?.success; 
        }
    
   export interface GetSystemTenant  extends SearchTenantDto,Paging {
        
      
      }
  /** 
   * @description:  分页
   * @param {GetSystemTenant} params? 
   * @return {*}
   */
  export const get_system_tenant = async(params?:GetSystemTenant) => {
    
  const res = await server.GET<IPage<TenantVo>> (`/system/tenant`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改租户
   * @param {TenantDto} data? 
   * @return {*}
   */
  export const put_system_tenant = async(data?:TenantDto) => {
    
  const res = await server.PUT (`/system/tenant`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增租户
   * @param {TenantDto} data? 
   * @return {*}
   */
  export const post_system_tenant = async(data?:TenantDto) => {
    
  const res = await server.POST (`/system/tenant`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  角色列表-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_system_tenant_role = async(params?:Paging) => {
    
  const res = await server.GET<IPage<SysTenantRole>> (`/system/tenant-role`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新角色
   * @param {SysTenantRole} data? 
   * @return {*}
   */
  export const put_system_tenant_role = async(data?:SysTenantRole) => {
    
  const res = await server.PUT (`/system/tenant-role`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加角色
   * @param {SysTenantRole} data? 
   * @return {*}
   */
  export const post_system_tenant_role = async(data?:SysTenantRole) => {
    
  const res = await server.POST (`/system/tenant-role`,{data} );

        return res?.success; 
        }
    
   export interface GetSystemRoles  extends Paging {
        tenantId?:string;
      
      }
  /** 
   * @description:  角色列表-带分页
   * @param {GetSystemRoles} params? 
   * @return {*}
   */
  export const get_system_roles = async(params?:GetSystemRoles) => {
    
  const res = await server.GET<IPage<RoleVo>> (`/system/roles`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新角色
   * @param {RoleDto} data? 
   * @return {*}
   */
  export const put_system_roles = async(data?:RoleDto) => {
    
  const res = await server.PUT (`/system/roles`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加角色
   * @param {RoleDto} data? 
   * @return {*}
   */
  export const post_system_roles = async(data?:RoleDto) => {
    
  const res = await server.POST (`/system/roles`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  用户更新密码
   * @param {UserPasswordDto} data? 
   * @return {*}
   */
  export const put_system_profile_resetPass = async(data?:UserPasswordDto) => {
    
  const res = await server.PUT (`/system/profile/resetPass`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改菜单
   * @param {MenuDto} data? 
   * @return {*}
   */
  export const put_system_menus = async(data?:MenuDto) => {
    
  const res = await server.PUT (`/system/menus`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加菜单
   * @param {MenuDto} data? 
   * @return {*}
   */
  export const post_system_menus = async(data?:MenuDto) => {
    
  const res = await server.POST (`/system/menus`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改值
   * @param {DictValueDto} data? 
   * @return {*}
   */
  export const put_system_dict_value = async(data?:DictValueDto) => {
    
  const res = await server.PUT (`/system/dict/value`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加值
   * @param {DictValueDto} data? 
   * @return {*}
   */
  export const post_system_dict_value = async(data?:DictValueDto) => {
    
  const res = await server.POST (`/system/dict/value`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改类型
   * @param {DictTypeDto} data? 
   * @return {*}
   */
  export const put_system_dict_type = async(data?:DictTypeDto) => {
    
  const res = await server.PUT (`/system/dict/type`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加类型
   * @param {DictTypeDto} data? 
   * @return {*}
   */
  export const post_system_dict_type = async(data?:DictTypeDto) => {
    
  const res = await server.POST (`/system/dict/type`,{data} );

        return res?.success; 
        }
    
   export interface GetSystemDepartments  extends Paging {
        orgId?:string;
      
      }
  /** 
   * @description:  部门列表-分页
   * @param {GetSystemDepartments} params? 
   * @return {*}
   */
  export const get_system_departments = async(params?:GetSystemDepartments) => {
    
  const res = await server.GET<IPage<SysDep>> (`/system/departments`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新部门
   * @param {DepDto} data? 
   * @return {*}
   */
  export const put_system_departments = async(data?:DepDto) => {
    
  const res = await server.PUT (`/system/departments`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加部门
   * @param {DepDto} data? 
   * @return {*}
   */
  export const post_system_departments = async(data?:DepDto) => {
    
  const res = await server.POST (`/system/departments`,{data} );

        return res?.success; 
        }
    
   export interface GetStaffWorkTags   {
        type?:number;
      
      }
  /** 
   * @description:  undefined
   * @param {GetStaffWorkTags} params? 
   * @return {*}
   */
  export const get_staff_work_tags = async(params?:GetStaffWorkTags) => {
    
  const res = await server.GET<DeviceWorkTag[]> (`/staff/work-tags`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  undefined
   * @param {DeviceWorkTagDto} data? 
   * @return {*}
   */
  export const put_staff_work_tags = async(data?:DeviceWorkTagDto) => {
    
  const res = await server.PUT (`/staff/work-tags`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  undefined
   * @param {DeviceWorkTagDto} data? 
   * @return {*}
   */
  export const post_staff_work_tags = async(data?:DeviceWorkTagDto) => {
    
  const res = await server.POST (`/staff/work-tags`,{data} );

        return res?.success; 
        }
    
   export interface GetStaffPatrolUsers  extends PatrolUserSearchDto,Paging {
        
      
      }
  /** 
   * @description:  巡查人员列表
   * @param {GetStaffPatrolUsers} params? 
   * @return {*}
   */
  export const get_staff_patrol_users = async(params?:GetStaffPatrolUsers) => {
    
  const res = await server.GET<IPage<PatrolUserResult>> (`/staff/patrol-users`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新巡查人员
   * @param {PatrolUserDto} data? 
   * @return {*}
   */
  export const put_staff_patrol_users = async(data?:PatrolUserDto) => {
    
  const res = await server.PUT (`/staff/patrol-users`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加巡查人员
   * @param {PatrolUserDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users = async(data?:PatrolUserDto) => {
    
  const res = await server.POST (`/staff/patrol-users`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改员工密码
   * @param {StaffResetPasswordDto} data? 
   * @return {*}
   */
  export const put_staff_patrol_users_password = async(data?:StaffResetPasswordDto) => {
    
  const res = await server.PUT<Boolean> (`/staff/patrol-users/password`,{data} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  巡查角色列表-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_staff_patrol_roles = async(params?:Paging) => {
    
  const res = await server.GET<IPage<PatrolRole>> (`/staff/patrol-roles`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新巡查角色
   * @param {PatrolRoleDto} data? 
   * @return {*}
   */
  export const put_staff_patrol_roles = async(data?:PatrolRoleDto) => {
    
  const res = await server.PUT (`/staff/patrol-roles`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加巡查角色
   * @param {PatrolRoleDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_roles = async(data?:PatrolRoleDto) => {
    
  const res = await server.POST (`/staff/patrol-roles`,{data} );

        return res?.success; 
        }
    
   export interface GetSignRules   {
        name?:string;
      
      }
  /** 
   * @description:  考勤规则列表
   * @param {GetSignRules} params? 
   * @return {*}
   */
  export const get_sign_rules = async(params?:GetSignRules) => {
    
  const res = await server.GET<SignRuleVo[]> (`/sign/rules`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  编辑考勤规则
   * @param {SignRuleDto} data? 
   * @return {*}
   */
  export const put_sign_rules = async(data?:SignRuleDto) => {
    
  const res = await server.PUT (`/sign/rules`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加考勤规则
   * @param {SignRuleDto} data? 
   * @return {*}
   */
  export const post_sign_rules = async(data?:SignRuleDto) => {
    
  const res = await server.POST (`/sign/rules`,{data} );

        return res?.success; 
        }
    
   export interface GetMonthlyEvent  extends MonthlyEventSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetMonthlyEvent} params? 
   * @return {*}
   */
  export const get_monthly_event = async(params?:GetMonthlyEvent) => {
    
  const res = await server.GET<IPage<MonthlyEventVo>> (`/monthly/event`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑包月活动
   * @param {MonthlyEventDto} data? 
   * @return {*}
   */
  export const put_monthly_event = async(data?:MonthlyEventDto) => {
    
  const res = await server.PUT (`/monthly/event`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加包月活动
   * @param {MonthlyEventDto} data? 
   * @return {*}
   */
  export const post_monthly_event = async(data?:MonthlyEventDto) => {
    
  const res = await server.POST (`/monthly/event`,{data} );

        return res?.success; 
        }
    
   export interface GetMiniEnterpriseUser  extends EnterpriseUsersSearchDto,Paging {
        
      
      }
  /** 
   * @description:  企业用户-带分页
   * @param {GetMiniEnterpriseUser} params? 
   * @return {*}
   */
  export const get_mini_enterprise_user = async(params?:GetMiniEnterpriseUser) => {
    
  const res = await server.GET<IPage<EnterpriseUserVo>> (`/mini/enterprise-user`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新企业用户
   * @param {EnterpriseUserDto} data? 
   * @return {*}
   */
  export const put_mini_enterprise_user = async(data?:EnterpriseUserDto) => {
    
  const res = await server.PUT (`/mini/enterprise-user`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加企业用户
   * @param {EnterpriseUserDto} data? 
   * @return {*}
   */
  export const post_mini_enterprise_user = async(data?:EnterpriseUserDto) => {
    
  const res = await server.POST (`/mini/enterprise-user`,{data} );

        return res?.success; 
        }
    
   export interface GetMerchant  extends MerchantSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetMerchant} params? 
   * @return {*}
   */
  export const get_merchant = async(params?:GetMerchant) => {
    
  const res = await server.GET<IPage<MerchantVo>> (`/merchant`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑
   * @param {MerchantDto} data? 
   * @return {*}
   */
  export const put_merchant = async(data?:MerchantDto) => {
    
  const res = await server.PUT (`/merchant`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增
   * @param {MerchantDto} data? 
   * @return {*}
   */
  export const post_merchant = async(data?:MerchantDto) => {
    
  const res = await server.POST (`/merchant`,{data} );

        return res?.success; 
        }
    
   export interface GetMerchantUser  extends MerchantUserSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetMerchantUser} params? 
   * @return {*}
   */
  export const get_merchant_user = async(params?:GetMerchantUser) => {
    
  const res = await server.GET<IPage<MerchantUserVo>> (`/merchant/user`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑
   * @param {MerchantUserDto} data? 
   * @return {*}
   */
  export const put_merchant_user = async(data?:MerchantUserDto) => {
    
  const res = await server.PUT (`/merchant/user`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增
   * @param {MerchantUserDto} data? 
   * @return {*}
   */
  export const post_merchant_user = async(data?:MerchantUserDto) => {
    
  const res = await server.POST (`/merchant/user`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改菜单
   * @param {MenuDto} data? 
   * @return {*}
   */
  export const put_merchant_menus = async(data?:MenuDto) => {
    
  const res = await server.PUT (`/merchant/menus`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加菜单
   * @param {MenuDto} data? 
   * @return {*}
   */
  export const post_merchant_menus = async(data?:MenuDto) => {
    
  const res = await server.POST (`/merchant/menus`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationTopUpDiscountsId  extends TopUpDiscountsDto {
        id?:string;
      
      }
  /** 
   * @description:  修改一个优惠活动
   * @param {PutInformationTopUpDiscountsId} params?,* @param {TopUpDiscountsDto} data? 
   * @return {*}
   */
  export const put_information_top_up_discounts_id = async(params?:PutInformationTopUpDiscountsId,data?:TopUpDiscountsDto) => {
    
  const res = await server.PUT (`/information/top-up-discounts/${params?.id}`,{data,params} );

        return res?.success; 
        }
    
   export interface DeleteInformationTopUpDiscountsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除一个优惠活动
   * @param {DeleteInformationTopUpDiscountsId} params? 
   * @return {*}
   */
  export const delete_information_top_up_discounts_id = async(params?:DeleteInformationTopUpDiscountsId) => {
    
  const res = await server.DELETE (`/information/top-up-discounts/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  该活动修改一个子项目
   * @param {TopUpDiscountsItemSaveDto} data? 
   * @return {*}
   */
  export const put_information_top_up_discounts_item = async(data?:TopUpDiscountsItemSaveDto) => {
    
  const res = await server.PUT (`/information/top-up-discounts-item`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  该活动新增一个子项目
   * @param {TopUpDiscountsItemSaveDto} data? 
   * @return {*}
   */
  export const post_information_top_up_discounts_item = async(data?:TopUpDiscountsItemSaveDto) => {
    
  const res = await server.POST (`/information/top-up-discounts-item`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  收费规则列表-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_information_rules = async(params?:Paging) => {
    
  const res = await server.GET<IPage<ParkRateRule>> (`/information/rules`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新收费规则
   * @param {RateRuleDto} data? 
   * @return {*}
   */
  export const put_information_rules = async(data?:RateRuleDto) => {
    
  const res = await server.PUT (`/information/rules`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增收费规则
   * @param {RateRuleDto} data? 
   * @return {*}
   */
  export const post_information_rules = async(data?:RateRuleDto) => {
    
  const res = await server.POST (`/information/rules`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationPpls  extends PplSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地锁列表-带分页
   * @param {GetInformationPpls} params? 
   * @return {*}
   */
  export const get_information_ppls = async(params?:GetInformationPpls) => {
    
  const res = await server.GET<IPage<PplVo>> (`/information/ppls`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑地锁
   * @param {PplEditSnDto} data? 
   * @return {*}
   */
  export const put_information_ppls = async(data?:PplEditSnDto) => {
    
  const res = await server.PUT (`/information/ppls`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加地锁
   * @param {PplAddDto} data? 
   * @return {*}
   */
  export const post_information_ppls = async(data?:PplAddDto) => {
    
  const res = await server.POST (`/information/ppls`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量删除地锁
   * @param {PplDeleteDto} data? 
   * @return {*}
   */
  export const delete_information_ppls = async(data?:PplDeleteDto) => {
    
  const res = await server.DELETE (`/information/ppls`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationPplsIdQrcode   {
        id?:string;length?:number;
      
      }
  /** 
   * @description:  重新生成二维码
   * @param {PutInformationPplsIdQrcode} params? 
   * @return {*}
   */
  export const put_information_ppls_id_qrcode = async(params?:PutInformationPplsIdQrcode) => {
    
  const res = await server.PUT<string> (`/information/ppls/${params?.id}/qrcode`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationPlaces   {
        type?:number;number?:string;
      
      }
  /** 
   * @description:  undefined
   * @param {GetInformationPlaces} params? 
   * @return {*}
   */
  export const get_information_places = async(params?:GetInformationPlaces) => {
    
  const res = await server.GET<ParkingPlace[]> (`/information/places`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  修改停车位编号
   * @param {PlaceUpdDto} data? 
   * @return {*}
   */
  export const put_information_places = async(data?:PlaceUpdDto) => {
    
  const res = await server.PUT (`/information/places`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增停车位
   * @param {PlaceSaveDto} data? 
   * @return {*}
   */
  export const post_information_places = async(data?:PlaceSaveDto) => {
    
  const res = await server.POST (`/information/places`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量转移车位到新点
   * @param {PlaceTransferDto} data? 
   * @return {*}
   */
  export const put_information_places_transfer = async(data?:PlaceTransferDto) => {
    
  const res = await server.PUT (`/information/places/transfer`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改车位收费状态
   * @param {PlaceUpdChargeStatusDto} data? 
   * @return {*}
   */
  export const put_information_places_chargeStatus = async(data?:PlaceUpdChargeStatusDto) => {
    
  const res = await server.PUT (`/information/places/chargeStatus`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量修改停车位编号
   * @param {PlaceUpdBatchDto} data? 
   * @return {*}
   */
  export const put_information_places_batch = async(data?:PlaceUpdBatchDto) => {
    
  const res = await server.PUT (`/information/places/batch`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  删除停车位,批量
   * @param {PlaceDeleteDto} data? 
   * @return {*}
   */
  export const delete_information_places_batch = async(data?:PlaceDeleteDto) => {
    
  const res = await server.DELETE (`/information/places/batch`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationLots  extends LotSearchDto,Paging {
        
      
      }
  /** 
   * @description:  停车点列表-带分页
   * @param {GetInformationLots} params? 
   * @return {*}
   */
  export const get_information_lots = async(params?:GetInformationLots) => {
    
  const res = await server.GET<IPage<LotVo>> (`/information/lots`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新停车点
   * @param {LotDto} data? 
   * @return {*}
   */
  export const put_information_lots = async(data?:LotDto) => {
    
  const res = await server.PUT (`/information/lots`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增停车点
   * @param {LotDto} data? 
   * @return {*}
   */
  export const post_information_lots = async(data?:LotDto) => {
    
  const res = await server.POST (`/information/lots`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  删除停车点
   * @param {LotDeleteDto} data? 
   * @return {*}
   */
  export const delete_information_lots = async(data?:LotDeleteDto) => {
    
  const res = await server.DELETE (`/information/lots`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更改配置-小票开关
   * @param {LotSetTicketDto} data? 
   * @return {*}
   */
  export const put_information_lots_ticket = async(data?:LotSetTicketDto) => {
    
  const res = await server.PUT (`/information/lots/ticket`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更新停车点位状态
   * @param {LotStatusUpdBatchDto} data? 
   * @return {*}
   */
  export const put_information_lots_status = async(data?:LotStatusUpdBatchDto) => {
    
  const res = await server.PUT (`/information/lots/status`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  设置点位所属警察局
   * @param {LotSetPoliceDto} data? 
   * @return {*}
   */
  export const put_information_lots_police = async(data?:LotSetPoliceDto) => {
    
  const res = await server.PUT (`/information/lots/police`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  设置点位周期
   * @param {LotPeriodDto} data? 
   * @return {*}
   */
  export const put_information_lots_period = async(data?:LotPeriodDto) => {
    
  const res = await server.PUT (`/information/lots/period`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更改配置-支付类型
   * @param {LotSetPayTypeDto} data? 
   * @return {*}
   */
  export const put_information_lots_pay_type = async(data?:LotSetPayTypeDto) => {
    
  const res = await server.PUT (`/information/lots/pay-type`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更改配置-点位号-劳务方
   * @param {LotSetLotNumDto} data? 
   * @return {*}
   */
  export const put_information_lots_info = async(data?:LotSetLotNumDto) => {
    
  const res = await server.PUT (`/information/lots/info`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  查停车点位组列表
   * @param {LotGroupSearchDto} params? 
   * @return {*}
   */
  export const get_information_lot_group = async(params?:LotGroupSearchDto) => {
    
  const res = await server.GET<LotGroupVo[]> (`/information/lot-group`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  编辑停车点位组
   * @param {LotGroupDto} data? 
   * @return {*}
   */
  export const put_information_lot_group = async(data?:LotGroupDto) => {
    
  const res = await server.PUT (`/information/lot-group`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增停车点位组
   * @param {LotGroupDto} data? 
   * @return {*}
   */
  export const post_information_lot_group = async(data?:LotGroupDto) => {
    
  const res = await server.POST (`/information/lot-group`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationGeoms  extends GeomSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地磁列表-带分页
   * @param {GetInformationGeoms} params? 
   * @return {*}
   */
  export const get_information_geoms = async(params?:GetInformationGeoms) => {
    
  const res = await server.GET<IPage<GeomVo>> (`/information/geoms`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  编辑地磁
   * @param {GeomEditDto} data? 
   * @return {*}
   */
  export const put_information_geoms = async(data?:GeomEditDto) => {
    
  const res = await server.PUT (`/information/geoms`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加地磁
   * @param {GeomAddDto} data? 
   * @return {*}
   */
  export const post_information_geoms = async(data?:GeomAddDto) => {
    
  const res = await server.POST (`/information/geoms`,{data} );

        return res?.success; 
        }
    
   export interface DeleteInformationGeoms   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  删除地磁
   * @param {DeleteInformationGeoms} params? 
   * @return {*}
   */
  export const delete_information_geoms = async(params?:DeleteInformationGeoms) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.DELETE (`/information/geoms`,{data:formdata} );

        return res?.success; 
        }
    
   export interface GetInformationFreecars  extends FreeCarsSearchDto,Paging {
        
      
      }
  /** 
   * @description:  免费车辆列表
   * @param {GetInformationFreecars} params? 
   * @return {*}
   */
  export const get_information_freeCars = async(params?:GetInformationFreecars) => {
    
  const res = await server.GET<IPage<FreeCarVo>> (`/information/freeCars`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改免费车辆
   * @param {FreeCarDto} data? 
   * @return {*}
   */
  export const put_information_freeCars = async(data?:FreeCarDto) => {
    
  const res = await server.PUT (`/information/freeCars`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加免费车辆
   * @param {FreeCarDto} data? 
   * @return {*}
   */
  export const post_information_freeCars = async(data?:FreeCarDto) => {
    
  const res = await server.POST (`/information/freeCars`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  批量删除免费车辆
   * @param {string[]} data? 
   * @return {*}
   */
  export const delete_information_freeCars = async(data?:string[]) => {
    
  const res = await server.DELETE (`/information/freeCars`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationFreecarsIdStatus   {
        id?:string;
      
      }
  /** 
   * @description:  切换免费车辆状态
   * @param {PutInformationFreecarsIdStatus} params? 
   * @return {*}
   */
  export const put_information_freeCars_id_status = async(params?:PutInformationFreecarsIdStatus) => {
    
  const res = await server.PUT (`/information/freeCars/${params?.id}/status`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  假日免费规则列表-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_information_free_rules = async(params?:Paging) => {
    
  const res = await server.GET<IPage<AccountFreeRule>> (`/information/free-rules`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新假日免费规则
   * @param {AccountFreeRuleDto} data? 
   * @return {*}
   */
  export const put_information_free_rules = async(data?:AccountFreeRuleDto) => {
    
  const res = await server.PUT (`/information/free-rules`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationFreeRules   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  新增假日免费规则
   * @param {PostInformationFreeRules} params? 
   * @return {*}
   */
  export const post_information_free_rules = async(params?:PostInformationFreeRules) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/information/free-rules`,{data:formdata} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  核销
   * @param {BaseIds} data? 
   * @return {*}
   */
  export const put_financial_accounts_v2_confirm = async(data?:BaseIds) => {
    
  const res = await server.PUT (`/financial/accounts/v2/confirm`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  核销
   * @param {BaseIds} data? 
   * @return {*}
   */
  export const put_financial_accounts_station_confirm = async(data?:BaseIds) => {
    
  const res = await server.PUT (`/financial/accounts/station/confirm`,{data} );

        return res?.success; 
        }
    
   export interface GetCouponModel  extends CouponModelSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询停车券-分页
   * @param {GetCouponModel} params? 
   * @return {*}
   */
  export const get_coupon_model = async(params?:GetCouponModel) => {
    
  const res = await server.GET<IPage<CouponModelVo>> (`/coupon/model`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改停车券模板
   * @param {CouponModelDto} data? 
   * @return {*}
   */
  export const put_coupon_model = async(data?:CouponModelDto) => {
    
  const res = await server.PUT (`/coupon/model`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加停车券模板
   * @param {CouponModelDto} data? 
   * @return {*}
   */
  export const post_coupon_model = async(data?:CouponModelDto) => {
    
  const res = await server.POST (`/coupon/model`,{data} );

        return res?.success; 
        }
    
   export interface GetChargingShops  extends ChargingShopSearchDto,Paging {
        
      
      }
  /** 
   * @description:  充电站-带分页
   * @param {GetChargingShops} params? 
   * @return {*}
   */
  export const get_charging_shops = async(params?:GetChargingShops) => {
    
  const res = await server.GET<IPage<ChargingShopVo>> (`/charging-shops`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新充电站
   * @param {ChargingShopDto} data? 
   * @return {*}
   */
  export const put_charging_shops = async(data?:ChargingShopDto) => {
    
  const res = await server.PUT (`/charging-shops`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加充电站
   * @param {ChargingShopDto} data? 
   * @return {*}
   */
  export const post_charging_shops = async(data?:ChargingShopDto) => {
    
  const res = await server.POST (`/charging-shops`,{data} );

        return res?.success; 
        }
    
   export interface GetChargingPoints  extends ChargingPointSearchDto,Paging {
        
      
      }
  /** 
   * @description:  充电桩-带分页
   * @param {GetChargingPoints} params? 
   * @return {*}
   */
  export const get_charging_points = async(params?:GetChargingPoints) => {
    
  const res = await server.GET<IPage<ChargingPointVo>> (`/charging-points`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  更新充电桩
   * @param {ChargingPointDto} data? 
   * @return {*}
   */
  export const put_charging_points = async(data?:ChargingPointDto) => {
    
  const res = await server.PUT (`/charging-points`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  添加充电桩
   * @param {ChargingPointDto} data? 
   * @return {*}
   */
  export const post_charging_points = async(data?:ChargingPointDto) => {
    
  const res = await server.POST (`/charging-points`,{data} );

        return res?.success; 
        }
    
   export interface GetApproveFlow  extends SearchFlowDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetApproveFlow} params? 
   * @return {*}
   */
  export const get_approve_flow = async(params?:GetApproveFlow) => {
    
  const res = await server.GET<IPage<ApproveFlow>> (`/approve/flow`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改
   * @param {ApproveFlowDto} data? 
   * @return {*}
   */
  export const put_approve_flow = async(data?:ApproveFlowDto) => {
    
  const res = await server.PUT (`/approve/flow`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  undefined
   * @param {ApproveFlowDto} data? 
   * @return {*}
   */
  export const post_approve_flow = async(data?:ApproveFlowDto) => {
    
  const res = await server.POST (`/approve/flow`,{data} );

        return res?.success; 
        }
    
   export interface PutAdPositionStatusId   {
        id?:string;
      
      }
  /** 
   * @description:  改变状态,会返回改变后的状态
   * @param {PutAdPositionStatusId} params? 
   * @return {*}
   */
  export const put_ad_position_status_id = async(params?:PutAdPositionStatusId) => {
    
  const res = await server.PUT<Boolean> (`/ad/position-status/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface PutAdItemDelId   {
        id?:string;
      
      }
  /** 
   * @description:  广告排期删除
   * @param {PutAdItemDelId} params? 
   * @return {*}
   */
  export const put_ad_item_del_id = async(params?:PutAdItemDelId) => {
    
  const res = await server.PUT (`/ad/item-del/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  广告排期修改
   * @param {AdItemChangeDto} data? 
   * @return {*}
   */
  export const put_ad_item_change = async(data?:AdItemChangeDto) => {
    
  const res = await server.PUT (`/ad/item-change`,{data} );

        return res?.success; 
        }
    
   export interface PostWorkerChannelSsChannelid   {
        channelId?:string;
      
      }
  /** 
   * @description:  拍个通道快照
   * @param {PostWorkerChannelSsChannelid} params? 
   * @return {*}
   */
  export const post_worker_channel_ss_channelId = async(params?:PostWorkerChannelSsChannelid) => {
    
  const res = await server.POST (`/worker/channel/ss/${params?.channelId}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  开闸-会记录进日志
   * @param {OpenChannelDto} data? 
   * @return {*}
   */
  export const post_worker_channel_open_always = async(data?:OpenChannelDto) => {
    
  const res = await server.POST (`/worker/channel/open-always`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  入口-对通道等待车辆进行入场放行,会记录操作日志
   * @param {InletOpenWaitDto} data? 
   * @return {*}
   */
  export const post_worker_channel_inlet_open_wait = async(data?:InletOpenWaitDto) => {
    
  const res = await server.POST (`/worker/channel/inlet-open-wait`,{data} );

        return res?.success; 
        }
    
   export interface PostWorkerChannelFlvChannelid   {
        channelId?:string;
      
      }
  /** 
   * @description:  获取摄像头视频
   * @param {PostWorkerChannelFlvChannelid} params? 
   * @return {*}
   */
  export const post_worker_channel_flv_channelId = async(params?:PostWorkerChannelFlvChannelid) => {
    
  const res = await server.POST<string> (`/worker/channel/flv/${params?.channelId}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  出口-把场内车辆人工指定到一个出口进行出场操作
   * @param {ExitOnlineWaitDto} data? 
   * @return {*}
   */
  export const post_worker_channel_exit_online_wait = async(data?:ExitOnlineWaitDto) => {
    
  const res = await server.POST (`/worker/channel/exit-online-wait`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  出口-修改通道等待的车辆信息,会自动根据条件结果重新构建等待信息(会放行或者等待支付),主要针对的是出口车牌识别错误的
   * @param {ExitChangeWaitDto} data? 
   * @return {*}
   */
  export const post_worker_channel_exit_change_wait = async(data?:ExitChangeWaitDto) => {
    
  const res = await server.POST (`/worker/channel/exit-change-wait`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  降杆-会记录进日志
   * @param {OpenChannelDto} data? 
   * @return {*}
   */
  export const post_worker_channel_close_always = async(data?:OpenChannelDto) => {
    
  const res = await server.POST (`/worker/channel/close-always`,{data} );

        return res?.success; 
        }
    
   export interface PostTccSpecialCarImport   {
        lotId?:string;specialType?:string;file?:File;
      [key:string]:any
      }
  /** 
   * @description:  导入特殊车辆
   * @param {PostTccSpecialCarImport} params? 
   * @return {*}
   */
  export const post_tcc_special_car_import = async(params?:PostTccSpecialCarImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/tcc/special-car/import`,{data:formdata} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  导出特殊车辆
   * @param {TccSpecialCarSearchDto} data? 
   * @return {*}
   */
  export const post_tcc_special_car_export = async(data?:TccSpecialCarSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/special-car/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  添加更新收费规则
   * @param {TccLibRateDto} data? 
   * @return {*}
   */
  export const post_tcc_info_rate = async(data?:TccLibRateDto) => {
    
  const res = await server.POST (`/tcc/info/rate`,{data} );

        return res?.success; 
        }
    
   export interface PostTccChannelIdXspPush  extends XspVoiceText {
        id?:string;
      
      }
  /** 
   * @description:  显示屏手动推送
   * @param {PostTccChannelIdXspPush} params?,* @param {XspVoiceText} data? 
   * @return {*}
   */
  export const post_tcc_channel_id_xsp_push = async(params?:PostTccChannelIdXspPush,data?:XspVoiceText) => {
    
  const res = await server.POST (`/tcc/channel/${params?.id}/xsp/push`,{data,params} );

        return res?.success; 
        }
    
   export interface PostSystemTenantIdStatus   {
        id?:string;
      
      }
  /** 
   * @description:  租户状态修改
   * @param {PostSystemTenantIdStatus} params? 
   * @return {*}
   */
  export const post_system_tenant_id_status = async(params?:PostSystemTenantIdStatus) => {
    
  const res = await server.POST (`/system/tenant/${params?.id}/status`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改登录密码
   * @param {ResetLoginPassDto} data? 
   * @return {*}
   */
  export const post_system_resetLoginPass = async(data?:ResetLoginPassDto) => {
    
  const res = await server.POST (`/system/resetLoginPass`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemMenusImport   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  导入菜单
   * @param {PostSystemMenusImport} params? 
   * @return {*}
   */
  export const post_system_menus_import = async(params?:PostSystemMenusImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/system/menus/import`,{data:formdata} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  导出菜单
     
   * @return {*}
   */
  export const post_system_menus_export = async() => {
    
  const res = await server.POST<ArrayBuffer> (`/system/menus/export`,{responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  登录
   * @param {AdminLoginDto} data? 
   * @return {*}
   */
  export const post_system_login = async(data?:AdminLoginDto) => {
    
  const res = await server.POST<LoginResult> (`/system/login`,{data} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  余额退款
   * @param {RefundOrderDto} data? 
   * @return {*}
   */
  export const post_support_refund = async(data?:RefundOrderDto) => {
    
  const res = await server.POST (`/support/refund`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  订单退款
   * @param {SupportRefundOrderDto} data? 
   * @return {*}
   */
  export const post_support_refund2 = async(data?:SupportRefundOrderDto) => {
    
  const res = await server.POST (`/support/refund2`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  包月退款
   * @param {RefundMonthDto} data? 
   * @return {*}
   */
  export const post_support_refund_month = async(data?:RefundMonthDto) => {
    
  const res = await server.POST (`/support/refund-month`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  按三方支付订单号查询相关订单
   * @param {TransactionPayDto} params? 
   * @return {*}
   */
  export const get_support_pay_info = async(params?:TransactionPayDto) => {
    
  const res = await server.GET<Order[]> (`/support/pay-info`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  整体退支付
   * @param {CsRefundPayInfoDto} data? 
   * @return {*}
   */
  export const post_support_pay_info = async(data?:CsRefundPayInfoDto) => {
    
  const res = await server.POST (`/support/pay-info`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  合并订单
   * @param {MergeOrderDto} data? 
   * @return {*}
   */
  export const post_support_merge = async(data?:MergeOrderDto) => {
    
  const res = await server.POST (`/support/merge`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  免单
   * @param {PayOrderAdjustDto} data? 
   * @return {*}
   */
  export const post_support_free = async(data?:PayOrderAdjustDto) => {
    
  const res = await server.POST (`/support/free`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  结束订单
   * @param {EndOrderDto} data? 
   * @return {*}
   */
  export const post_support_end_order = async(data?:EndOrderDto) => {
    
  const res = await server.POST (`/support/end-order`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  远程降锁
   * @param {SupportDownLockDto} data? 
   * @return {*}
   */
  export const post_support_down_lock = async(data?:SupportDownLockDto) => {
    
  const res = await server.POST (`/support/down-lock`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  赠送停车券
   * @param {SendCouponDto} data? 
   * @return {*}
   */
  export const post_support_coupon = async(data?:SendCouponDto) => {
    
  const res = await server.POST (`/support/coupon`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  修改车牌
   * @param {PayOrderAdjustDto} data? 
   * @return {*}
   */
  export const post_support_amend = async(data?:PayOrderAdjustDto) => {
    
  const res = await server.POST (`/support/amend`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  核减金额
   * @param {PayOrderAdjustDto} data? 
   * @return {*}
   */
  export const post_support_adjust = async(data?:PayOrderAdjustDto) => {
    
  const res = await server.POST (`/support/adjust`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  步数统计-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_statistics_walk_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/walk/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  新能源车点位数据分析-excel导出
   * @param {NewEnergyStaDto} data? 
   * @return {*}
   */
  export const post_statistics_newEnergyLot_export = async(data?:NewEnergyStaDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/newEnergyLot/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  新能源车月数据分析-excel导出
   * @param {NewEnergyStaDto} data? 
   * @return {*}
   */
  export const post_statistics_newEnergy_export = async(data?:NewEnergyStaDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/newEnergy/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  点位列表-导出
   * @param {LotInfoDto} data? 
   * @return {*}
   */
  export const post_statistics_lot_export = async(data?:LotInfoDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/lot/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  地磁分析导出
   * @param {GeomStaDtoRange} data? 
   * @return {*}
   */
  export const post_statistics_geom_export = async(data?:GeomStaDtoRange) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/geom/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  积分统计-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_statistics_credits_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/credits/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  工作记录-导出
   * @param {StaffWorkSearchDto} data? 
   * @return {*}
   */
  export const post_staff_work_export = async(data?:StaffWorkSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/work/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  点位绩效扣分总数据
   * @param {PdaPerformanceDetailSearchDto} params? 
   * @return {*}
   */
  export const get_staff_performance_score = async(params?:PdaPerformanceDetailSearchDto) => {
    
  const res = await server.GET<PdaPerformanceScoreVo> (`/staff/performance/score`,{params} );

        return res?.result; 
        }
    
   export interface PostStaffPerformanceScore  extends PdaPerformanceDownScoreDto {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  扣分
   * @param {PostStaffPerformanceScore} params? 
   * @return {*}
   */
  export const post_staff_performance_score = async(params?:PostStaffPerformanceScore) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/staff/performance/score`,{data:formdata} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  绩效扣分明细-导出
   * @param {PdaPerformanceDetailSearchDto} data? 
   * @return {*}
   */
  export const post_staff_performance_score_items_export = async(data?:PdaPerformanceDetailSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/score/items/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  设置绩效扣分规则
   * @param {PdaPerformanceRuleDto} data? 
   * @return {*}
   */
  export const post_staff_performance_rule = async(data?:PdaPerformanceRuleDto) => {
    
  const res = await server.POST (`/staff/performance/rule`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  点位绩效明细-导出
   * @param {PdaPerformanceDetailSearchDto} data? 
   * @return {*}
   */
  export const post_staff_performance_items_export = async(data?:PdaPerformanceDetailSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/items/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  总体绩效列表-导出
   * @param {PdaPerformanceSearchDto} data? 
   * @return {*}
   */
  export const post_staff_performance_export = async(data?:PdaPerformanceSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  归档某日数据
   * @param {TimeLocalDate} data? 
   * @return {*}
   */
  export const post_staff_performance_archive = async(data?:TimeLocalDate) => {
    
  const res = await server.POST (`/staff/performance/archive`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  归档指定日期开始结束数据
   * @param {TimeDateWithFromTo} data? 
   * @return {*}
   */
  export const post_staff_performance_archive_from_to = async(data?:TimeDateWithFromTo) => {
    
  const res = await server.POST (`/staff/performance/archive-from-to`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolUsersIdResume   {
        id?:string;resume?:boolean;
      
      }
  /** 
   * @description:  离岗巡查人员复岗
   * @param {PostStaffPatrolUsersIdResume} params? 
   * @return {*}
   */
  export const post_staff_patrol_users_id_resume = async(params?:PostStaffPatrolUsersIdResume) => {
    
  const res = await server.POST (`/staff/patrol-users/${params?.id}/resume`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  查看地锁巡查的轨迹-地图模式
   * @param {PatrolTrackMapDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_track_map = async(data?:PatrolTrackMapDto) => {
    
  const res = await server.POST<PatrolTrackMapVo[]> (`/staff/patrol-users/track/map`,{data} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  查看地锁巡查的轨迹-列表模式
   * @param {PatrolTrackListDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_track_list = async(data?:PatrolTrackListDto) => {
    
  const res = await server.POST<PatrolTrackListVo[]> (`/staff/patrol-users/track/list`,{data} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  巡查人员列表-导出
   * @param {PatrolUserSearchDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_export = async(data?:PatrolUserSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/patrol-users/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  编辑修改巡查人员和停车点
   * @param {BindPatrolLot} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_bind = async(data?:BindPatrolLot) => {
    
  const res = await server.POST (`/staff/patrol-users/bind`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  绑定角色
   * @param {PatrolRoleBindDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_bind_role = async(data?:PatrolRoleBindDto) => {
    
  const res = await server.POST (`/staff/patrol-users/bind-role`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  绑定点位组
   * @param {BindPatrolLotGroupDto} data? 
   * @return {*}
   */
  export const post_staff_patrol_users_bind_lot_group = async(data?:BindPatrolLotGroupDto) => {
    
  const res = await server.POST (`/staff/patrol-users/bind-lot-group`,{data} );

        return res?.success; 
        }
    
   export interface GetSignStatistics  extends SignStaticsSearchDto,Paging {
        
      
      }
  /** 
   * @description:  考勤统计列表
   * @param {GetSignStatistics} params? 
   * @return {*}
   */
  export const get_sign_statistics = async(params?:GetSignStatistics) => {
    
  const res = await server.GET<IPage<SignRecordVo>> (`/sign/statistics`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  考勤统计导出
   * @param {SignStaticsSearchDto} data? 
   * @return {*}
   */
  export const post_sign_statistics = async(data?:SignStaticsSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/sign/statistics`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  绑定考勤用户
   * @param {BingSignUserDto} data? 
   * @return {*}
   */
  export const post_sign_rules_group = async(data?:BingSignUserDto) => {
    
  const res = await server.POST (`/sign/rules/group`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  当前停车数据-excel导出
   * @param {OnlineSearchDto} data? 
   * @return {*}
   */
  export const post_orders_online_export = async(data?:OnlineSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/orders/online/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  手动录入订单
   * @param {ManualOnlineDto} data? 
   * @return {*}
   */
  export const post_orders_manual = async(data?:ManualOnlineDto) => {
    
  const res = await server.POST (`/orders/manual`,{data} );

        return res?.success; 
        }
    
   export interface PostOrdersImport   {
        lotId?:string;file?:File;
      [key:string]:any
      }
  /** 
   * @description:  导入手动录入订单
   * @param {PostOrdersImport} params? 
   * @return {*}
   */
  export const post_orders_import = async(params?:PostOrdersImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/orders/import`,{data:formdata} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  历史数据-excel导出
   * @param {OrderSearchDto} data? 
   * @return {*}
   */
  export const post_orders_history_export = async(data?:OrderSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/orders/history/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  已读部分消息
   * @param {BaseIds} data? 
   * @return {*}
   */
  export const post_notice_system_read = async(data?:BaseIds) => {
    
  const res = await server.POST (`/notice/system/read`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  发送
   * @param {SmsSendDto} data? 
   * @return {*}
   */
  export const post_notice_sms_send = async(data?:SmsSendDto) => {
    
  const res = await server.POST (`/notice/sms/send`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  告警-导出
   * @param {PplWarnSearchDto} data? 
   * @return {*}
   */
  export const post_msg_ppl_warn_export = async(data?:PplWarnSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/ppl-warn/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  故障-导出
   * @param {PplErrorSearchDto} data? 
   * @return {*}
   */
  export const post_msg_ppl_errors_export = async(data?:PplErrorSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/ppl-errors/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  电池电量告警-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_msg_device_voltage_statics_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/device-voltage/statics/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  电池电量告警-excel导出
   * @param {DeviceVoltageMsgDto} data? 
   * @return {*}
   */
  export const post_msg_device_voltage_export = async(data?:DeviceVoltageMsgDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/device-voltage/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  移除包月申请
   * @param {RemoveApplyDto} data? 
   * @return {*}
   */
  export const post_monthly_remove_apply = async(data?:RemoveApplyDto) => {
    
  const res = await server.POST (`/monthly/remove-apply`,{data} );

        return res?.success; 
        }
    
   export interface PostMonthlyImport   {
        groupId?:string;file?:File;
      [key:string]:any
      }
  /** 
   * @description:  导入月租车
   * @param {PostMonthlyImport} params? 
   * @return {*}
   */
  export const post_monthly_import = async(params?:PostMonthlyImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/monthly/import`,{data:formdata} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  修改包月组
   * @param {CarMonthlyGroupDto} data? 
   * @return {*}
   */
  export const post_monthly_group_upd = async(data?:CarMonthlyGroupDto) => {
    
  const res = await server.POST (`/monthly/group-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostMonthlyGroupDelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除包月组
   * @param {PostMonthlyGroupDelId} params? 
   * @return {*}
   */
  export const post_monthly_group_del_id = async(params?:PostMonthlyGroupDelId) => {
    
  const res = await server.POST (`/monthly/group-del/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增包月组
   * @param {CarMonthlyGroupDto} data? 
   * @return {*}
   */
  export const post_monthly_group_add = async(data?:CarMonthlyGroupDto) => {
    
  const res = await server.POST (`/monthly/group-add`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  导出月租车
   * @param {CarMonthlySearchDto} data? 
   * @return {*}
   */
  export const post_monthly_export = async(data?:CarMonthlySearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/monthly/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMonthlyEventStatusId   {
        id?:string;
      
      }
  /** 
   * @description:  修改包月活动状态
   * @param {PostMonthlyEventStatusId} params? 
   * @return {*}
   */
  export const post_monthly_event_status_id = async(params?:PostMonthlyEventStatusId) => {
    
  const res = await server.POST (`/monthly/event/status/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  包月车修改
   * @param {CarMonthlyUpdDto} data? 
   * @return {*}
   */
  export const post_monthly_car_upd = async(data?:CarMonthlyUpdDto) => {
    
  const res = await server.POST (`/monthly/car-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostMonthlyCarPayMonthid  extends CarMonthlyPayDto {
        monthId?:string;
      
      }
  /** 
   * @description:  手动修改包月日期
   * @param {PostMonthlyCarPayMonthid} params?,* @param {CarMonthlyPayDto} data? 
   * @return {*}
   */
  export const post_monthly_car_pay_monthId = async(params?:PostMonthlyCarPayMonthid,data?:CarMonthlyPayDto) => {
    
  const res = await server.POST (`/monthly/car-pay/${params?.monthId}`,{data,params} );

        return res?.success; 
        }
    
   export interface PostMonthlyCarDelMonthlyid   {
        monthlyId?:string;
      
      }
  /** 
   * @description:  包月车删除
   * @param {PostMonthlyCarDelMonthlyid} params? 
   * @return {*}
   */
  export const post_monthly_car_del_monthlyId = async(params?:PostMonthlyCarDelMonthlyid) => {
    
  const res = await server.POST (`/monthly/car-del/${params?.monthlyId}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  包月车新增
   * @param {CarMonthlyAddDto} data? 
   * @return {*}
   */
  export const post_monthly_car_add = async(data?:CarMonthlyAddDto) => {
    
  const res = await server.POST (`/monthly/car-add`,{data} );

        return res?.success; 
        }
    
   export interface PostMiniUsersUidRechargesExport  extends TopUpSearchDto {
        uId?:string;
      
      }
  /** 
   * @description:  充值记录-excel导出
   * @param {PostMiniUsersUidRechargesExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_recharges_export = async(params?:PostMiniUsersUidRechargesExport) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/recharges/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniUsersUidOrdersExport  extends OrderSearchDto {
        uId?:string;
      
      }
  /** 
   * @description:  支付记录-excel导出
   * @param {PostMiniUsersUidOrdersExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_orders_export = async(params?:PostMiniUsersUidOrdersExport) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/orders/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniUsersUidDrivingRecordsExport  extends OrderSearchDto {
        uId?:string;
      
      }
  /** 
   * @description:  行驶记录-excel导出
   * @param {PostMiniUsersUidDrivingRecordsExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_driving_records_export = async(params?:PostMiniUsersUidDrivingRecordsExport) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/driving-records/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniUsersUidCreditsExport  extends CreditsSearchDto {
        uId?:string;
      
      }
  /** 
   * @description:  积分记录-excel导出
   * @param {PostMiniUsersUidCreditsExport} params?,* @param {CreditsSearchDto} data? 
   * @return {*}
   */
  export const post_mini_users_uId_credits_export = async(params?:PostMiniUsersUidCreditsExport,data?:CreditsSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/credits/export`,{data,params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniUsersUidCouponsExport  extends CouponSearchDto {
        uId?:string;
      
      }
  /** 
   * @description:  优惠券-excel导出
   * @param {PostMiniUsersUidCouponsExport} params?,* @param {CouponSearchDto} data? 
   * @return {*}
   */
  export const post_mini_users_uId_coupons_export = async(params?:PostMiniUsersUidCouponsExport,data?:CouponSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/coupons/export`,{data,params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniUsersUidCarsExport   {
        uId?:string;
      
      }
  /** 
   * @description:  车辆列表-excel导出
   * @param {PostMiniUsersUidCarsExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_cars_export = async(params?:PostMiniUsersUidCarsExport) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/${params?.uId}/cars/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  充值
   * @param {UserTopUp} data? 
   * @return {*}
   */
  export const post_mini_users_top_up = async(data?:UserTopUp) => {
    
  const res = await server.POST (`/mini/users/top-up`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  车主列表-excel导出
   * @param {AppUsersSearchDto} data? 
   * @return {*}
   */
  export const post_mini_users_export = async(data?:AppUsersSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  反馈-excel导出
   * @param {FeedBackDto} data? 
   * @return {*}
   */
  export const post_mini_feedback_export = async(data?:FeedBackDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/feedback/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  企业用户-excel导出
   * @param {EnterpriseUsersSearchDto} data? 
   * @return {*}
   */
  export const post_mini_enterprise_user_export = async(data?:EnterpriseUsersSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/enterprise-user/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  服务评价-导出
   * @param {CommentRangeSearchDtoCore} data? 
   * @return {*}
   */
  export const post_mini_comments_export = async(data?:CommentRangeSearchDtoCore) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/comments/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMerchantMenusImport   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  导入菜单
   * @param {PostMerchantMenusImport} params? 
   * @return {*}
   */
  export const post_merchant_menus_import = async(params?:PostMerchantMenusImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/merchant/menus/import`,{data:formdata} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  导出菜单
     
   * @return {*}
   */
  export const post_merchant_menus_export = async() => {
    
  const res = await server.POST<ArrayBuffer> (`/merchant/menus/export`,{responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  客服日志-导出
   * @param {KfLogSearchDto} data? 
   * @return {*}
   */
  export const post_logs_support_export = async(data?:KfLogSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/support/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  巡查日志-导出
   * @param {PatrolLogSearchDto} data? 
   * @return {*}
   */
  export const post_logs_patrol_export = async(data?:PatrolLogSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/patrol/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  登录日志-导出
   * @param {LoginLogSearch} data? 
   * @return {*}
   */
  export const post_logs_login_export = async(data?:LoginLogSearch) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/login/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  值守日志-导出
   * @param {JournalLogSearchDto} data? 
   * @return {*}
   */
  export const post_logs_journal_export = async(data?:JournalLogSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/journal/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetInvoices  extends InvoiceSearch,Paging {
        
      
      }
  /** 
   * @description:  发票列表
   * @param {GetInvoices} params? 
   * @return {*}
   */
  export const get_invoices = async(params?:GetInvoices) => {
    
  const res = await server.GET<IPage<Invoice>> (`/invoices`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  开票
   * @param {InvoiceDto} data? 
   * @return {*}
   */
  export const post_invoices = async(data?:InvoiceDto) => {
    
  const res = await server.POST (`/invoices`,{data} );

        return res?.success; 
        }
    
   export interface PostInvoicesIdRed   {
        id?:string;
      
      }
  /** 
   * @description:  发票红冲
   * @param {PostInvoicesIdRed} params? 
   * @return {*}
   */
  export const post_invoices_id_red = async(params?:PostInvoicesIdRed) => {
    
  const res = await server.POST (`/invoices/${params?.id}/red`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  充值活动列表
     
   * @return {*}
   */
  export const get_information_top_up_discounts = async() => {
    
  const res = await server.GET<TopUpDiscounts[]> (`/information/top-up-discounts`, );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  新增一个优惠活动
   * @param {TopUpDiscountsDto} data? 
   * @return {*}
   */
  export const post_information_top_up_discounts = async(data?:TopUpDiscountsDto) => {
    
  const res = await server.POST (`/information/top-up-discounts`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  同步
     
   * @return {*}
   */
  export const post_information_subscribe_templates_sync = async() => {
    
  const res = await server.POST (`/information/subscribe-templates/sync`, );

        return res?.success; 
        }
    
   
  /** 
   * @description:  发送消息
   * @param {SubscribeMessageSendDto} data? 
   * @return {*}
   */
  export const post_information_subscribe_templates_send = async(data?:SubscribeMessageSendDto) => {
    
  const res = await server.POST (`/information/subscribe-templates/send`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationPplsPplidReset  extends Paging {
        pplId?:string;cmd?:string;
      
      }
  /** 
   * @description:  重置
   * @param {PostInformationPplsPplidReset} params? 
   * @return {*}
   */
  export const post_information_ppls_pplId_reset = async(params?:PostInformationPplsPplidReset) => {
    
  const res = await server.POST<IPage<PplLog>> (`/information/ppls/${params?.pplId}/reset`,{params} );

        return res?.result; 
        }
    
   export interface PostInformationPplsPplidCmd  extends Paging {
        pplId?:string;cmd?:string;
      
      }
  /** 
   * @description:  开关锁
   * @param {PostInformationPplsPplidCmd} params? 
   * @return {*}
   */
  export const post_information_ppls_pplId_cmd = async(params?:PostInformationPplsPplidCmd) => {
    
  const res = await server.POST<IPage<PplLog>> (`/information/ppls/${params?.pplId}/cmd`,{params} );

        return res?.result; 
        }
    
   export interface PostInformationPplsImport   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  地锁导入
   * @param {PostInformationPplsImport} params? 
   * @return {*}
   */
  export const post_information_ppls_import = async(params?:PostInformationPplsImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/information/ppls/import`,{data:formdata} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  地锁列表导出
   * @param {PplSearchDto} data? 
   * @return {*}
   */
  export const post_information_ppls_export = async(data?:PplSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/ppls/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostInformationPlacesImportbinddevice   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  设备导入绑定
   * @param {PostInformationPlacesImportbinddevice} params? 
   * @return {*}
   */
  export const post_information_places_importBindDevice = async(params?:PostInformationPlacesImportbinddevice) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/information/places/importBindDevice`,{data:formdata} );

        return res?.result; 
        }
    
   export interface GetInformationPayMch  extends Paging {
        type?:number;name?:string;
      
      }
  /** 
   * @description:  分页列表
   * @param {GetInformationPayMch} params? 
   * @return {*}
   */
  export const get_information_pay_mch = async(params?:GetInformationPayMch) => {
    
  const res = await server.GET<IPage<PayMchInfoVo>> (`/information/pay-mch`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  插入或更新(更新不能修改类型)
   * @param {PayMchInfo} data? 
   * @return {*}
   */
  export const post_information_pay_mch = async(data?:PayMchInfo) => {
    
  const res = await server.POST (`/information/pay-mch`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLotsLotidSync   {
        lotId?:string;
      
      }
  /** 
   * @description:  同步地锁点位信息到平台
   * @param {PostInformationLotsLotidSync} params? 
   * @return {*}
   */
  export const post_information_lots_lotId_sync = async(params?:PostInformationLotsLotidSync) => {
    
  const res = await server.POST (`/information/lots/${params?.lotId}/sync`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  更新停车点-树
   * @param {LotTreeDto} data? 
   * @return {*}
   */
  export const post_information_lot_tree_tree_upd = async(data?:LotTreeDto) => {
    
  const res = await server.POST (`/information/lot-tree/tree-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLotTreeTreeDelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车点-树
   * @param {PostInformationLotTreeTreeDelId} params? 
   * @return {*}
   */
  export const post_information_lot_tree_tree_del_id = async(params?:PostInformationLotTreeTreeDelId) => {
    
  const res = await server.POST (`/information/lot-tree/tree-del/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  新增停车点-树
   * @param {LotTreeDto} data? 
   * @return {*}
   */
  export const post_information_lot_tree_tree_add = async(data?:LotTreeDto) => {
    
  const res = await server.POST (`/information/lot-tree/tree-add`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  地磁启用禁用
   * @param {GeomEnabledDto} data? 
   * @return {*}
   */
  export const post_information_geoms_switch_enabled = async(data?:GeomEnabledDto) => {
    
  const res = await server.POST (`/information/geoms/switch-enabled`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationGeomsImport   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  地磁导入
   * @param {PostInformationGeomsImport} params? 
   * @return {*}
   */
  export const post_information_geoms_import = async(params?:PostInformationGeomsImport) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST<ImportResult> (`/information/geoms/import`,{data:formdata} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  地磁列表导出
   * @param {GeomSearchDto} data? 
   * @return {*}
   */
  export const post_information_geoms_export = async(data?:GeomSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/geoms/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  免费车辆列表-excel导出
   * @param {FreeCarsSearchDto} data? 
   * @return {*}
   */
  export const post_information_freeCars_export = async(data?:FreeCarsSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/freeCars/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  解绑地锁
   * @param {DeviceUnBindDto} data? 
   * @return {*}
   */
  export const post_information_devices_unbindPpl = async(data?:DeviceUnBindDto) => {
    
  const res = await server.POST (`/information/devices/unbindPpl`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  解绑地磁
   * @param {DeviceUnBindDto} data? 
   * @return {*}
   */
  export const post_information_devices_unbindGeom = async(data?:DeviceUnBindDto) => {
    
  const res = await server.POST (`/information/devices/unbindGeom`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationDevicesSwitchReserve   {
        id?:string;
      
      }
  /** 
   * @description:  切换是否可预约
   * @param {PostInformationDevicesSwitchReserve} params? 
   * @return {*}
   */
  export const post_information_devices_switch_reserve = async(params?:PostInformationDevicesSwitchReserve) => {
    
  const res = await server.POST (`/information/devices/switch-reserve`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  绑定地锁
   * @param {DeviceBindDto} data? 
   * @return {*}
   */
  export const post_information_devices_bindPpl = async(data?:DeviceBindDto) => {
    
  const res = await server.POST (`/information/devices/bindPpl`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  绑定地磁
   * @param {DeviceBindDto} data? 
   * @return {*}
   */
  export const post_information_devices_bindGeom = async(data?:DeviceBindDto) => {
    
  const res = await server.POST (`/information/devices/bindGeom`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  充值统计-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_financial_top_up_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/top-up/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  停车场财务导出
   * @param {FinancialSearchDto} data? 
   * @return {*}
   */
  export const post_financial_tcc_export = async(data?:FinancialSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/tcc/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  停车场财务明细导出
   * @param {FinancialSearchDto} data? 
   * @return {*}
   */
  export const post_financial_tcc_exportDetail = async(data?:FinancialSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/tcc/exportDetail`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  财务分析 - 车场（车场财务分析）
   * @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_tcc_analysis = async(data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<TccAnalysisVo[]> (`/financial/tcc-analysis`,{data} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  财务分析 - 车场（车场财务分析）导出
   * @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_tcc_analysis_export = async(data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/tcc-analysis/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  路内财务导出
   * @param {FinancialSearchDto} data? 
   * @return {*}
   */
  export const post_financial_roadside_export = async(data?:FinancialSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/roadside/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  路内财务导出
   * @param {FinancialSearchDto} data? 
   * @return {*}
   */
  export const post_financial_roadside_exportDetail = async(data?:FinancialSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/roadside/exportDetail`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  财务分析 - 路内（路内财务分析）
   * @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_roadside_analysis = async(data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<RoadsideAnalysisVo[]> (`/financial/roadside-analysis`,{data} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  财务分析 - 路内（路内财务分析）导出
   * @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_roadside_analysis_export = async(data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/roadside-analysis/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  电子退款按日-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_financial_refund_statistics_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/refund-statistics/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialInvoice  extends InvoiceSearch,Paging {
        
      
      }
  /** 
   * @description:  电子发票-带分页
   * @param {PostFinancialInvoice} params? 
   * @return {*}
   */
  export const post_financial_invoice = async(params?:PostFinancialInvoice) => {
    
  const res = await server.POST<IPage<InvoiceVo>> (`/financial/invoice`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  电子发票-excel导出
   * @param {InvoiceSearch} data? 
   * @return {*}
   */
  export const post_financial_invoice_export = async(data?:InvoiceSearch) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/invoice/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  异常支付-分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_financial_error_pay = async(params?:Paging) => {
    
  const res = await server.GET<IPage<PayAffirmErrorVo>> (`/financial/error-pay`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  异常支付-处理
   * @param {ErrorPayProcessDto} data? 
   * @return {*}
   */
  export const post_financial_error_pay = async(data?:ErrorPayProcessDto) => {
    
  const res = await server.POST (`/financial/error-pay`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  充值-退款
   * @param {ErrorPayProcessDto} data? 
   * @return {*}
   */
  export const post_financial_error_pay_e_top_up_refund = async(data?:ErrorPayProcessDto) => {
    
  const res = await server.POST (`/financial/error-pay/e-top-up-refund`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialDc  extends OrderIncomeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  财务数据 （数据中心）
   * @param {Paging} params?,* @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_dc = async(params?:Paging,data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<IPage<IncomeVo>> (`/financial/dc`,{data,params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  财务数据 （数据中心）导出
   * @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_dc_export = async(data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/dc/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  优惠券分析-excel导出
   * @param {TimeRangeDate} data? 
   * @return {*}
   */
  export const post_financial_coupons_export = async(data?:TimeRangeDate) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/coupons/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialArrears  extends OrderIncomeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  欠费数据
   * @param {Paging} params?,* @param {OrderIncomeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_arrears = async(params?:Paging,data?:OrderIncomeSearchDto) => {
    
  const res = await server.POST<IPage<ArrearsVo>> (`/financial/arrears`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialArrearsReceived  extends TakeReceivedSearchDto,Paging {
        
      
      }
  /** 
   * @description:  欠费数据-收缴列表
   * @param {Paging} params?,* @param {TakeReceivedSearchDto} data? 
   * @return {*}
   */
  export const post_financial_arrears_received = async(params?:Paging,data?:TakeReceivedSearchDto) => {
    
  const res = await server.POST<IPage<ArrearsReceivedVo>> (`/financial/arrears/received`,{data,params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  总财务导出
   * @param {FinancialSearchDto} data? 
   * @return {*}
   */
  export const post_financial_all_export = async(data?:FinancialSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/all/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  交账数据-excel导出
   * @param {CoreLotWithTimeRangeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_accounts_v2_export = async(data?:CoreLotWithTimeRangeSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/v2/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  交账数据-excel明细导出
   * @param {CoreLotWithTimeRangeSearchDto} data? 
   * @return {*}
   */
  export const post_financial_accounts_v2_exportDetail = async(data?:CoreLotWithTimeRangeSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/v2/exportDetail`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  根据日期批量核心
   * @param {FinancialBatchConfimAccountsDto} data? 
   * @return {*}
   */
  export const post_financial_accounts_v2_batch_confirm = async(data?:FinancialBatchConfimAccountsDto) => {
    
  const res = await server.POST (`/financial/accounts/v2/batch-confirm`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  赠券记录-导出
   * @param {SearchCouponRecordDto} params? 
   * @return {*}
   */
  export const post_coupon_records_export = async(params?:SearchCouponRecordDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/coupon/records/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  赠送优惠券
   * @param {CouponIssueDto} data? 
   * @return {*}
   */
  export const post_coupon_issue = async(data?:CouponIssueDto) => {
    
  const res = await server.POST (`/coupon/issue`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  设置巡查打印
   * @param {PrintJsonDto} data? 
   * @return {*}
   */
  export const post_common_setPrint = async(data?:PrintJsonDto) => {
    
  const res = await server.POST<string> (`/common/setPrint`,{data} );

        return res?.result; 
        }
    
   export interface PostCommonOssAli   {
        file?:string;path?:string;token?:string;phone?:string;
      
      }
  /** 
   * @description:  阿里云
   * @param {PostCommonOssAli} params? 
   * @return {*}
   */
  export const post_common_oss_ali = async(params?:PostCommonOssAli) => {
    
  const res = await server.POST<string> (`/common/oss/ali`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  车辆列表-excel导出
   * @param {CarsSearchDto} data? 
   * @return {*}
   */
  export const post_cars_export = async(data?:CarsSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/cars/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  车辆列表明细-excel导出
   * @param {CarsSearchDto} data? 
   * @return {*}
   */
  export const post_cars_exportOverDue = async(data?:CarsSearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/cars/exportOverDue`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  导出
   * @param {CarApplySearchDto} data? 
   * @return {*}
   */
  export const post_carApply_export = async(data?:CarApplySearchDto) => {
    
  const res = await server.POST<ArrayBuffer> (`/carApply/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  PDA的版本历史-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_apps_patrol_apk = async(params?:Paging) => {
    
  const res = await server.GET<IPage<PatrolApk>> (`/apps/patrol-apk`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  发布新版本
   * @param {ReleaseApkDto} data? 
   * @return {*}
   */
  export const post_apps_patrol_apk = async(data?:ReleaseApkDto) => {
    
  const res = await server.POST (`/apps/patrol-apk`,{data} );

        return res?.success; 
        }
    
   export interface PostApproveReportIdApprove  extends ApproveDto {
        id?:string;
      
      }
  /** 
   * @description:  审核
   * @param {PostApproveReportIdApprove} params?,* @param {ApproveDto} data? 
   * @return {*}
   */
  export const post_approve_report_id_approve = async(params?:PostApproveReportIdApprove,data?:ApproveDto) => {
    
  const res = await server.POST (`/approve/report/${params?.id}/approve`,{data,params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  上报数据-可以匿名
   * @param {ApproveReportDto} data? 
   * @return {*}
   */
  export const post_approve_report_report = async(data?:ApproveReportDto) => {
    
  const res = await server.POST<string> (`/approve/report/report`,{data} );

        return res?.result; 
        }
    
   export interface PostAdPosition  extends AdPositionSearchDto,Paging {
        
      
      }
  /** 
   * @description:  广告位列表
   * @param {Paging} params?,* @param {AdPositionSearchDto} data? 
   * @return {*}
   */
  export const post_ad_position = async(params?:Paging,data?:AdPositionSearchDto) => {
    
  const res = await server.POST<IPage<AdPosition>> (`/ad/position`,{data,params} );

        return res?.result; 
        }
    
   export interface PostAdPositionAdd  extends AdPositionAddDto {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  新增广告位
   * @param {PostAdPositionAdd} params? 
   * @return {*}
   */
  export const post_ad_position_add = async(params?:PostAdPositionAdd) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/ad/position-add`,{data:formdata} );

        return res?.success; 
        }
    
   export interface PostAdItem  extends AdItemSearchDto,Paging {
        
      
      }
  /** 
   * @description:  排期列表
   * @param {Paging} params?,* @param {AdItemSearchDto} data? 
   * @return {*}
   */
  export const post_ad_item = async(params?:Paging,data?:AdItemSearchDto) => {
    
  const res = await server.POST<IPage<AdItem>> (`/ad/item`,{data,params} );

        return res?.result; 
        }
    
   export interface PostAdItemAdd   {
        file?:File;
      [key:string]:any
      }
  /** 
   * @description:  新增广告排期
   * @param {PostAdItemAdd} params? 
   * @return {*}
   */
  export const post_ad_item_add = async(params?:PostAdItemAdd) => {
     
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      
  const res = await server.POST (`/ad/item-add`,{data:formdata} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  通道实时信息
   * @param {ChannelOnlineDto} params? 
   * @return {*}
   */
  export const get_worker_channel_online = async(params?:ChannelOnlineDto) => {
    
  const res = await server.GET<TccWithOnlineChannelVo> (`/worker/channel/online`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  获取最后一张通道快照
   * @param {LastSsDto} params? 
   * @return {*}
   */
  export const get_worker_channel_last_ss = async(params?:LastSsDto) => {
    
  const res = await server.GET<TccChannelSs> (`/worker/channel/last-ss`,{params} );

        return res?.result; 
        }
    
   export interface GetTccYdpsList   {
        name?:string;
      
      }
  /** 
   * @description:  诱导屏无分页
   * @param {GetTccYdpsList} params? 
   * @return {*}
   */
  export const get_tcc_ydps_list = async(params?:GetTccYdpsList) => {
    
  const res = await server.GET<TccYdp[]> (`/tcc/ydps/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccXsgTemplateId   {
        id?:string;
      
      }
  /** 
   * @description:  ID查询
   * @param {GetTccXsgTemplateId} params? 
   * @return {*}
   */
  export const get_tcc_xsg_template_id = async(params?:GetTccXsgTemplateId) => {
    
  const res = await server.GET<TccXspTemplate> (`/tcc/xsg-template/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface DeleteTccXsgTemplateId   {
        id?:string;
      
      }
  /** 
   * @description:  删除模板
   * @param {DeleteTccXsgTemplateId} params? 
   * @return {*}
   */
  export const delete_tcc_xsg_template_id = async(params?:DeleteTccXsgTemplateId) => {
    
  const res = await server.DELETE (`/tcc/xsg-template/${params?.id}`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  显示屏模板集合
     
   * @return {*}
   */
  export const get_tcc_xsg_template_list = async() => {
    
  const res = await server.GET<TccXspTemplate[]> (`/tcc/xsg-template/list`, );

        return res?.result??[]; 
        }
    
   export interface GetTccStationUserIdWorks  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  上下班记录-分页
   * @param {GetTccStationUserIdWorks} params? 
   * @return {*}
   */
  export const get_tcc_station_user_id_works = async(params?:GetTccStationUserIdWorks) => {
    
  const res = await server.GET<IPage<TccStationUserAccountsVo>> (`/tcc/station/user/${params?.id}/works`,{params} );

        return res?.result; 
        }
    
   export interface GetTccSpecialCarId   {
        id?:string;
      
      }
  /** 
   * @description:  详情
   * @param {GetTccSpecialCarId} params? 
   * @return {*}
   */
  export const get_tcc_special_car_id = async(params?:GetTccSpecialCarId) => {
    
  const res = await server.GET<TccPlateManage> (`/tcc/special-car/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface DeleteTccSpecialCarId   {
        id?:string;
      
      }
  /** 
   * @description:  删除特殊车辆
   * @param {DeleteTccSpecialCarId} params? 
   * @return {*}
   */
  export const delete_tcc_special_car_id = async(params?:DeleteTccSpecialCarId) => {
    
  const res = await server.DELETE (`/tcc/special-car/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetTccSpecialCarIdStaffminutelog  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  查询员工分钟数记录-分页
   * @param {GetTccSpecialCarIdStaffminutelog} params? 
   * @return {*}
   */
  export const get_tcc_special_car_id_staffMinuteLog = async(params?:GetTccSpecialCarIdStaffminutelog) => {
    
  const res = await server.GET<IPage<TccStaffMinuteLog>> (`/tcc/special-car/${params?.id}/staffMinuteLog`,{params} );

        return res?.result; 
        }
    
   export interface GetTccInfoId   {
        id?:string;
      
      }
  /** 
   * @description:  查详情
   * @param {GetTccInfoId} params? 
   * @return {*}
   */
  export const get_tcc_info_id = async(params?:GetTccInfoId) => {
    
  const res = await server.GET<Lot> (`/tcc/info/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetTccInfoIdQrcode   {
        id?:string;
      
      }
  /** 
   * @description:  undefined
   * @param {GetTccInfoIdQrcode} params? 
   * @return {*}
   */
  export const get_tcc_info_id_qrcode = async(params?:GetTccInfoIdQrcode) => {
    
  const res = await server.GET<ArrayBuffer> (`/tcc/info/${params?.id}/qrcode`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetTccInfoRateMonthLotid   {
        lotId?:string;
      
      }
  /** 
   * @description:  车库收费信息
   * @param {GetTccInfoRateMonthLotid} params? 
   * @return {*}
   */
  export const get_tcc_info_rate_month_lotId = async(params?:GetTccInfoRateMonthLotid) => {
    
  const res = await server.GET<LibPriceAndMonthVo> (`/tcc/info/rate-month/${params?.lotId}`,{params} );

        return res?.result; 
        }
    
   export interface GetTccChannelId   {
        id?:string;
      
      }
  /** 
   * @description:  ID查询
   * @param {GetTccChannelId} params? 
   * @return {*}
   */
  export const get_tcc_channel_id = async(params?:GetTccChannelId) => {
    
  const res = await server.GET<TccChannel> (`/tcc/channel/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface DeleteTccChannelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除通道
   * @param {DeleteTccChannelId} params? 
   * @return {*}
   */
  export const delete_tcc_channel_id = async(params?:DeleteTccChannelId) => {
    
  const res = await server.DELETE (`/tcc/channel/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetTccChannelIdWaitcar   {
        id?:string;
      
      }
  /** 
   * @description:  查询等待车辆
   * @param {GetTccChannelIdWaitcar} params? 
   * @return {*}
   */
  export const get_tcc_channel_id_waitCar = async(params?:GetTccChannelIdWaitcar) => {
    
  const res = await server.GET<WaitCarVo> (`/tcc/channel/${params?.id}/waitCar`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通道列表集合
   * @param {TccChannelSearchDto} params? 
   * @return {*}
   */
  export const get_tcc_channel_list = async(params?:TccChannelSearchDto) => {
    
  const res = await server.GET<ChannelVo[]> (`/tcc/channel/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetSystemUsersIdRoles   {
        id?:string;
      
      }
  /** 
   * @description:  用户已有角色
   * @param {GetSystemUsersIdRoles} params? 
   * @return {*}
   */
  export const get_system_users_id_roles = async(params?:GetSystemUsersIdRoles) => {
    
  const res = await server.GET<string[]> (`/system/users/${params?.id}/roles`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetSystemUsersTree   {
        excludeEmpty?:boolean;
      
      }
  /** 
   * @description:  人员树
   * @param {GetSystemUsersTree} params? 
   * @return {*}
   */
  export const get_system_users_tree = async(params?:GetSystemUsersTree) => {
    
  const res = await server.GET<Tree[]> (`/system/users/tree`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  可用角色列表
     
   * @return {*}
   */
  export const get_system_users_roles = async() => {
    
  const res = await server.GET<SysRole[]> (`/system/users/roles`, );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  商户数据 -数据中心
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_system_tenant_data = async(params?:Paging) => {
    
  const res = await server.GET<IPage<MerchantDataVo>> (`/system/tenant/data`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  角色列表
     
   * @return {*}
   */
  export const get_system_tenant_role_list = async() => {
    
  const res = await server.GET<SysTenantRole[]> (`/system/tenant-role/list`, );

        return res?.result??[]; 
        }
    
   export interface GetSystemSms   {
        phone?:string;
      
      }
  /** 
   * @description:  获取验证码
   * @param {GetSystemSms} params? 
   * @return {*}
   */
  export const get_system_sms = async(params?:GetSystemSms) => {
    
  const res = await server.GET (`/system/sms`,{params} );

        return res?.success; 
        }
    
   export interface GetSystemRolesIdMenuids   {
        id?:string;
      
      }
  /** 
   * @description:  角色已选菜单权限Ids
   * @param {GetSystemRolesIdMenuids} params? 
   * @return {*}
   */
  export const get_system_roles_id_menuIds = async(params?:GetSystemRolesIdMenuids) => {
    
  const res = await server.GET<string[]> (`/system/roles/${params?.id}/menuIds`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  角色菜单权限树
     
   * @return {*}
   */
  export const get_system_roles_menus = async() => {
    
  const res = await server.GET<PermissionTree[]> (`/system/roles/menus`, );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  用户菜单和权限
     
   * @return {*}
   */
  export const get_system_profile_menus = async() => {
    
  const res = await server.GET<MenuButtons> (`/system/profile/menus`, );

        return res?.result; 
        }
    
   export interface GetSystemMenusTree   {
        ownType?:string;
      
      }
  /** 
   * @description:  菜单权限树
   * @param {GetSystemMenusTree} params? 
   * @return {*}
   */
  export const get_system_menus_tree = async(params?:GetSystemMenusTree) => {
    
  const res = await server.GET<PermissionTree[]> (`/system/menus/tree`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetSystemDictValuesId  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  值列表-分页
   * @param {GetSystemDictValuesId} params? 
   * @return {*}
   */
  export const get_system_dict_values_id = async(params?:GetSystemDictValuesId) => {
    
  const res = await server.GET<IPage<SysDictValue>> (`/system/dict/values/${params?.id}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  类型列表-分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_system_dict_types = async(params?:Paging) => {
    
  const res = await server.GET<IPage<SysDictType>> (`/system/dict/types`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  同步数据
     
   * @return {*}
   */
  export const get_system_dict_sync = async() => {
    
  const res = await server.GET (`/system/dict/sync`, );

        return res?.success; 
        }
    
   
  /** 
   * @description:  部门树
     
   * @return {*}
   */
  export const get_system_departments_tree = async() => {
    
  const res = await server.GET<Tree[]> (`/system/departments/tree`, );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  查询订单-合并订单
   * @param {MergeOrderSearchDto} params? 
   * @return {*}
   */
  export const get_support_merge_orders = async(params?:MergeOrderSearchDto) => {
    
  const res = await server.GET<PayOrder[]> (`/support/merge-orders`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  搜索远程降锁订单
   * @param {SupportDownLockOrderDto} params? 
   * @return {*}
   */
  export const get_support_down_lock_order = async(params?:SupportDownLockOrderDto) => {
    
  const res = await server.GET<Order> (`/support/down-lock-order`,{params} );

        return res?.result; 
        }
    
   export interface GetStatisticsWalk  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  步数统计-带分页
   * @param {GetStatisticsWalk} params? 
   * @return {*}
   */
  export const get_statistics_walk = async(params?:GetStatisticsWalk) => {
    
  const res = await server.GET<IPage<WalkStatistics>> (`/statistics/walk`,{params} );

        return res?.result; 
        }
    
   export interface GetStatisticsNewenergy  extends NewEnergyStaDto,Paging {
        
      
      }
  /** 
   * @description:  新能源车月数据分析
   * @param {GetStatisticsNewenergy} params? 
   * @return {*}
   */
  export const get_statistics_newEnergy = async(params?:GetStatisticsNewenergy) => {
    
  const res = await server.GET<IPage<NewEnergyStatistics>> (`/statistics/newEnergy`,{params} );

        return res?.result; 
        }
    
   export interface GetStatisticsNewenergylot  extends NewEnergyStaDto,Paging {
        
      
      }
  /** 
   * @description:  新能源车点位数据分析
   * @param {GetStatisticsNewenergylot} params? 
   * @return {*}
   */
  export const get_statistics_newEnergyLot = async(params?:GetStatisticsNewenergylot) => {
    
  const res = await server.GET<IPage<EnergyLotStatistics>> (`/statistics/newEnergyLot`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  新能源车图表
     
   * @return {*}
   */
  export const get_statistics_newEnergy_chart = async() => {
    
  const res = await server.GET<EnergyCarChart> (`/statistics/newEnergy/chart`, );

        return res?.result; 
        }
    
   export interface GetStatisticsLot  extends LotInfoDto,Paging {
        
      
      }
  /** 
   * @description:  点位列表
   * @param {GetStatisticsLot} params? 
   * @return {*}
   */
  export const get_statistics_lot = async(params?:GetStatisticsLot) => {
    
  const res = await server.GET<IPage<LotInfoVo>> (`/statistics/lot`,{params} );

        return res?.result; 
        }
    
   export interface GetStatisticsGeom  extends GeomStaDtoRange,Paging {
        
      
      }
  /** 
   * @description:  地磁分析列表-带分页
   * @param {GetStatisticsGeom} params? 
   * @return {*}
   */
  export const get_statistics_geom = async(params?:GetStatisticsGeom) => {
    
  const res = await server.GET<IPage<GeomStatistics>> (`/statistics/geom`,{params} );

        return res?.result; 
        }
    
   export interface GetStatisticsCredits  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  积分统计-带分页
   * @param {GetStatisticsCredits} params? 
   * @return {*}
   */
  export const get_statistics_credits = async(params?:GetStatisticsCredits) => {
    
  const res = await server.GET<IPage<CreditsStatistics>> (`/statistics/credits`,{params} );

        return res?.result; 
        }
    
   export interface GetStaffWork  extends StaffWorkSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查看工作记录详情-带分页
   * @param {GetStaffWork} params? 
   * @return {*}
   */
  export const get_staff_work = async(params?:GetStaffWork) => {
    
  const res = await server.GET<IPage<WorkIndexRecord>> (`/staff/work`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  查看工作记录-上面标签数据
   * @param {StaffWorkSearchDto} params? 
   * @return {*}
   */
  export const get_staff_work_top = async(params?:StaffWorkSearchDto) => {
    
  const res = await server.GET<WorkIndexTag[]> (`/staff/work/top`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffWorkDetail   {
        id?:string;
      
      }
  /** 
   * @description:  查询记录上报详情
   * @param {GetStaffWorkDetail} params? 
   * @return {*}
   */
  export const get_staff_work_detail = async(params?:GetStaffWorkDetail) => {
    
  const res = await server.GET<WorkRecordReport> (`/staff/work/detail`,{params} );

        return res?.result; 
        }
    
   export interface GetStaffPerformance  extends PdaPerformanceSearchDto,Paging {
        
      
      }
  /** 
   * @description:  总体绩效列表-带分页
   * @param {GetStaffPerformance} params? 
   * @return {*}
   */
  export const get_staff_performance = async(params?:GetStaffPerformance) => {
    
  const res = await server.GET<IPage<PdaPerformanceVo>> (`/staff/performance`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  绩效扣分明细-无分页
   * @param {PdaPerformanceDetailSearchDto} params? 
   * @return {*}
   */
  export const get_staff_performance_score_items = async(params?:PdaPerformanceDetailSearchDto) => {
    
  const res = await server.GET<PdaPerformanceScoreItemVo[]> (`/staff/performance/score/items`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  点位绩效明细-最多31条数据-无分页
   * @param {PdaPerformanceDetailSearchDto} params? 
   * @return {*}
   */
  export const get_staff_performance_items = async(params?:PdaPerformanceDetailSearchDto) => {
    
  const res = await server.GET<PdaPerformanceItemVo[]> (`/staff/performance/items`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPatrolUsersIdMsg   {
        id?:string;
      
      }
  /** 
   * @description:  员工详情-管理信息-pda
   * @param {GetStaffPatrolUsersIdMsg} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_id_msg = async(params?:GetStaffPatrolUsersIdMsg) => {
    
  const res = await server.GET<PdaUserAllDayInfo> (`/staff/patrol-users/${params?.id}/msg`,{params} );

        return res?.result; 
        }
    
   export interface GetStaffPatrolUsersIdLots   {
        id?:string;type?:number;
      
      }
  /** 
   * @description:  查看某巡查人员管理的人员和点位信息
   * @param {GetStaffPatrolUsersIdLots} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_id_lots = async(params?:GetStaffPatrolUsersIdLots) => {
    
  const res = await server.GET<PatrolLots[]> (`/staff/patrol-users/${params?.id}/lots`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPatrolUsersIdLotids   {
        id?:string;type?:number;
      
      }
  /** 
   * @description:  查询巡查人员所管辖的点位IDs
   * @param {GetStaffPatrolUsersIdLotids} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_id_lotIds = async(params?:GetStaffPatrolUsersIdLotids) => {
    
  const res = await server.GET<string[]> (`/staff/patrol-users/${params?.id}/lotIds`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPatrolUsersRecords  extends StaffLoginRecordDto,Paging {
        
      
      }
  /** 
   * @description:  登录记录-带分页
   * @param {GetStaffPatrolUsersRecords} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_records = async(params?:GetStaffPatrolUsersRecords) => {
    
  const res = await server.GET<IPage<StaffLoginRecord>> (`/staff/patrol-users/records`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  巡查人员列表-无分页
   * @param {PatrolUserSearchDto} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_list = async(params?:PatrolUserSearchDto) => {
    
  const res = await server.GET<PatrolUserResult[]> (`/staff/patrol-users/list`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  员工详情-值守记录-没有分页,查询30天内的数据-pda
   * @param {PdaHistorySearchDto} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_history = async(params?:PdaHistorySearchDto) => {
    
  const res = await server.GET<PdaUserAccountsRecordVo[]> (`/staff/patrol-users/history`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  图表
   * @param {PatrolUserSearchDto} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_chart = async(params?:PatrolUserSearchDto) => {
    
  const res = await server.GET<StaffChartVo> (`/staff/patrol-users/chart`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  巡查角色列表-无分页
     
   * @return {*}
   */
  export const get_staff_patrol_roles_list = async() => {
    
  const res = await server.GET<PatrolRole[]> (`/staff/patrol-roles/list`, );

        return res?.result??[]; 
        }
    
   export interface GetSignRulesIdGroup   {
        id?:string;
      
      }
  /** 
   * @description:  考勤用户组
   * @param {GetSignRulesIdGroup} params? 
   * @return {*}
   */
  export const get_sign_rules_id_group = async(params?:GetSignRulesIdGroup) => {
    
  const res = await server.GET<SignUserItem[]> (`/sign/rules/${params?.id}/group`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetSignRulesChart   {
        name?:string;
      
      }
  /** 
   * @description:  考勤打卡图表-仅当天数据
   * @param {GetSignRulesChart} params? 
   * @return {*}
   */
  export const get_sign_rules_chart = async(params?:GetSignRulesChart) => {
    
  const res = await server.GET<SignChartVo> (`/sign/rules/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetOrdersId   {
        id?:string;
      
      }
  /** 
   * @description:  订单详情-不带金额
   * @param {GetOrdersId} params? 
   * @return {*}
   */
  export const get_orders_id = async(params?:GetOrdersId) => {
    
  const res = await server.GET<Order> (`/orders/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetOrdersIdExtraPictures   {
        id?:string;
      
      }
  /** 
   * @description:  订单图片
   * @param {GetOrdersIdExtraPictures} params? 
   * @return {*}
   */
  export const get_orders_id_extra_pictures = async(params?:GetOrdersIdExtraPictures) => {
    
  const res = await server.GET<string[]> (`/orders/${params?.id}/extra-pictures`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetOrdersOnline  extends OnlineSearchDto,Paging {
        
      
      }
  /** 
   * @description:  当前停车数据-带分页
   * @param {GetOrdersOnline} params? 
   * @return {*}
   */
  export const get_orders_online = async(params?:GetOrdersOnline) => {
    
  const res = await server.GET<IPage<Order>> (`/orders/online`,{params} );

        return res?.result; 
        }
    
   export interface GetOrdersOnlineId   {
        id?:string;
      
      }
  /** 
   * @description:  当前停车数据-订单明细
   * @param {GetOrdersOnlineId} params? 
   * @return {*}
   */
  export const get_orders_online_id = async(params?:GetOrdersOnlineId) => {
    
  const res = await server.GET<ParkingCar> (`/orders/online/${params?.id}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  订单
   * @param {OnlineSearchDto} params? 
   * @return {*}
   */
  export const get_orders_online_search = async(params?:OnlineSearchDto) => {
    
  const res = await server.GET<Order> (`/orders/online/search`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  当前停车-图表
   * @param {OnlineSearchDto} params? 
   * @return {*}
   */
  export const get_orders_online_chart = async(params?:OnlineSearchDto) => {
    
  const res = await server.GET<OnlineChartVo> (`/orders/online/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetOrdersHistory  extends OrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  历史数据-带分页
   * @param {GetOrdersHistory} params? 
   * @return {*}
   */
  export const get_orders_history = async(params?:GetOrdersHistory) => {
    
  const res = await server.GET<IPage<Order>> (`/orders/history`,{params} );

        return res?.result; 
        }
    
   export interface GetOrdersHistoryId   {
        id?:string;
      
      }
  /** 
   * @description:  历史数据-订单明细
   * @param {GetOrdersHistoryId} params? 
   * @return {*}
   */
  export const get_orders_history_id = async(params?:GetOrdersHistoryId) => {
    
  const res = await server.GET<PayOrder> (`/orders/history/${params?.id}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  历史数据-图表
   * @param {OrderSearchDto} params? 
   * @return {*}
   */
  export const get_orders_history_chart = async(params?:OrderSearchDto) => {
    
  const res = await server.GET<HistoryChartVo> (`/orders/history/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetNoticeSystem  extends SysNoticeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  查询-分页
   * @param {GetNoticeSystem} params? 
   * @return {*}
   */
  export const get_notice_system = async(params?:GetNoticeSystem) => {
    
  const res = await server.GET<IPage<SysNotice>> (`/notice/system`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  未读消息条数
     
   * @return {*}
   */
  export const get_notice_system_unread = async() => {
    
  const res = await server.GET<number> (`/notice/system/unread`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  查询-分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_notice_sms = async(params?:Paging) => {
    
  const res = await server.GET<IPage<SmsNoticeVo>> (`/notice/sms`,{params} );

        return res?.result; 
        }
    
   export interface GetMsgPplWarn  extends PplWarnSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地锁告警-带分页
   * @param {GetMsgPplWarn} params? 
   * @return {*}
   */
  export const get_msg_ppl_warn = async(params?:GetMsgPplWarn) => {
    
  const res = await server.GET<IPage<PplWarnVo>> (`/msg/ppl-warn`,{params} );

        return res?.result; 
        }
    
   export interface GetMsgPplErrors  extends PplErrorSearchDto,Paging {
        
      
      }
  /** 
   * @description:  故障-带分页
   * @param {GetMsgPplErrors} params? 
   * @return {*}
   */
  export const get_msg_ppl_errors = async(params?:GetMsgPplErrors) => {
    
  const res = await server.GET<IPage<PplErrorMsgVo>> (`/msg/ppl-errors`,{params} );

        return res?.result; 
        }
    
   export interface GetMsgDeviceVoltage  extends DeviceVoltageMsgDto,Paging {
        
      
      }
  /** 
   * @description:  电池电量-带分页
   * @param {GetMsgDeviceVoltage} params? 
   * @return {*}
   */
  export const get_msg_device_voltage = async(params?:GetMsgDeviceVoltage) => {
    
  const res = await server.GET<IPage<DeviceVoltageMsg>> (`/msg/device-voltage`,{params} );

        return res?.result; 
        }
    
   export interface GetMsgDeviceVoltageStatics  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  电池电量告警统计-带分页
   * @param {GetMsgDeviceVoltageStatics} params? 
   * @return {*}
   */
  export const get_msg_device_voltage_statics = async(params?:GetMsgDeviceVoltageStatics) => {
    
  const res = await server.GET<IPage<DeviceVoltageMsgStatics>> (`/msg/device-voltage/statics`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyId   {
        id?:string;
      
      }
  /** 
   * @description:  包月组
   * @param {GetMonthlyId} params? 
   * @return {*}
   */
  export const get_monthly_id = async(params?:GetMonthlyId) => {
    
  const res = await server.GET<MonthlyCarGroup> (`/monthly/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlySta  extends CarMonthlyPaySearchDto,Paging {
        
      
      }
  /** 
   * @description:  包月统计
   * @param {GetMonthlySta} params? 
   * @return {*}
   */
  export const get_monthly_sta = async(params?:GetMonthlySta) => {
    
  const res = await server.GET<IPage<CarMonthlyPaySta>> (`/monthly/sta`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyOrders  extends CarMonthlyOrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  包月订单
   * @param {GetMonthlyOrders} params? 
   * @return {*}
   */
  export const get_monthly_orders = async(params?:GetMonthlyOrders) => {
    
  const res = await server.GET<IPage<MonthlyOrderVo>> (`/monthly/orders`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyOpenCharge   {
        id?:string;
      
      }
  /** 
   * @description:  开通缴费
   * @param {GetMonthlyOpenCharge} params? 
   * @return {*}
   */
  export const get_monthly_open_charge = async(params?:GetMonthlyOpenCharge) => {
    
  const res = await server.GET (`/monthly/open-charge`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  所有包月组
   * @param {CarMonthlyGroupSearchDto} params? 
   * @return {*}
   */
  export const get_monthly_groups = async(params?:CarMonthlyGroupSearchDto) => {
    
  const res = await server.GET<CarMonthlyGroupVo[]> (`/monthly/groups`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMonthlyGroupsPage  extends CarMonthlyGroupSearchDto,Paging {
        
      
      }
  /** 
   * @description:  所有包月组-分页
   * @param {GetMonthlyGroupsPage} params? 
   * @return {*}
   */
  export const get_monthly_groups_page = async(params?:GetMonthlyGroupsPage) => {
    
  const res = await server.GET<IPage<CarMonthlyGroupVo>> (`/monthly/groups-page`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyCars  extends CarMonthlySearchDto,Paging {
        
      
      }
  /** 
   * @description:  包月车分页
   * @param {GetMonthlyCars} params? 
   * @return {*}
   */
  export const get_monthly_cars = async(params?:GetMonthlyCars) => {
    
  const res = await server.GET<IPage<CarMonthlyVo>> (`/monthly/cars`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyCarStatusCaridGroupid   {
        carId?:string;groupId?:string;
      
      }
  /** 
   * @description:  包月车状态修改
   * @param {GetMonthlyCarStatusCaridGroupid} params? 
   * @return {*}
   */
  export const get_monthly_car_status_carId_groupId = async(params?:GetMonthlyCarStatusCaridGroupid) => {
    
  const res = await server.GET (`/monthly/car-status/${params?.carId}/${params?.groupId}`,{params} );

        return res?.success; 
        }
    
   export interface GetMonthlyCarPayLogMonthid  extends Paging {
        monthId?:string;
      
      }
  /** 
   * @description:  包月车续费日志
   * @param {GetMonthlyCarPayLogMonthid} params? 
   * @return {*}
   */
  export const get_monthly_car_pay_log_monthId = async(params?:GetMonthlyCarPayLogMonthid) => {
    
  const res = await server.GET<IPage<CarMonthlyPayLogVo>> (`/monthly/car-pay-log/${params?.monthId}`,{params} );

        return res?.result; 
        }
    
   export interface GetMonthlyApplys  extends MonthlyApplySearchDto,Paging {
        
      
      }
  /** 
   * @description:  申请列表-分页
   * @param {GetMonthlyApplys} params? 
   * @return {*}
   */
  export const get_monthly_applys = async(params?:GetMonthlyApplys) => {
    
  const res = await server.GET<IPage<MonthlyApplyVo>> (`/monthly/applys`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsers  extends AppUsersSearchDto,Paging {
        
      
      }
  /** 
   * @description:  车主列表-带分页
   * @param {GetMiniUsers} params? 
   * @return {*}
   */
  export const get_mini_users = async(params?:GetMiniUsers) => {
    
  const res = await server.GET<IPage<UserInfoVo>> (`/mini/users`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidRecharges  extends TopUpSearchDto,Paging {
        uId?:string;
      
      }
  /** 
   * @description:  充值记录-带分页
   * @param {GetMiniUsersUidRecharges} params? 
   * @return {*}
   */
  export const get_mini_users_uId_recharges = async(params?:GetMiniUsersUidRecharges) => {
    
  const res = await server.GET<IPage<UserTopUpVo>> (`/mini/users/${params?.uId}/recharges`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidOrders  extends OrderSearchDto,Paging {
        uId?:string;
      
      }
  /** 
   * @description:  支付记录-带分页
   * @param {GetMiniUsersUidOrders} params? 
   * @return {*}
   */
  export const get_mini_users_uId_orders = async(params?:GetMiniUsersUidOrders) => {
    
  const res = await server.GET<IPage<Order>> (`/mini/users/${params?.uId}/orders`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidDrivingRecords  extends OrderSearchDto,Paging {
        uId?:string;
      
      }
  /** 
   * @description:  行驶记录-带分页
   * @param {GetMiniUsersUidDrivingRecords} params? 
   * @return {*}
   */
  export const get_mini_users_uId_driving_records = async(params?:GetMiniUsersUidDrivingRecords) => {
    
  const res = await server.GET<IPage<Order>> (`/mini/users/${params?.uId}/driving-records`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidCredits  extends CreditsSearchDto,Paging {
        uId?:string;
      
      }
  /** 
   * @description:  积分记录-带分页
   * @param {GetMiniUsersUidCredits} params? 
   * @return {*}
   */
  export const get_mini_users_uId_credits = async(params?:GetMiniUsersUidCredits) => {
    
  const res = await server.GET<IPage<CreditsVo>> (`/mini/users/${params?.uId}/credits`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidCoupons  extends CouponSearchDto,Paging {
        uId?:string;
      
      }
  /** 
   * @description:  优惠券-带分页
   * @param {GetMiniUsersUidCoupons} params? 
   * @return {*}
   */
  export const get_mini_users_uId_coupons = async(params?:GetMiniUsersUidCoupons) => {
    
  const res = await server.GET<IPage<CouponVo>> (`/mini/users/${params?.uId}/coupons`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniUsersUidCars   {
        uId?:string;
      
      }
  /** 
   * @description:  车辆列表
   * @param {GetMiniUsersUidCars} params? 
   * @return {*}
   */
  export const get_mini_users_uId_cars = async(params?:GetMiniUsersUidCars) => {
    
  const res = await server.GET<UserVehicleLicenseVO[]> (`/mini/users/${params?.uId}/cars`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniUsersUidCarsCaridUntying   {
        uId?:string;carId?:string;
      
      }
  /** 
   * @description:  解绑车辆
   * @param {GetMiniUsersUidCarsCaridUntying} params? 
   * @return {*}
   */
  export const get_mini_users_uId_cars_carId_untying = async(params?:GetMiniUsersUidCarsCaridUntying) => {
    
  const res = await server.GET (`/mini/users/${params?.uId}/cars/${params?.carId}/untying`,{params} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  图表
     
   * @return {*}
   */
  export const get_mini_users_chart = async() => {
    
  const res = await server.GET<UserChartVo> (`/mini/users/chart`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  获取周访问趋势
   * @param {AnalysisDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_weeklyVisitTrend = async(params?:AnalysisDto) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/weeklyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  周留存
   * @param {AnalysisDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_weeklyRetain = async(params?:AnalysisDto) => {
    
  const res = await server.GET<WxMaRetainInfo> (`/mini/statistic/weeklyRetain`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  获取访问页面数据
   * @param {AnalysisSingleDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_visitPage = async(params?:AnalysisSingleDto) => {
    
  const res = await server.GET<WxMaVisitPage[]> (`/mini/statistic/visitPage`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  获取访问分布
   * @param {AnalysisSingleDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_visitDistribution = async(params?:AnalysisSingleDto) => {
    
  const res = await server.GET<WxMaVisitDistribution> (`/mini/statistic/visitDistribution`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  用户统计
     
   * @return {*}
   */
  export const get_mini_statistic_userStatistic = async() => {
    
  const res = await server.GET<UserStatisticVo> (`/mini/statistic/userStatistic`, );

        return res?.result; 
        }
    
   export interface GetMiniStatisticUserportrait   {
        type?:number;
      
      }
  /** 
   * @description:  获取小程序新增或活跃用户的画像分布数据
   * @param {GetMiniStatisticUserportrait} params? 
   * @return {*}
   */
  export const get_mini_statistic_userPortrait = async(params?:GetMiniStatisticUserportrait) => {
    
  const res = await server.GET<WxMaUserPortrait> (`/mini/statistic/userPortrait`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniStatisticNewandactiveusertrend   {
        type?:number;
      
      }
  /** 
   * @description:  获取小程序新增或活跃用户趋势
   * @param {GetMiniStatisticNewandactiveusertrend} params? 
   * @return {*}
   */
  export const get_mini_statistic_newAndActiveUserTrend = async(params?:GetMiniStatisticNewandactiveusertrend) => {
    
  const res = await server.GET<any> (`/mini/statistic/newAndActiveUserTrend`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  获取月访问趋势
   * @param {AnalysisDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_monthlyVisitTrend = async(params?:AnalysisDto) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/monthlyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  月留存
   * @param {AnalysisDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_monthlyRetain = async(params?:AnalysisDto) => {
    
  const res = await server.GET<WxMaRetainInfo> (`/mini/statistic/monthlyRetain`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  获取日访问趋势
   * @param {AnalysisSingleDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailyVisitTrend = async(params?:AnalysisSingleDto) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/dailyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  查询概况趋势
   * @param {AnalysisSingleDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailySummaryTrend = async(params?:AnalysisSingleDto) => {
    
  const res = await server.GET<WxMaSummaryTrend[]> (`/mini/statistic/dailySummaryTrend`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  日留存
   * @param {AnalysisDto} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailyRetain = async(params?:AnalysisDto) => {
    
  const res = await server.GET<WxMaRetainInfo> (`/mini/statistic/dailyRetain`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniFeedback  extends FeedBackDto,Paging {
        
      
      }
  /** 
   * @description:  反馈-带分页
   * @param {GetMiniFeedback} params? 
   * @return {*}
   */
  export const get_mini_feedback = async(params?:GetMiniFeedback) => {
    
  const res = await server.GET<IPage<FeedBackVo>> (`/mini/feedback`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniComments  extends CommentRangeSearchDtoCore,Paging {
        
      
      }
  /** 
   * @description:  服务评价-带分页
   * @param {GetMiniComments} params? 
   * @return {*}
   */
  export const get_mini_comments = async(params?:GetMiniComments) => {
    
  const res = await server.GET<IPage<CommentVo>> (`/mini/comments`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  图表
   * @param {CommentRangeSearchDtoCore} params? 
   * @return {*}
   */
  export const get_mini_comments_chart = async(params?:CommentRangeSearchDtoCore) => {
    
  const res = await server.GET<CommentChartVo> (`/mini/comments/chart`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  菜单权限树
     
   * @return {*}
   */
  export const get_merchant_menus_tree = async() => {
    
  const res = await server.GET<PermissionTree[]> (`/merchant/menus/tree`, );

        return res?.result??[]; 
        }
    
   export interface GetMerchantData  extends MerchantDataSearchDto,Paging {
        
      
      }
  /** 
   * @description:  商户数据 -数据中心
   * @param {GetMerchantData} params? 
   * @return {*}
   */
  export const get_merchant_data = async(params?:GetMerchantData) => {
    
  const res = await server.GET<IPage<MerchantDataVo>> (`/merchant/data`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  地图停车点列表
     
   * @return {*}
   */
  export const get_map_lots = async() => {
    
  const res = await server.GET<MapLot[]> (`/map/lots`, );

        return res?.result??[]; 
        }
    
   export interface GetMapLotsId   {
        id?:string;
      
      }
  /** 
   * @description:  地图某停车点详情
   * @param {GetMapLotsId} params? 
   * @return {*}
   */
  export const get_map_lots_id = async(params?:GetMapLotsId) => {
    
  const res = await server.GET<{[key:string]:any}> (`/map/lots/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetMapLotsPage  extends SearchLotDto,Paging {
        
      
      }
  /** 
   * @description:  地图停车点列表-分页
   * @param {GetMapLotsPage} params? 
   * @return {*}
   */
  export const get_map_lots_page = async(params?:GetMapLotsPage) => {
    
  const res = await server.GET<IPage<MapLot>> (`/map/lots/page`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  地图停车点列表-当前状况
     
   * @return {*}
   */
  export const get_map_lots_online = async() => {
    
  const res = await server.GET<LotUsedResult[]> (`/map/lots/online`, );

        return res?.result??[]; 
        }
    
   export interface GetLogsTopup  extends SystemLogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  系统日志-带分页
   * @param {GetLogsTopup} params? 
   * @return {*}
   */
  export const get_logs_topUp = async(params?:GetLogsTopup) => {
    
  const res = await server.GET<IPage<SysTopUpLog>> (`/logs/topUp`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsSystem  extends SystemLogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  系统日志-带分页
   * @param {GetLogsSystem} params? 
   * @return {*}
   */
  export const get_logs_system = async(params?:GetLogsSystem) => {
    
  const res = await server.GET<IPage<SysLogVo>> (`/logs/system`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsSupport  extends KfLogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  客服日志-带分页
   * @param {GetLogsSupport} params? 
   * @return {*}
   */
  export const get_logs_support = async(params?:GetLogsSupport) => {
    
  const res = await server.GET<IPage<OrderAdjustVo>> (`/logs/support`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  客服日志图表
   * @param {KfLogSearchDto} params? 
   * @return {*}
   */
  export const get_logs_support_chart = async(params?:KfLogSearchDto) => {
    
  const res = await server.GET<LogChartVo> (`/logs/support/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsPatrol  extends PatrolLogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  巡查日志-带分页
   * @param {GetLogsPatrol} params? 
   * @return {*}
   */
  export const get_logs_patrol = async(params?:GetLogsPatrol) => {
    
  const res = await server.GET<IPage<PatrolLogVo>> (`/logs/patrol`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  巡查日志图表
   * @param {PatrolLogSearchDto} params? 
   * @return {*}
   */
  export const get_logs_patrol_chart = async(params?:PatrolLogSearchDto) => {
    
  const res = await server.GET<LogChartVo> (`/logs/patrol/chart`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  订单全日志查询
   * @param {OrderRecordSearchDto} params? 
   * @return {*}
   */
  export const get_logs_order = async(params?:OrderRecordSearchDto) => {
    
  const res = await server.GET<OrderRecordLogVo[]> (`/logs/order`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetLogsLogin  extends LoginLogSearch,Paging {
        
      
      }
  /** 
   * @description:  登录日志-带分页
   * @param {GetLogsLogin} params? 
   * @return {*}
   */
  export const get_logs_login = async(params?:GetLogsLogin) => {
    
  const res = await server.GET<IPage<SysLoginLog>> (`/logs/login`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsJournal  extends JournalLogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  值守日志-带分页
   * @param {GetLogsJournal} params? 
   * @return {*}
   */
  export const get_logs_journal = async(params?:GetLogsJournal) => {
    
  const res = await server.GET<IPage<JournalLogVo>> (`/logs/journal`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  值守日志图表
   * @param {JournalLogSearchDto} params? 
   * @return {*}
   */
  export const get_logs_journal_chart = async(params?:JournalLogSearchDto) => {
    
  const res = await server.GET<LogChartVo> (`/logs/journal/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsImportReports  extends ImportReportSearchDto,Paging {
        
      
      }
  /** 
   * @description:  导入日志-带分页
   * @param {GetLogsImportReports} params? 
   * @return {*}
   */
  export const get_logs_import_reports = async(params?:GetLogsImportReports) => {
    
  const res = await server.GET<IPage<ImportReport>> (`/logs/import-reports`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsChannelOpen  extends SearchChannelOpenDto,Paging {
        
      
      }
  /** 
   * @description:  抬杆日志-分页
   * @param {GetLogsChannelOpen} params? 
   * @return {*}
   */
  export const get_logs_channel_open = async(params?:GetLogsChannelOpen) => {
    
  const res = await server.GET<IPage<ChannelOpenLogVo>> (`/logs/channel-open`,{params} );

        return res?.result; 
        }
    
   export interface GetInvoicesOrders  extends InvoiceOrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  可开票订单
   * @param {GetInvoicesOrders} params? 
   * @return {*}
   */
  export const get_invoices_orders = async(params?:GetInvoicesOrders) => {
    
  const res = await server.GET<IPage<Order>> (`/invoices/orders`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  发票列表-导出
   * @param {InvoiceSearch} params? 
   * @return {*}
   */
  export const get_invoices_export = async(params?:InvoiceSearch) => {
    
  const res = await server.GET<ArrayBuffer> (`/invoices/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   
  /** 
   * @description:  查询开票订单金额
   * @param {InvoiceOrderSearchDto} params? 
   * @return {*}
   */
  export const get_invoices_all_orders_money = async(params?:InvoiceOrderSearchDto) => {
    
  const res = await server.GET<number> (`/invoices/all-orders-money`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationTopUpDiscountsItemsId   {
        id?:string;
      
      }
  /** 
   * @description:  该优惠活动详情
   * @param {GetInformationTopUpDiscountsItemsId} params? 
   * @return {*}
   */
  export const get_information_top_up_discounts_items_id = async(params?:GetInformationTopUpDiscountsItemsId) => {
    
  const res = await server.GET<TopUpDiscountsItem[]> (`/information/top-up-discounts-items/${params?.id}`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  小程序订阅消息模板-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_information_subscribe_templates = async(params?:Paging) => {
    
  const res = await server.GET<IPage<SubscribeMessageTemplate>> (`/information/subscribe-templates`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  收费规则列表
     
   * @return {*}
   */
  export const get_information_rules_list = async() => {
    
  const res = await server.GET<ParkRateRule[]> (`/information/rules/list`, );

        return res?.result??[]; 
        }
    
   export interface GetInformationPplsPplidLog  extends Paging {
        pplId?:string;
      
      }
  /** 
   * @description:  查看某个地锁的停车数据
   * @param {GetInformationPplsPplidLog} params? 
   * @return {*}
   */
  export const get_information_ppls_pplId_log = async(params?:GetInformationPplsPplidLog) => {
    
  const res = await server.GET<IPage<PplLog>> (`/information/ppls/${params?.pplId}/log`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationPplsPplidHeartbeat  extends Paging {
        pplId?:string;
      
      }
  /** 
   * @description:  查看某个地锁的心跳数据
   * @param {GetInformationPplsPplidHeartbeat} params? 
   * @return {*}
   */
  export const get_information_ppls_pplId_heartbeat = async(params?:GetInformationPplsPplidHeartbeat) => {
    
  const res = await server.GET<IPage<PplLog>> (`/information/ppls/${params?.pplId}/heartbeat`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationPayMchList   {
        type?:number;name?:string;
      
      }
  /** 
   * @description:  列表
   * @param {GetInformationPayMchList} params? 
   * @return {*}
   */
  export const get_information_pay_mch_list = async(params?:GetInformationPayMchList) => {
    
  const res = await server.GET<PayMchInfo[]> (`/information/pay-mch/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetInformationLotsLotidPlaces   {
        lotId?:string;
      
      }
  /** 
   * @description:  某停车点下的车位列表
   * @param {GetInformationLotsLotidPlaces} params? 
   * @return {*}
   */
  export const get_information_lots_lotId_places = async(params?:GetInformationLotsLotidPlaces) => {
    
  const res = await server.GET<ParkingPlace[]> (`/information/lots/${params?.lotId}/places`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetInformationLotsId   {
        id?:string;
      
      }
  /** 
   * @description:  停车点
   * @param {GetInformationLotsId} params? 
   * @return {*}
   */
  export const get_information_lots_id = async(params?:GetInformationLotsId) => {
    
  const res = await server.GET<Lot> (`/information/lots/${params?.id}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  停车点树结构-带lot
   * @param {LotTreeSearchDto} params? 
   * @return {*}
   */
  export const get_information_lots_tree = async(params?:LotTreeSearchDto) => {
    
  const res = await server.GET<Tree[]> (`/information/lots/tree`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  停车点列表
   * @param {LotSearchDto} params? 
   * @return {*}
   */
  export const get_information_lots_list = async(params?:LotSearchDto) => {
    
  const res = await server.GET<LotVo[]> (`/information/lots/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetInformationLotTreeTrees  extends Paging {
        pid?:string;
      
      }
  /** 
   * @description:  直接下属节点-树-分页
   * @param {GetInformationLotTreeTrees} params? 
   * @return {*}
   */
  export const get_information_lot_tree_trees = async(params?:GetInformationLotTreeTrees) => {
    
  const res = await server.GET<IPage<LotTreeInfo>> (`/information/lot-tree/trees`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  停车点树
     
   * @return {*}
   */
  export const get_information_lot_tree_tree = async() => {
    
  const res = await server.GET<LotTreeInfo[]> (`/information/lot-tree/tree`, );

        return res?.result??[]; 
        }
    
   export interface GetInformationGeomsGeomidLog  extends TimeLocalDate,Paging {
        geomId?:string;
      
      }
  /** 
   * @description:  查看某个地磁的停车数据
   * @param {GetInformationGeomsGeomidLog} params? 
   * @return {*}
   */
  export const get_information_geoms_geomId_log = async(params?:GetInformationGeomsGeomidLog) => {
    
  const res = await server.GET<IPage<GeomLog>> (`/information/geoms/${params?.geomId}/log`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationGeomsGeomidHeartbeat  extends Paging {
        geomId?:string;
      
      }
  /** 
   * @description:  查看某个地磁的心跳数据
   * @param {GetInformationGeomsGeomidHeartbeat} params? 
   * @return {*}
   */
  export const get_information_geoms_geomId_heartbeat = async(params?:GetInformationGeomsGeomidHeartbeat) => {
    
  const res = await server.GET<IPage<GeomHeart>> (`/information/geoms/${params?.geomId}/heartbeat`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationDevices  extends DeviceSearchDto,Paging {
        
      
      }
  /** 
   * @description:  设备列表-带分页
   * @param {GetInformationDevices} params? 
   * @return {*}
   */
  export const get_information_devices = async(params?:GetInformationDevices) => {
    
  const res = await server.GET<IPage<DeviceVo>> (`/information/devices`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationDevicesPpls   {
        sn?:string;
      
      }
  /** 
   * @description:  可绑定地锁
   * @param {GetInformationDevicesPpls} params? 
   * @return {*}
   */
  export const get_information_devices_ppls = async(params?:GetInformationDevicesPpls) => {
    
  const res = await server.GET<DeviceCanUseVo[]> (`/information/devices/ppls`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetInformationDevicesMock  extends Paging {
        type?:number;
      
      }
  /** 
   * @description:  设备列表mock-带分页
   * @param {GetInformationDevicesMock} params? 
   * @return {*}
   */
  export const get_information_devices_mock = async(params?:GetInformationDevicesMock) => {
    
  const res = await server.GET<IPage<Device>> (`/information/devices/mock`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  产品模拟-带分页
   * @param {Paging} params? 
   * @return {*}
   */
  export const get_information_devices_mock2 = async(params?:Paging) => {
    
  const res = await server.GET<IPage<MockProduct>> (`/information/devices/mock2`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationDevicesImportReports  extends Paging {
        type?:number;
      
      }
  /** 
   * @description:  设备导入列表-带分页
   * @param {GetInformationDevicesImportReports} params? 
   * @return {*}
   */
  export const get_information_devices_import_reports = async(params?:GetInformationDevicesImportReports) => {
    
  const res = await server.GET<IPage<DeviceImportReport>> (`/information/devices/import-reports`,{params} );

        return res?.result; 
        }
    
   export interface GetInformationDevicesGeoms   {
        sn?:string;
      
      }
  /** 
   * @description:  可绑定地磁
   * @param {GetInformationDevicesGeoms} params? 
   * @return {*}
   */
  export const get_information_devices_geoms = async(params?:GetInformationDevicesGeoms) => {
    
  const res = await server.GET<DeviceCanUseVo[]> (`/information/devices/geoms`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetFinancialTopUp  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  充值统计
   * @param {GetFinancialTopUp} params? 
   * @return {*}
   */
  export const get_financial_top_up = async(params?:GetFinancialTopUp) => {
    
  const res = await server.GET<IPage<TopUpStatistics>> (`/financial/top-up`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialTopUpDetail   {
        date?:string;phone?:string;
      
      }
  /** 
   * @description:  充值统计-明细
   * @param {GetFinancialTopUpDetail} params? 
   * @return {*}
   */
  export const get_financial_top_up_detail = async(params?:GetFinancialTopUpDetail) => {
    
  const res = await server.GET<TopUpStatisticsDetail[]> (`/financial/top-up/detail`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  充值统计-图表
     
   * @return {*}
   */
  export const get_financial_top_up_chart = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/financial/top-up/chart`, );

        return res?.result; 
        }
    
   export interface GetFinancialTcc  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  停车场财务
   * @param {GetFinancialTcc} params? 
   * @return {*}
   */
  export const get_financial_tcc = async(params?:GetFinancialTcc) => {
    
  const res = await server.GET<IPage<TccFinancialVo>> (`/financial/tcc`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialRoadside  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  路内财务
   * @param {GetFinancialRoadside} params? 
   * @return {*}
   */
  export const get_financial_roadside = async(params?:GetFinancialRoadside) => {
    
  const res = await server.GET<IPage<RoadsideFinancialVo>> (`/financial/roadside`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialRefundStatistics  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  电子退款按日-分页
   * @param {GetFinancialRefundStatistics} params? 
   * @return {*}
   */
  export const get_financial_refund_statistics = async(params?:GetFinancialRefundStatistics) => {
    
  const res = await server.GET<IPage<RefundDayVo>> (`/financial/refund-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialRefundStatisticsDetail   {
        date?:string;
      
      }
  /** 
   * @description:  电子退款当日详细
   * @param {GetFinancialRefundStatisticsDetail} params? 
   * @return {*}
   */
  export const get_financial_refund_statistics_detail = async(params?:GetFinancialRefundStatisticsDetail) => {
    
  const res = await server.GET<RefundSimpleVo[]> (`/financial/refund-statistics/detail`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  电子退款-图表
     
   * @return {*}
   */
  export const get_financial_refund_statistics_chart = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/financial/refund-statistics/chart`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  异常支付-图表
     
   * @return {*}
   */
  export const get_financial_error_pay_chart = async() => {
    
  const res = await server.GET<PayAffirmErrorChartVo> (`/financial/error-pay/chart`, );

        return res?.result; 
        }
    
   export interface GetFinancialCoupons  extends TimeRangeDate,Paging {
        
      
      }
  /** 
   * @description:  优惠券分析-带分页
   * @param {GetFinancialCoupons} params? 
   * @return {*}
   */
  export const get_financial_coupons = async(params?:GetFinancialCoupons) => {
    
  const res = await server.GET<IPage<CouponStatistics>> (`/financial/coupons`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialCouponsDetail  extends CouponSearchDto,Paging {
        
      
      }
  /** 
   * @description:  优惠券详情-带分页
   * @param {GetFinancialCouponsDetail} params? 
   * @return {*}
   */
  export const get_financial_coupons_detail = async(params?:GetFinancialCouponsDetail) => {
    
  const res = await server.GET<IPage<CouponVo>> (`/financial/coupons/detail`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  优惠券分析-图表
     
   * @return {*}
   */
  export const get_financial_coupons_chart = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/financial/coupons/chart`, );

        return res?.result; 
        }
    
   export interface GetFinancialAll  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  总财务
   * @param {GetFinancialAll} params? 
   * @return {*}
   */
  export const get_financial_all = async(params?:GetFinancialAll) => {
    
  const res = await server.GET<IPage<AllFinancialVo>> (`/financial/all`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsV2  extends CoreLotWithTimeRangeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  交账数据-带分页
   * @param {GetFinancialAccountsV2} params? 
   * @return {*}
   */
  export const get_financial_accounts_v2 = async(params?:GetFinancialAccountsV2) => {
    
  const res = await server.GET<IPage<AccountsVo>> (`/financial/accounts/v2`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsV2His  extends CoreLotWithTimeDateSearchDto,Paging {
        
      
      }
  /** 
   * @description:  根据日期查询交账明细-带分页
   * @param {GetFinancialAccountsV2His} params? 
   * @return {*}
   */
  export const get_financial_accounts_v2_his = async(params?:GetFinancialAccountsV2His) => {
    
  const res = await server.GET<IPage<AccountsItemVo>> (`/financial/accounts/v2/his`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  交账数据-图表
     
   * @return {*}
   */
  export const get_financial_accounts_v2_chart = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/financial/accounts/v2/chart`, );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsStation  extends CoreLotWithTimeRangeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  交账数据-带分页
   * @param {GetFinancialAccountsStation} params? 
   * @return {*}
   */
  export const get_financial_accounts_station = async(params?:GetFinancialAccountsStation) => {
    
  const res = await server.GET<IPage<AccountsVo>> (`/financial/accounts/station`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsStationUaAccountsid  extends Paging {
        accountsId?:string;
      
      }
  /** 
   * @description:  查电子交账记录
   * @param {GetFinancialAccountsStationUaAccountsid} params? 
   * @return {*}
   */
  export const get_financial_accounts_station_ua_accountsId = async(params?:GetFinancialAccountsStationUaAccountsid) => {
    
  const res = await server.GET<IPage<TccStationUaItem>> (`/financial/accounts/station/ua/${params?.accountsId}`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsStationHis  extends StationAccountsItemSearchDto,Paging {
        
      
      }
  /** 
   * @description:  根据日期查询交账明细-带分页
   * @param {GetFinancialAccountsStationHis} params? 
   * @return {*}
   */
  export const get_financial_accounts_station_his = async(params?:GetFinancialAccountsStationHis) => {
    
  const res = await server.GET<IPage<StationAccountsItemVo>> (`/financial/accounts/station/his`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  undefined
     
   * @return {*}
   */
  export const get_dataCenter_xxx = async() => {
    
  const res = await server.GET<{[key:string]:Object}> (`/dataCenter/xxx`, );

        return res?.result; 
        }
    
   export interface GetDatacenterToplist   {
        type?:number;
      
      }
  /** 
   * @description:  通用-流量排行
   * @param {GetDatacenterToplist} params? 
   * @return {*}
   */
  export const get_dataCenter_toplist = async(params?:GetDatacenterToplist) => {
    
  const res = await server.GET<DcTopList[]> (`/dataCenter/toplist`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetDatacenterStatistics   {
        type?:number;
      
      }
  /** 
   * @description:  通用-泊位、员工、均产
   * @param {GetDatacenterStatistics} params? 
   * @return {*}
   */
  export const get_dataCenter_statistics = async(params?:GetDatacenterStatistics) => {
    
  const res = await server.GET<DataCenterBasic> (`/dataCenter/statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetDatacenterPlaceStatistics   {
        type?:number;
      
      }
  /** 
   * @description:  车位占用分析
   * @param {GetDatacenterPlaceStatistics} params? 
   * @return {*}
   */
  export const get_dataCenter_place_statistics = async(params?:GetDatacenterPlaceStatistics) => {
    
  const res = await server.GET<DcActiveUsed[]> (`/dataCenter/place-statistics`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetDatacenterParkStatistics   {
        type?:number;
      
      }
  /** 
   * @description:  通用-停车分析
   * @param {GetDatacenterParkStatistics} params? 
   * @return {*}
   */
  export const get_dataCenter_park_statistics = async(params?:GetDatacenterParkStatistics) => {
    
  const res = await server.GET<DcInOutStatistics> (`/dataCenter/park-statistics`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通用-停车欠费分析
     
   * @return {*}
   */
  export const get_dataCenter_overdue_statistics = async() => {
    
  const res = await server.GET<{[key:string]:DataCenterAreaOverdue}> (`/dataCenter/overdue-statistics`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  实时订单总数
     
   * @return {*}
   */
  export const get_dataCenter_order_count = async() => {
    
  const res = await server.GET<number> (`/dataCenter/order-count`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  达州-内部展开的数据
     
   * @return {*}
   */
  export const get_dataCenter_inner = async() => {
    
  const res = await server.GET<{[key:string]:DataCenterInner}> (`/dataCenter/inner`, );

        return res?.result; 
        }
    
   export interface GetDatacenterIncomeStatistics   {
        type?:number;
      
      }
  /** 
   * @description:  通用-收入
   * @param {GetDatacenterIncomeStatistics} params? 
   * @return {*}
   */
  export const get_dataCenter_income_statistics = async(params?:GetDatacenterIncomeStatistics) => {
    
  const res = await server.GET<DcIncome> (`/dataCenter/income-statistics`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通用-收入-总和
     
   * @return {*}
   */
  export const get_dataCenter_income_statistics_all = async() => {
    
  const res = await server.GET<DcIncomeAll> (`/dataCenter/income-statistics-all`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通用-区域收入分析
     
   * @return {*}
   */
  export const get_dataCenter_area_income_statistics = async() => {
    
  const res = await server.GET<{[key:string]:DcAreaIncome[]}> (`/dataCenter/area-income-statistics`, );

        return res?.result; 
        }
    
   export interface GetCouponRecords  extends SearchCouponRecordDto,Paging {
        
      
      }
  /** 
   * @description:  赠券记录
   * @param {GetCouponRecords} params? 
   * @return {*}
   */
  export const get_coupon_records = async(params?:GetCouponRecords) => {
    
  const res = await server.GET<IPage<CouponRecordVo>> (`/coupon/records`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  查询全部停车券模板
   * @param {CouponModelSearchDto} params? 
   * @return {*}
   */
  export const get_coupon_model_list = async(params?:CouponModelSearchDto) => {
    
  const res = await server.GET<CouponModelVo[]> (`/coupon/model/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetCommonSms   {
        type?:string;length?:number;
      
      }
  /** 
   * @description:  获取验证码
   * @param {GetCommonSms} params? 
   * @return {*}
   */
  export const get_common_sms = async(params?:GetCommonSms) => {
    
  const res = await server.GET (`/common/sms`,{params} );

        return res?.success; 
        }
    
   export interface GetCommonOssAliToken   {
        phone?:string;
      
      }
  /** 
   * @description:  匿名上传换取token
   * @param {GetCommonOssAliToken} params? 
   * @return {*}
   */
  export const get_common_oss_ali_token = async(params?:GetCommonOssAliToken) => {
    
  const res = await server.GET<string> (`/common/oss/ali/token`,{params} );

        return res?.result; 
        }
    
   export interface GetCommonImportTemplate   {
        type?:string;
      
      }
  /** 
   * @description:  获取导入模板
   * @param {GetCommonImportTemplate} params? 
   * @return {*}
   */
  export const get_common_import_template = async(params?:GetCommonImportTemplate) => {
    
  const res = await server.GET<SysConfig> (`/common/import/template`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  查询巡查打印
     
   * @return {*}
   */
  export const get_common_getPrint = async() => {
    
  const res = await server.GET<string> (`/common/getPrint`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  支付数据
   * @param {ChartSearchDto} params? 
   * @return {*}
   */
  export const get_chart_zhifu = async(params?:ChartSearchDto) => {
    
  const res = await server.GET<ChartZhifu> (`/chart/zhifu`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  充值数据
   * @param {TimeLocalDate} params? 
   * @return {*}
   */
  export const get_chart_top_up = async(params?:TimeLocalDate) => {
    
  const res = await server.GET<ChartTopUp> (`/chart/top-up`,{params} );

        return res?.result; 
        }
    
   export interface GetChartTime   {
        roadside?:boolean;day?:number;
      
      }
  /** 
   * @description:  停车时长 day 天数
   * @param {GetChartTime} params? 
   * @return {*}
   */
  export const get_chart_time = async(params?:GetChartTime) => {
    
  const res = await server.GET<ChartTc> (`/chart/time`,{params} );

        return res?.result; 
        }
    
   export interface GetChartPlaceZhouzhuan   {
        day?:number;
      
      }
  /** 
   * @description:  停车周转率 day 天数
   * @param {GetChartPlaceZhouzhuan} params? 
   * @return {*}
   */
  export const get_chart_place_zhouzhuan = async(params?:GetChartPlaceZhouzhuan) => {
    
  const res = await server.GET<ChartZhouZhuan[]> (`/chart/place-zhouzhuan`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  停车利用率
   * @param {TimeLocalDate} params? 
   * @return {*}
   */
  export const get_chart_place_rate = async(params?:TimeLocalDate) => {
    
  const res = await server.GET<ChartPlaceRate[]> (`/chart/place-rate`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  财务数据
   * @param {ChartSearchDto} params? 
   * @return {*}
   */
  export const get_chart_money = async(params?:ChartSearchDto) => {
    
  const res = await server.GET<ChartMoneyVo> (`/chart/money`,{params} );

        return res?.result; 
        }
    
   export interface GetChargingShopsIdPoints   {
        id?:string;
      
      }
  /** 
   * @description:  某充电站下所有充电桩
   * @param {GetChargingShopsIdPoints} params? 
   * @return {*}
   */
  export const get_charging_shops_id_points = async(params?:GetChargingShopsIdPoints) => {
    
  const res = await server.GET<ChargingPoint[]> (`/charging-shops/${params?.id}/points`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetCars  extends CarsSearchDto,Paging {
        
      
      }
  /** 
   * @description:  车辆列表
   * @param {GetCars} params? 
   * @return {*}
   */
  export const get_cars = async(params?:GetCars) => {
    
  const res = await server.GET<IPage<CarVo>> (`/cars`,{params} );

        return res?.result; 
        }
    
   export interface GetCarsIdVehiclelicense   {
        id?:string;
      
      }
  /** 
   * @description:  某车行驶证详情
   * @param {GetCarsIdVehiclelicense} params? 
   * @return {*}
   */
  export const get_cars_id_vehicleLicense = async(params?:GetCarsIdVehiclelicense) => {
    
  const res = await server.GET<UserVehicleLicenseVO> (`/cars/${params?.id}/vehicleLicense`,{params} );

        return res?.result; 
        }
    
   export interface GetCarsIdHis  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  车辆订单历史
   * @param {GetCarsIdHis} params? 
   * @return {*}
   */
  export const get_cars_id_his = async(params?:GetCarsIdHis) => {
    
  const res = await server.GET<IPage<Order>> (`/cars/${params?.id}/his`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  图表
   * @param {CarsSearchDto} params? 
   * @return {*}
   */
  export const get_cars_chart = async(params?:CarsSearchDto) => {
    
  const res = await server.GET<CarChartVo> (`/cars/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetCarapply  extends CarApplySearchDto,Paging {
        
      
      }
  /** 
   * @description:  申请列表
   * @param {GetCarapply} params? 
   * @return {*}
   */
  export const get_carApply = async(params?:GetCarapply) => {
    
  const res = await server.GET<IPage<CarApplyVo>> (`/carApply`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  批量删除申请
   * @param {string[]} data? 
   * @return {*}
   */
  export const delete_carApply = async(data?:string[]) => {
    
  const res = await server.DELETE (`/carApply`,{data} );

        return res?.success; 
        }
    
   export interface GetCarapplyId   {
        id?:string;status?:number;
      
      }
  /** 
   * @description:  处理审核
   * @param {GetCarapplyId} params? 
   * @return {*}
   */
  export const get_carApply_id = async(params?:GetCarapplyId) => {
    
  const res = await server.GET (`/carApply/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteCarapplyId   {
        id?:string;
      
      }
  /** 
   * @description:  删除申请
   * @param {DeleteCarapplyId} params? 
   * @return {*}
   */
  export const delete_carApply_id = async(params?:DeleteCarapplyId) => {
    
  const res = await server.DELETE (`/carApply/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetApproveReport  extends SearchReportDto,Paging {
        
      
      }
  /** 
   * @description:  获取上报列表-分页
   * @param {GetApproveReport} params? 
   * @return {*}
   */
  export const get_approve_report = async(params?:GetApproveReport) => {
    
  const res = await server.GET<IPage<ApproveReportVo>> (`/approve/report`,{params} );

        return res?.result; 
        }
    
   export interface GetApproveReportDetail   {
        id?:string;
      
      }
  /** 
   * @description:  查上报详情-可以匿名
   * @param {GetApproveReportDetail} params? 
   * @return {*}
   */
  export const get_approve_report_detail = async(params?:GetApproveReportDetail) => {
    
  const res = await server.GET<ApproveReportVo> (`/approve/report/detail`,{params} );

        return res?.result; 
        }
    
   export interface GetApproveReportAll  extends SearchReportDto,Paging {
        
      
      }
  /** 
   * @description:  获取所有上报-分页
   * @param {GetApproveReportAll} params? 
   * @return {*}
   */
  export const get_approve_report_all = async(params?:GetApproveReportAll) => {
    
  const res = await server.GET<IPage<ApproveReportVo>> (`/approve/report/all`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  查可以上报的流程
     
   * @return {*}
   */
  export const get_approve_flow_list = async() => {
    
  const res = await server.GET<ApproveFlow[]> (`/approve/flow/list`, );

        return res?.result??[]; 
        }
    
   export interface GetApproveFlowDetailId   {
        id?:string;
      
      }
  /** 
   * @description:  查流程详情-公开流程可匿名查询
   * @param {GetApproveFlowDetailId} params? 
   * @return {*}
   */
  export const get_approve_flow_detail_id = async(params?:GetApproveFlowDetailId) => {
    
  const res = await server.GET<ApproveFlow> (`/approve/flow/detail/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface DeleteTccYdpsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除诱导屏
   * @param {DeleteTccYdpsId} params? 
   * @return {*}
   */
  export const delete_tcc_ydps_id = async(params?:DeleteTccYdpsId) => {
    
  const res = await server.DELETE (`/tcc/ydps/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteTccYdpsCardsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除卡号
   * @param {DeleteTccYdpsCardsId} params? 
   * @return {*}
   */
  export const delete_tcc_ydps_cards_id = async(params?:DeleteTccYdpsCardsId) => {
    
  const res = await server.DELETE (`/tcc/ydps/cards/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteTccStationUserId   {
        id?:string;
      
      }
  /** 
   * @description:  退休岗亭人员
   * @param {DeleteTccStationUserId} params? 
   * @return {*}
   */
  export const delete_tcc_station_user_id = async(params?:DeleteTccStationUserId) => {
    
  const res = await server.DELETE (`/tcc/station/user/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteTccGuestId   {
        id?:string;
      
      }
  /** 
   * @description:  删除访客车
   * @param {DeleteTccGuestId} params? 
   * @return {*}
   */
  export const delete_tcc_guest_id = async(params?:DeleteTccGuestId) => {
    
  const res = await server.DELETE (`/tcc/guest/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteTccBlacklistId   {
        id?:string;
      
      }
  /** 
   * @description:  删除
   * @param {DeleteTccBlacklistId} params? 
   * @return {*}
   */
  export const delete_tcc_blacklist_id = async(params?:DeleteTccBlacklistId) => {
    
  const res = await server.DELETE (`/tcc/blacklist/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemUsersId   {
        id?:string;
      
      }
  /** 
   * @description:  删除用户
   * @param {DeleteSystemUsersId} params? 
   * @return {*}
   */
  export const delete_system_users_id = async(params?:DeleteSystemUsersId) => {
    
  const res = await server.DELETE (`/system/users/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemTenantId   {
        id?:string;
      
      }
  /** 
   * @description:  删除租户
   * @param {DeleteSystemTenantId} params? 
   * @return {*}
   */
  export const delete_system_tenant_id = async(params?:DeleteSystemTenantId) => {
    
  const res = await server.DELETE (`/system/tenant/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemTenantRoleId   {
        id?:string;
      
      }
  /** 
   * @description:  删除角色
   * @param {DeleteSystemTenantRoleId} params? 
   * @return {*}
   */
  export const delete_system_tenant_role_id = async(params?:DeleteSystemTenantRoleId) => {
    
  const res = await server.DELETE (`/system/tenant-role/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemRolesId   {
        id?:string;
      
      }
  /** 
   * @description:  删除角色
   * @param {DeleteSystemRolesId} params? 
   * @return {*}
   */
  export const delete_system_roles_id = async(params?:DeleteSystemRolesId) => {
    
  const res = await server.DELETE (`/system/roles/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemMenusId   {
        id?:string;
      
      }
  /** 
   * @description:  删除菜单
   * @param {DeleteSystemMenusId} params? 
   * @return {*}
   */
  export const delete_system_menus_id = async(params?:DeleteSystemMenusId) => {
    
  const res = await server.DELETE (`/system/menus/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemDictValueId   {
        id?:string;
      
      }
  /** 
   * @description:  删除值
   * @param {DeleteSystemDictValueId} params? 
   * @return {*}
   */
  export const delete_system_dict_value_id = async(params?:DeleteSystemDictValueId) => {
    
  const res = await server.DELETE (`/system/dict/value/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemDictTypeId   {
        id?:string;
      
      }
  /** 
   * @description:  删除类型
   * @param {DeleteSystemDictTypeId} params? 
   * @return {*}
   */
  export const delete_system_dict_type_id = async(params?:DeleteSystemDictTypeId) => {
    
  const res = await server.DELETE (`/system/dict/type/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSystemDepartmentsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除部门
   * @param {DeleteSystemDepartmentsId} params? 
   * @return {*}
   */
  export const delete_system_departments_id = async(params?:DeleteSystemDepartmentsId) => {
    
  const res = await server.DELETE (`/system/departments/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteStaffWorkTagsId   {
        id?:string;
      
      }
  /** 
   * @description:  undefined
   * @param {DeleteStaffWorkTagsId} params? 
   * @return {*}
   */
  export const delete_staff_work_tags_id = async(params?:DeleteStaffWorkTagsId) => {
    
  const res = await server.DELETE (`/staff/work-tags/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteStaffPatrolUsersId   {
        id?:string;
      
      }
  /** 
   * @description:  退休巡查人员
   * @param {DeleteStaffPatrolUsersId} params? 
   * @return {*}
   */
  export const delete_staff_patrol_users_id = async(params?:DeleteStaffPatrolUsersId) => {
    
  const res = await server.DELETE (`/staff/patrol-users/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteStaffPatrolRolesId   {
        id?:string;
      
      }
  /** 
   * @description:  删除巡查角色
   * @param {DeleteStaffPatrolRolesId} params? 
   * @return {*}
   */
  export const delete_staff_patrol_roles_id = async(params?:DeleteStaffPatrolRolesId) => {
    
  const res = await server.DELETE (`/staff/patrol-roles/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteSignRulesId   {
        id?:string;
      
      }
  /** 
   * @description:  删除考勤规则
   * @param {DeleteSignRulesId} params? 
   * @return {*}
   */
  export const delete_sign_rules_id = async(params?:DeleteSignRulesId) => {
    
  const res = await server.DELETE (`/sign/rules/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteMonthlyEventId   {
        id?:string;
      
      }
  /** 
   * @description:  删除包月活动
   * @param {DeleteMonthlyEventId} params? 
   * @return {*}
   */
  export const delete_monthly_event_id = async(params?:DeleteMonthlyEventId) => {
    
  const res = await server.DELETE (`/monthly/event/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteMiniEnterpriseUserId   {
        id?:string;
      
      }
  /** 
   * @description:  删除企业用户
   * @param {DeleteMiniEnterpriseUserId} params? 
   * @return {*}
   */
  export const delete_mini_enterprise_user_id = async(params?:DeleteMiniEnterpriseUserId) => {
    
  const res = await server.DELETE (`/mini/enterprise-user/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteMerchantId   {
        id?:string;
      
      }
  /** 
   * @description:  删除
   * @param {DeleteMerchantId} params? 
   * @return {*}
   */
  export const delete_merchant_id = async(params?:DeleteMerchantId) => {
    
  const res = await server.DELETE (`/merchant/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteMerchantUserId   {
        id?:string;
      
      }
  /** 
   * @description:  删除
   * @param {DeleteMerchantUserId} params? 
   * @return {*}
   */
  export const delete_merchant_user_id = async(params?:DeleteMerchantUserId) => {
    
  const res = await server.DELETE (`/merchant/user/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteMerchantMenusId   {
        id?:string;
      
      }
  /** 
   * @description:  删除菜单
   * @param {DeleteMerchantMenusId} params? 
   * @return {*}
   */
  export const delete_merchant_menus_id = async(params?:DeleteMerchantMenusId) => {
    
  const res = await server.DELETE (`/merchant/menus/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationTopUpDiscountsItemId   {
        id?:string;
      
      }
  /** 
   * @description:  该活动删除一个子项目
   * @param {DeleteInformationTopUpDiscountsItemId} params? 
   * @return {*}
   */
  export const delete_information_top_up_discounts_item_id = async(params?:DeleteInformationTopUpDiscountsItemId) => {
    
  const res = await server.DELETE (`/information/top-up-discounts-item/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationRulesRuleid   {
        ruleId?:string;
      
      }
  /** 
   * @description:  删除收费规则
   * @param {DeleteInformationRulesRuleid} params? 
   * @return {*}
   */
  export const delete_information_rules_ruleId = async(params?:DeleteInformationRulesRuleid) => {
    
  const res = await server.DELETE (`/information/rules/${params?.ruleId}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationLotGroupId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车点位组
   * @param {DeleteInformationLotGroupId} params? 
   * @return {*}
   */
  export const delete_information_lot_group_id = async(params?:DeleteInformationLotGroupId) => {
    
  const res = await server.DELETE (`/information/lot-group/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationGeomsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除地磁
   * @param {DeleteInformationGeomsId} params? 
   * @return {*}
   */
  export const delete_information_geoms_id = async(params?:DeleteInformationGeomsId) => {
    
  const res = await server.DELETE (`/information/geoms/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationFreecarsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除免费车辆
   * @param {DeleteInformationFreecarsId} params? 
   * @return {*}
   */
  export const delete_information_freeCars_id = async(params?:DeleteInformationFreecarsId) => {
    
  const res = await server.DELETE (`/information/freeCars/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteInformationFreeRulesRuleid   {
        ruleId?:string;
      
      }
  /** 
   * @description:  删除假日免费规则
   * @param {DeleteInformationFreeRulesRuleid} params? 
   * @return {*}
   */
  export const delete_information_free_rules_ruleId = async(params?:DeleteInformationFreeRulesRuleid) => {
    
  const res = await server.DELETE (`/information/free-rules/${params?.ruleId}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteCouponModelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车券模板
   * @param {DeleteCouponModelId} params? 
   * @return {*}
   */
  export const delete_coupon_model_id = async(params?:DeleteCouponModelId) => {
    
  const res = await server.DELETE (`/coupon/model/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteChargingShopsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除充电站
   * @param {DeleteChargingShopsId} params? 
   * @return {*}
   */
  export const delete_charging_shops_id = async(params?:DeleteChargingShopsId) => {
    
  const res = await server.DELETE (`/charging-shops/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteChargingPointsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除充电桩
   * @param {DeleteChargingPointsId} params? 
   * @return {*}
   */
  export const delete_charging_points_id = async(params?:DeleteChargingPointsId) => {
    
  const res = await server.DELETE (`/charging-points/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteApproveFlowId   {
        id?:string;
      
      }
  /** 
   * @description:  删除
   * @param {DeleteApproveFlowId} params? 
   * @return {*}
   */
  export const delete_approve_flow_id = async(params?:DeleteApproveFlowId) => {
    
  const res = await server.DELETE (`/approve/flow/${params?.id}`,{params} );

        return res?.success; 
        }
     
    export interface YdpDto{
      id?:string;
  name?:string;
  level?:number;
  url?:string;

    } 
    export interface YdpCardDto{
      id?:string;
 /** 诱导屏ID */
 ydpId?:string;
 /** 停车场ID */
 lotId?:string;
 /** 编号 */
 number?:string;
 /** 宽 */
 width?:number;
 /** 高 */
 height?:number;
 /** 类型 1 总车位 2 剩余车位 3总车位+剩余车位 */
 type?:number;

    } 
    export interface TccXspTemplate{
      id?:string;
  name?:string;
  position?:number;
  defaultXsp?:boolean;
  xsp?:XspInfo;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface Text{
      lid?:number;
  dm?:number;
  ds?:number;
  dt?:number;
  dr?:number;
  font?:number;
  tc?:number;
  text?:string;

    } 
    export interface XspInfo{
     /** 显示屏版本,默认1 */
 ver?:number;
 /** 音量(10~100) */
 volume?:number;
 /** 最大显示行列 */
 maxLib?:number;
 /** 空闲显示每行内容-不得占用最大行,最大行默认显示空余车位 */
 idleDisplay?:string[];
  rule?:XspRule;

    } 
    export interface XspRule{
      enterNormalTemp?:XspVoiceText;
  enterNormalGeneralFree?:XspVoiceText;
  enterNormalAlwaysFree?:XspVoiceText;
  enterWaitBlackCar?:XspVoiceText;
  enterWaitNormal?:XspVoiceText;
  enterWaitFull?:XspVoiceText;
  enterWaitRule?:XspVoiceText;
  enterWaitReInto?:XspVoiceText;
  exitNormalTemp?:XspVoiceText;
  exitNormalGeneralFree?:XspVoiceText;
  exitNormalAlwaysFree?:XspVoiceText;
  exitWaitBlackCar?:XspVoiceText;
  exitWaitNoRecord?:XspVoiceText;
  exitWaitLockCar?:XspVoiceText;
  exitWaitNeedPay?:XspVoiceText;
  exitPaid?:XspVoiceText;

    } 
    export interface XspVoiceText{
      voice?:string;
  texts?:Text[];

    } 
    export interface TccStationUserDto{
      id?:string;
  password?:string;
  salt?:string;
  name?:string;
  avatar?:string;
  phone?:string;
  idCard?:string;
  lotId?:string;

    } 
    export interface StationResetPasswordDto{
     /** id */
 id?:string;
 /** 密码 */
 password?:string;

    } 
    export interface ManageCarInfo{
     /** 车牌号 */
 plateNo?:string;
 /** 车牌类型 */
 plateType?:number;

    } 
    export interface ManageExtraInfo{
     /** 车位号 */
 placeNum?:string;
 /** 姓名 */
 name?:string;
 /** 电话 */
 phone?:string;
 /** 身份证号 */
 idNumber?:string;
 /** 备注 */
 remark?:string;
 /** 员工时长每月 */
 staffMinute?:number;
 /** 员工时长是否继续下月 */
 staffMinuteContinue?:boolean;

    } 
    export interface RuleExtraInfo{
     /** 最大允许在场车数量,0则不限制 */
 maxInsideNum?:number;
 /** 最大保持数量(在场车辆再数内保持收费规则,超出之后算临停),0则不限制 */
 maxKeepNum?:number;
 /** 最大免费数量(比如虽然入场是月租规则,但是出场时如果在场车辆超出这个数,则按后进先出收费),为0则不限制 */
 maxFreeNum?:number;

    } 
    export interface TccSpecialCarDto{
      id?:string;
 /** 多个车库Ids */
 lotIds?:string[];
 /** 1-白名单 2-包月 101-限时免费 */
 chargeType?:number;
 /** 主-车牌号 */
 mainPlateNo?:string;
 /** 主-车牌类型 */
 mainPlateType?:number;
 /** 开始日期 */
 beginDate?:string;
 /** 结束日期 */
 endDate?:string;
 /** 额外车辆信息 */
 extraPlates?:ManageCarInfo[];
  extraInfo?:ManageExtraInfo;
  ruleExtraInfo?:RuleExtraInfo;

    } 
    export interface CycleRoll{
     /** 优先级,越小优先级越高 */
 sort?:number;
 /** 单位时长 */
 unitMin?:number;
 /** 单位金额,单位:分 */
 unitPrice?:number;

    } 
    export interface Lot{
      id?:string;
  orgId?:string;
  exId?:string;
  name?:string;
  lotNum?:string;
  address?:string;
  longitude?:number;
  latitude?:number;
  runningStatus?:MsgType;
  total?:number;
  type?:MsgType;
  extraType?:string;
  patrolId?:string;
  onlineTime?:string;
  offlineTime?:string;
  extraInfo?:LotExtraInfo;
  tccExtra?:TccExtra;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
  factory?:MsgType;

    } 
    export interface LotExtraInfo{
      laborType?:number;
  period?:string;
  payType?:number;
  ticket?:boolean;
  policeName?:string;
  policeCode?:string;

    } 
    export interface PayBp{
     /** 类型,小于0表示全部 */
 type?:number;
 /** 匹配支付来源,小于0表示全部 */
 origin?:number;
 /** 匹配的支付方式,小于0表示全部 */
 mode?:number;
 /** 支付通道ID */
 mchId?:string;

    } 
    export interface Rate2RuleCycle{
     /** 优先级,越小优先级越高 */
 sort?:number;
 /** 免费停车时长(单位:分钟)大于0才有效 */
 freeMin?:number;
 /** 计费周期封顶金额(单位:分)大于0才有效 */
 maxPrice?:number;
 /** 滚动计费 */
 cycleRolls?:CycleRoll[];

    } 
    export interface Rate3RuleCycle{
     /** 优先级,越小优先级越高 */
 sort?:number;
  normal?:Rate3RuleCycleItem;
  discount?:Rate3RuleCycleItem;

    } 
    export interface Rate3RuleCycleItem{
     /** 优先级,越小优先级越高 */
 sort?:number;
 /** 免费停车时长(单位:分钟)大于0才有效 */
 freeMin?:number;
 /** 计费周期封顶金额(单位:分)大于0才有效 */
 maxPrice?:number;
 /** 滚动计费 */
 cycleRolls?:CycleRoll[];

    } 
    export interface TccConfigRange{
     /** 开始时间 */
 begin?:string;
  rate2?:TccRate2;
  rate3?:TccRate3;

    } 
    export interface TccExtra{
     /** 0-红门 1-宜泊车 2-自研 */
 factory?:number;
 /** 车场类型 0-自营 1-第三方 */
 ownership?:number;
 /** 经营类型 0-临时 1-永久 2-私营 3-国有 4-机关 */
 manageType?:number;
  fixedTotal?:number;
 /** 管理方 */
 manager?:string;
 /** 联系人 */
 contactMan?:string;
 /** 联系人电话 */
 contactPhone?:string;
 /** 停车场类型 0-公开 1-私有 */
 type?:number;
 /** 允许重复入场 */
 repeatIn?:boolean;
 /** 包月固定车位数 */
 monthlyFixed?:number;
 /** 黄牌固定车位数 */
 yellowFixed?:number;
 /** 放行类型, 1. 开放式, 2. 不对外 */
 passType?:number;
 /** 支付完成后多少分钟内驶离 */
 paidOutMin?:number;
 /** 僵尸车提醒 */
 timeoutCar?:boolean;
 /** 僵尸车停放天数 */
 timeOutDays?:number;
 /** 员工免费分钟功能开关 */
 staffMinuteEnabled?:boolean;
  parkRate?:TccParkRate;
 /** 支付渠道 */
 payBps?:PayBp[];

    } 
    export interface TccParkRate{
     /** 具体收费 */
 ranges?:TccConfigRange[];
 /** 费用描述 */
 describe?:string;

    } 
    export interface TccRate2{
     /** 不按周期计费,则没有周期概念 */
 noCycle?:boolean;
 /** 固免,表示超过免费停车时间后免费时间是否参与计费 */
 freeMinJoin?:boolean;
 /** 普通车规则 */
 normalCycles?:Rate2RuleCycle[];
 /** 新能源规则-不分大小和混动还是纯电 */
 newEnergyCycles?:Rate2RuleCycle[];

    } 
    export interface TccRate3{
      computeBegin?:string;
  computeEnd?:string;
 /** 固免,表示超过免费停车时间后,计费是否从入场时间开始计费(否则从需要缴费的那个时间点开始计费) */
 freeMinJoin?:boolean;
 /** 普通车规则 */
 normalCycles?:Rate3RuleCycle[];
 /** 新能源规则-不分大小和混动还是纯电 */
 newEnergyCycles?:Rate3RuleCycle[];

    } 
    export interface TccGuestDto{
      id?:string;
  plateNumber?:string;
  lotId?:string;
  plateType?:number;
 /** 车主/单位  */
 remark?:string;
  phone?:string;
 /** 驶入开始时间 */
 beginAt?:string;
 /** 驶入结束时间 */
 endAt?:string;
 /** 是否免费 */
 free?:boolean;

    } 
    export interface CameraExtraInfo{
     /** 内网ip地址 */
 ip?:string;
 /** 内部的 */
 internal?:boolean;
 /** 是否在线 */
 online?:boolean;
 /** 最后上线时间 */
 lastOnlineAt?:string;
 /** 最后下线时间 */
 lastOfflineAt?:string;

    } 
    export interface TccChannelDto{
      id?:string;
  lotId?:string;
  name?:string;
  inlet?:boolean;
 /** 摄像头类型 */
 cameraType?:number;
  cameraNo?:string;
  cameraInfo?:CameraExtraInfo;
  xspInfo?:XspInfo;

    } 
    export interface BlacklistDto{
      id?:string;
  plateNo?:string;
  lotId?:string;
  plateType?:number;
  remark?:string;
 /** 能否进入 */
 canIn?:boolean;
 /** 能否离开 */
 canOut?:boolean;
 /** 能否包月 */
 canMonth?:boolean;

    } 
    export interface UserDto{
     /** 用户ID */
 id?:string;
 /** 用户账号 */
 username?:string;
 /** 用户密码 */
 password?:string;
 /** 用户真实姓名 */
 name?:string;
 /** 性别 1男 2女 */
 sex?:number;
 /** 电话号码 */
 phone?:string;
 /** 身份证号 */
 idCard?:string;
 /** 邮箱 */
 email?:string;
 /** 部门ID */
 depId?:string;
 /** 是否是部门负责人 */
 depLeader?:boolean;
 /** 状态 true正常false停用  默认正常 */
 status?:boolean;
 /** 角色ID数组(非必须) */
 roleIds?:string[];
  tenantId?:string;

    } 
    export interface ResetPassDto{
     /** 用户ID */
 id?:string;
 /** 用户密码 */
 password?:string;

    } 
    export interface SysTenantExtra{
     /** 最大下属点位数量 */
 maxLotNum?:number;
 /** 直接下属点位 */
 lotIds?:string[];
 /** 是否能创建二级商户 */
 createChild?:boolean;

    } 
    export interface TenantDto{
      id?:string;
  orgId?:string;
  name?:string;
  sysUsername?:string;
  password?:string;
  contactName?:string;
  contactPhone?:string;
  status?:boolean;
  roleId?:string;
  remark?:string;
  extraInfo?:SysTenantExtra;

    } 
    export interface LongList{
      empty?:boolean;

    } 
    export interface SysTenantRole{
      id?:string;
  name?:string;
 /** 一级商户权限 */
 firstPermissionIds?:string[];
 /** 二级商户权限 */
 secondPermissionIds?:string[];
  sort?:number;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface RoleDto{
     /** 角色ID */
 id?:string;
 /** 角色名称 */
 roleName?:string;
 /** 权限编码 */
 code?:string;
 /** 状态 true正常 false停用  默认正常 */
 status?:boolean;
 /** 排序 */
 sort?:number;
 /** 所选菜单权限ID集合 */
 menuIds?:string[];

    } 
    export interface UserPasswordDto{
     /** 原始密码 */
 oldPassword?:string;
 /** 新密码 */
 password?:string;
 /** 确认的新密码 */
 confirmPassword?:string;

    } 
    export interface MenuDto{
     /** 权限ID */
 id?:string;
 /** 父级目录或菜单ID */
 parentId?:string;
 /** 权限名称 */
 permissionName?:string;
 /** 图标 */
 icon?:string;
 /** 权限编码 */
 code?:string;
 /** 排序 */
 sort?:number;
 /** 资源类型 1目录 2菜单 3按钮 4单页面  */
 resourceType?:number;
 /** 路由或跳转连接 */
 url?:string;
 /** 是否可见 默认可见 */
 visible?:boolean;
 /** 是否可用 默认可用 */
 status?:boolean;
 /** 1-商户可使用 */
 ownType?:number;

    } 
    export interface DictValueDto{
      id?:string;
 /** 字典类型 */
 type?:string;
 /** 字典标签 */
 label?:string;
 /** 字典值 */
 value?:string;
 /** 是否启用 */
 enabled?:boolean;
 /** 排序 */
 sort?:number;
  remark?:string;

    } 
    export interface DictTypeDto{
      id?:string;
 /** 字典类型 */
 type?:string;
 /** 是否启用 */
 enabled?:boolean;
  remark?:string;

    } 
    export interface DepDto{
     /** 部门ID */
 id?:string;
 /** 部门名称 */
 depName?:string;
 /** 排序 */
 sort?:number;
  orgId?:string;

    } 
    export interface DeviceWorkTagDto{
      id?:string;
  name?:string;
 /** 0-巡查工作，1-技术工作 */
 type?:number;

    } 
    export interface PatrolUserDto{
     /** id */
 id?:string;
 /** 员工编号 */
 jobNum?:string;
 /** 用户真实姓名 */
 name?:string;
 /** 电话号码 */
 phone?:string;
 /** 身份证号 */
 idCard?:string;
 /** 照片文件 */
 file?:string;
 /** 1 地磁 2地锁 10混合 20 pda 50车场巡查 */
 type?:number;
 /** 是否残疾 */
 special?:boolean;

    } 
    export interface StaffResetPasswordDto{
     /** id */
 id?:string;
 /** 密码 */
 password?:string;

    } 
    export interface PatrolRoleDto{
      id?:string;
 /** 角色名称 */
 name?:string;
 /** 角色权限字符串 */
 permissions?:string[];
 /** 序号 */
 sort?:number;
 /** 是否是技术角色 */
 tech?:boolean;

    } 
    export interface SignRuleDto{
      id?:string;
 /** 打卡类型 0固定点 1工作地（工作地找对应地点经纬度） */
 name?:string;
 /** 打卡类型 0固定点 1工作地（工作地找对应地点经纬度） */
 signType?:number;
 /** 固定点打卡地点名称 */
 pointName?:string;
 /** 固定点打卡纬度 */
 lat?:number;
 /** 固定点打卡经度 */
 lng?:number;
 /** 打卡距离 */
 distanceMills?:number;
  workStart?:string;
  workEnd?:string;
 /** 上班打卡限制时常 */
 startLimitHour?:number;
 /** 下班打卡限制时常 */
 endLimitHour?:number;
 /** 是否必须拍照 */
 photo?:boolean;
 /** 是否允许外勤打卡 */
 outside?:boolean;
 /** 用户来源 1PDA 2地磁巡查 3地锁巡查 */
 userSource?:number;

    } 
    export interface MonthlyEventDiscount{
     /** 匹配的月份数 */
 month?:number;
 /** 原始金额 */
 originMoney?:number;
 /** 折扣后金额 */
 discountMoney?:number;

    } 
    export interface MonthlyEventDto{
      id?:string;
  groupId?:string;
 /** 活动名称 */
 title?:string;
 /** 活动说明 */
 remark?:string;
 /** 优先级 */
 sort?:number;
 /** 活动名额 */
 total?:number;
 /** 限购次数 */
 limitBuy?:number;
 /** 开始日期 */
 beginDate?:string;
 /** 结束日期 */
 endDate?:string;
  extraInfo?:MonthlyEventExtraInfo;

    } 
    export interface MonthlyEventExtraInfo{
     /** 包月折扣 */
 monthlyDiscounts?:MonthlyEventDiscount[];

    } 
    export interface EnterpriseUserDto{
      id?:string;
 /** 企业名称 */
 enterpriseName?:string;
 /** 负责人名字 */
 leaderName?:string;
 /** 负责人电话 */
 leaderPhone?:string;
 /** 备注 */
 note?:string;

    } 
    export interface MerchantDto{
      id?:string;
  name?:string;
  merchantUsername?:string;
  password?:string;
  contactName?:string;
  contactPhone?:string;
  status?:boolean;
  remark?:string;
  extraInfo?:MerchantExtra;

    } 
    export interface MerchantExtra{
     /** 最大下属点位数量 */
 maxLotNum?:number;
 /** 直接下属点位 */
 lotIds?:string[];
 /** 是否能创建二级商户 */
 createChild?:boolean;

    } 
    export interface MerchantUserDto{
      id?:string;
  username?:string;
  name?:string;
  idCard?:string;
  phone?:string;
  password?:string;
  merchantId?:string;

    } 
    export interface TopUpDiscountsDto{
     /** 优惠名 */
 name?:string;
 /** 开始优惠时间 */
 beginTime?:string;
 /** 结束优惠时间 */
 endTime?:string;
  maxGainMoney?:number;
  maxGainCount?:number;

    } 
    export interface TopUpDiscountsItemSaveDto{
     /** id,在新增时是主表id,修改时是自己的id */
 id?:string;
 /** 充值的金额,单位元 */
 amount?:number;
 /** 实际到账金额,单位元 */
 actualAmount?:number;

    } 
    export interface Config{
      rate1?:Rate1;
  rate100?:Rate100;

    } 
    export interface CycleItem{
     /** 优先级,越小优先级越高 */
 sort?:number;
 /** 单位时长 */
 unitMin?:number;
 /** 单位金额,单位:分 */
 unitPrice?:number;
 /** 等级时长 */
 levelMin?:number;

    } 
    export interface Rate1{
      looseMin?:boolean;
  normal?:Rate1Rule;
  newEnergy?:Rate1Rule;
  cycleType?:number;

    } 
    export interface Rate100{
     /** 时段配置集合 */
 rules?:Rate3Rule[];

    } 
    export interface Rate1Rule{
      daytime?:Rate1RuleItem;
  night?:Rate1RuleItem;
  maxPrice?:number;

    } 
    export interface Rate1RuleCycle{
      freeMin?:number;
  cycleItems?:CycleItem[];

    } 
    export interface Rate1RuleItem{
      computeBegin?:string;
  computeEnd?:string;
  firstCycle?:Rate1RuleCycle;
  thenCycle?:Rate1RuleCycle;
  maxPrice?:number;
  freeMinJoin?:boolean;

    } 
    export interface Rate3Rule{
      begin?:string;
  end?:string;
 /** 免费时长 */
 freeMin?:number;
 /** 起步价,单位:分 */
 startingPrice?:number;
 /** 起步时长 */
 startingMin?:number;
 /** 单位时长 */
 unitMin?:number;
 /** 单位金额,单位:分 */
 unitPrice?:number;
 /** 最高收费,单位:分 */
 maxPrice?:number;

    } 
    export interface RateRuleDto{
      id?:string;
  name?:string;
  config?:Config;
  describe?:string;

    } 
    export interface PplEditSnDto{
      id?:string;
 /** 设备编号 */
 systemId?:string;
 /** 二维码编号 */
 qrcodeSn?:string;

    } 
    export interface PlaceUpdDto{
     /** 停车位 id */
 id?:string;
 /** 新的编号,只传后二到三位 */
 newNumber?:number;

    } 
    export interface PlaceTransferDto{
     /** 新点位ID */
 newLotId?:string;
 /** 原点位ID */
 oldLotId?:string;
 /** 待转移停车位 */
 placeIds?:string[];

    } 
    export interface PlaceUpdChargeStatusDto{
     /** 收费状态 0地磁收费 1人工收费 2关闭收费 */
 status?:number;
 /** 停车位 id */
 ids?:string[];

    } 
    export interface PlaceUpdBatchDto{
      lotId?:string;
  placeIds?:string[];
 /** 停车位新编号起始位 */
 newBegin?:number;

    } 
    export interface LotDto{
      id?:string;
  orgId?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 lotNum?:string;
 /** 腾讯地图经度 */
 longitude?:number;
 /** 腾讯地图纬度 */
 latitude?:number;
 /** 1 地磁 2地锁 100停车场 */
 type?:number;
 /** （1）无（2）自营（3）志向（4）臻信诚 */
 laborType?:number;
  total?:number;
  tccExtra?:TccExtra;

    } 
    export interface LotSetTicketDto{
     /** 是否开启小票 */
 ticket?:boolean;
  lotId?:string;

    } 
    export interface LotStatusUpdBatchDto{
      lotIds?:string[];
  code?:string;
 /** 将要修改的状态，1-上线，2-下线 3暂停收费 4恢复收费 */
 status?:number;

    } 
    export interface LotSetPoliceDto{
      lotIds?:string[];
  name?:string;

    } 
    export interface LotPeriodDto{
      id?:string;
 /** 周期 */
 period?:string;

    } 
    export interface LotSetPayTypeDto{
     /** 支付类型 1 小程序 2微信 */
 payType?:number;
  lotId?:string;

    } 
    export interface LotSetLotNumDto{
      id?:string;
  laborType?:number;

    } 
    export interface LotGroupDto{
      id?:string;
  name?:string;
 /** 点位组类型  1-免费车 2-巡查 3-车场巡查 4-混合巡查 */
 type?:number;
  lotIds?:string[];

    } 
    export interface GeomEditDto{
      id?:string;
 /** 额外编码 */
 extraSn?:string;

    } 
    export interface FreeCarDto{
      id?:string;
 /** 车牌,可用逗号分隔, 更新不传 */
 plateNumber?:string;
 /** 免费点位组IDs 当非全局免费的时候必传 */
 groupId?:string;
 /** 全局免费,默认false */
 globalFree?:boolean;
 /** 部门 */
 department?:string;
 /** 过期时间 - 不填不过期 */
 endTime?:string;
 /** 白名单类型 */
 freeCarType?:number;
 /** 备注 */
 note?:string;

    } 
    export interface AccountFreeRuleDto{
      id?:string;
 /** 名称 */
 name?:string;
 /** 开始时间 */
 startTime?:string;
 /** 结束时间 */
 endTime?:string;
 /** 原因 */
 reason?:string;

    } 
    export interface BaseIds{
     /** id的数组 */
 ids?:string[];

    } 
    export interface CouponModelDto{
     /** id */
 id?:string;
 /** 名称 */
 name?:string;
 /** 说明 */
 remark?:string;
 /** 优惠类型 */
 type?:number;
  lotId?:string;

    } 
    export interface ChargingShopDto{
      id?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 区域 */
 area?:string;
 /** 地址 */
 address?:string;
 /** 运营商 */
 operator?:string;
 /** 状态 */
 status?:string;

    } 
    export interface ChargingPointDto{
      id?:string;
 /** 充电站ID */
 shopId?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 状态 */
 status?:boolean;

    } 
    export interface ApproveFlowDto{
      id?:string;
  name?:string;
  remark?:string;
 /** 内部使用 */
 internal?:boolean;
  enabled?:boolean;
  extraInfo?:ApproveFlowExtraInfo;

    } 
    export interface ApproveFlowExtraInfo{
     /** 表单数据 */
 data?:ModelItem[];
 /** 表单配置 */
 dataConfig?:string;
 /** 适用范围-选部门 */
 target?:string[];
 /** 审核人员 */
 approve?:ApproveUser[];
 /** 抄送人员 */
 cc?:ApproveUser[];

    } 
    export interface ApproveUser{
      userId?:string;
  userName?:string;
  depName?:string;
  orgName?:string;
  avatar?:string;

    } 
    export interface ModelItem{
      key?:number;
  name?:string;
  type?:string;
  option?:string;
  required?:boolean;
  remark?:string;

    } 
    export interface AdItemChangeDto{
     /** 排期id */
 id?:string;
 /** 标题 */
 title?:string;
 /** 图片点击链接 */
 imageLink?:string;
 /** 有效开始 */
 startAt?:string;
 /** 有效结束 */
 endAt?:string;
 /** 优先级,越大越高 */
 sort?:number;

    } 
    export interface OpenChannelDto{
      channelId?:string;
 /** 理由 */
 reason?:string;
 /** 车牌号 */
 plateNo?:string;

    } 
    export interface InletOpenWaitDto{
      waitId?:string;
 /** 缴费类型,默认临停车 */
 chargeType?:number;
 /** 需要纠正的车牌号 */
 plateNo?:string;
 /** 需要纠正的车牌类型 */
 plateType?:number;
 /** 理由 */
 reason?:string;

    } 
    export interface ExitOnlineWaitDto{
      onlineId?:string;
  channelId?:string;

    } 
    export interface ExitChangeWaitDto{
      waitId?:string;
 /** 需要纠正的车牌号 */
 plateNo?:string;
 /** 需要纠正的车牌类型 */
 plateType?:number;

    } 
    export interface ImportResult{
      success?:number;
  error?:number;

    } 
    export interface TccSpecialCarSearchDto{
     /** 车场id */
 lotIds?:string[];
  plateNumber?:string;
 /** 查询缴费类型，1-白名单，2-包月 3-产权 4-租赁  101-限时免费 */
 chargeType?:number;

    } 
    export interface TccLibRateDto{
      id?:string;
  parkRate?:TccParkRate;

    } 
    export interface ResetLoginPassDto{
     /** 用户名或手机号 */
 username?:string;
 /** 旧密码 */
 password?:string;
 /** 新密码 */
 newPassword?:string;

    } 
    export interface AdminLoginDto{
     /** 用户名或手机号 */
 username?:string;
 /** 密码 */
 password?:string;
 /** 验证码 */
 code?:string;

    } 
    export interface LoginResult{
     /** 登录后的token,后续请求带上Authorization 请求头 */
 token?:string;
 /** 姓名 */
 name?:string;
 /** 登录名 */
 username?:string;
 /** 头像 */
 avatar?:string;
 /** 电话号码 */
 phone?:string;
 /** 创建时间 */
 createdAt?:string;
 /** 部门 */
 depName?:string;
 /** 0-平台账号  1-一级商户  2-二级商户 */
 tenantType?:number;
 /** 用户角色列表 */
 roles?:string[];
 /** 城市 */
 city?:string;
 /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;
 /** 是否激活 */
 active?:boolean;

    } 
    export interface RefundOrderDto{
     /** 数据的ID */
 orderId?:string;
 /** 退款金额,单位分 如200 */
 money?:number;
 /** 备注 */
 remarks?:string;

    } 
    export interface SupportRefundOrderDto{
     /** ID */
 id?:string;
 /** 备注 */
 remarks?:string;
 /** 金额:分,不填则全款退 */
 money?:number;
 /** 退款方式:1-仅退款 2-退款并还原订单 */
 mode?:number;
 /** 验证码 */
 code?:string;

    } 
    export interface RefundMonthDto{
      orderId?:string;
  remarks?:string;

    } 
    export interface CsRefundPayInfoDto{
      transactionId?:string;
 /** 验证码 */
 code?:string;
 /** 1 退款并还原订单 2 仅退款 */
 type?:number;
 /** 退款原因 */
 reason?:string;

    } 
    export interface MergeOrderDto{
     /** 合并模式 1: 当前停车订单和历史订单合并  2: 历史订单合并 默认2  */
 mode?:number;
 /** 最新数据的ID */
 order1Id?:string;
 /** 老数据的ID */
 order2Id?:string;

    } 
    export interface PayOrderAdjustDto{
     /** 订单id */
 id?:string;
 /** 核减金额 */
 amountMoney?:number;
 /** 修正车牌 */
 plateNumber?:string;
 /** 备注 */
 remarks?:string;

    } 
    export interface EndOrderDto{
     /** 停车id */
 onlineId?:string;
 /** 假定出场时间 */
 fakeOutAt?:string;
  remark?:string;

    } 
    export interface SupportDownLockDto{
     /** 地锁编号 */
 deviceSn?:string;
 /** 备注 */
 remarks?:string;

    } 
    export interface SendCouponDto{
     /** 联系电话 */
 phone?:string;
 /** 金额，1-5 */
 money?:number;
 /** 个数，1-5 */
 count?:number;
 /** 过期时间，最多30天 */
 endAt?:string;
 /** 备注 */
 remarks?:string;

    } 
    export interface TimeRangeDate{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;

    } 
    export interface NewEnergyStaDto{
      date?:string;
 /** 是否是本地车牌 */
 localCar?:boolean;
  orderBy?:string;
  localCarPrefix?:string;

    } 
    export interface LotInfoDto{
     /** 点位 */
 lotId?:string;
 /** 规则 */
 accountRuleId?:string;
 /** 设备类型 1-地磁，2-地锁 */
 lotType?:number;

    } 
    export interface GeomStaDtoRange{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位 */
 lotId?:string;
  type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 点位列表 */
 lotIds?:string[];
  placeNum?:string;
  noHeartDay?:number;
  mergeTime?:number;
  redTime?:number;
  orderBy?:string;

    } 
    export interface StaffWorkSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 标签ID */
 tagId?:string;
 /** 上报人姓名 */
 name?:string;
  lotId?:string;
 /** 0-上报，1-处理 */
 type?:number;
 /** 处理状态，0-未处理，1-已处理 */
 status?:number;
 /** 处理结果，0-失败，1-成功 */
 result?:number;

    } 
    export interface PdaPerformanceDownScoreDto{
      lotId?:string;
  level1?:string;
  level2?:string;
  score?:number;
  remarks?:string;

    } 
    export interface PdaPerformanceDetailSearchDto{
     /** 点位ID */
 lotId?:string;
 /** 年月 */
 yearMonth?:string;

    } 
    export interface PdaPerformanceRuleDto{
     /** 规则 */
 rule?:string;

    } 
    export interface PdaPerformanceSearchDto{
     /** 点位列表 */
 lotIds?:string[];
 /** 点位 */
 lotId?:string;
 /** 1地磁 2地锁 3人工 100停车场 */
 type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 部门id */
 orgId?:string;
 /** 年月 */
 yearMonth?:string;
  isExport?:boolean;

    } 
    export interface TimeLocalDate{
      date?:string;

    } 
    export interface TimeDateWithFromTo{
     /** 具体日期 */
 date?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  fromTime?:string;
  toTime?:string;

    } 
    export interface PatrolTrackMapDto{
     /** 人员id */
 id?:string;
 /** 日期,默认当天 */
 date?:string;
  from?:string;
  to?:string;

    } 
    export interface PatrolTrackMapVo{
     /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;

    } 
    export interface PatrolTrackListDto{
     /** 人员id */
 id?:string;
 /** 范围开始 */
 from?:string;
 /** 范围结束 */
 to?:string;

    } 
    export interface PatrolTrackListVo{
     /** 姓名 */
 name?:string;
 /** 初始拍照时间 */
 firstPicTime?:string;
 /** 最后拍照时间 */
 lastPicTime?:string;
 /** 拍照单数 */
 orderNum?:number;
 /** 点位名 */
 address?:string;
  os?:string[];

    } 
    export interface PatrolUserSearchDto{
     /** 姓名-全模糊查询 */
 name?:string;
 /** 工作状态 1在职 0离职 */
 workStatus?:number;
 /** 巡查人员类型 1地磁 2地锁 10多类型 */
 type?:number;
 /** 点位ID */
 lotId?:string;
  version?:string;

    } 
    export interface BindPatrolLot{
     /** 巡查人员ID */
 patrolId?:string;
 /** 点位ID列表 */
 lotIds?:string[];

    } 
    export interface PatrolRoleBindDto{
     /** 巡查人员ID */
 patrolId?:string;
 /** 巡查角色ID */
 roleId?:string;

    } 
    export interface BindPatrolLotGroupDto{
      patrolId?:string;
 /** 为空时清除绑定 */
 groupId?:string;

    } 
    export interface SignStaticsSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 规则ID */
 ruleId?:string;
 /** 姓名 */
 name?:string;
 /** 员工在离职状态 0-离职  1-在职 */
 status?:number;
 /** 导出方式 1全部带图片 2精简不带图片 */
 exportType?:number;

    } 
    export interface BingSignUserDto{
      ruleId?:string;
  userIds?:string[];

    } 
    export interface OnlineSearchDto{
     /** 点位列表 */
 lotIds?:string[];
 /** 点位 */
 lotId?:string;
 /** 1地磁 2地锁 3人工 100停车场 */
 type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 部门id */
 orgId?:string;
  id?:string;
 /** 车牌号-模糊查询-后台自动小写转大写 */
 plateNumber?:string;
 /** 车辆类型 路内全是蓝牌 */
 plateType?:number;
 /** 车位号 */
 placeNum?:string;
 /** 缴费类型 */
 chargeType?:number;
 /** 是否已拍照 */
 isPhotographed?:boolean;
 /** 是否是本地车 */
 isLocalCar?:boolean;
 /** 是否是新能源车 */
 isNewEnergyCar?:boolean;
 /** 超过的停车天数 */
 days?:number;

    } 
    export interface ManualOnlineDto{
      lotId?:string;
  startAt?:string;
  plateNo?:string;
  plateType?:number;

    } 
    export interface OrderSearchDto{
     /** 具体日期 */
 date?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位列表 */
 lotIds?:string[];
 /** 点位 */
 lotId?:string;
 /** 层级id */
 orgId?:string;
 /** 1地磁 2地锁 3人工 100停车场 */
 type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 停车场 true:车场  false:路内 */
 tcc?:boolean;
  id?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号-模糊查询-后台自动小写转大写 */
 plateNumber?:string;
 /** 车辆类型 路内全是蓝牌 */
 plateType?:number;
 /** 支付方式 */
 payMode?:number;
 /** 用户ID */
 appUserId?:string;
 /** 支付用户ID */
 payUserId?:string;
 /** 车辆ID */
 carId?:string;
 /** 应付金额(前端传元) */
 realMoney?:number;
 /** 应付金额最小(前端传元) */
 realMoneyMin?:number;
 /** 应付金额最大(前端传元) */
 realMoneyMax?:number;
 /** 优惠金额(前端传元) */
 discountMoney?:number;
 /** 优惠金额最小(前端传元) */
 discountMoneyMin?:number;
 /** 优惠金额最大(前端传元) */
 discountMoneyMax?:number;
 /** 订单状态 */
 status?:boolean;
 /** 支付开始时间-带时分秒 */
 paidFrom?:string;
 /** 支付结束时间-带时分秒 */
 paidTo?:string;
 /** 是否查询优惠数量-默认不查 */
 searchDiscountCount?:boolean;
 /** 缴费类型 */
 chargeType?:number;
 /** 是否已拍照 */
 isPhotographed?:boolean;
 /** 是否免费时段 */
 isFreeTime?:boolean;
 /** 是否有优惠 */
 isDiscount?:boolean;
 /** 是否是本地车 */
 isLocalCar?:boolean;
 /** 是否是新能源车 */
 isNewEnergyCar?:boolean;
  fromTime?:string;
  toTime?:string;

    } 
    export interface SmsSendDto{
      type?:number;
  phone?:string;
 /** 模板参数 */
 params?:{[key:string]:string};

    } 
    export interface PplWarnSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位ID */
 lotId?:string;
  placeNum?:string;
  systemId?:string;
  msg?:string;

    } 
    export interface PplErrorSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位ID */
 lotId?:string;
  placeNum?:string;
  systemId?:string;
  processUser?:string;
  errorMsg?:string;
  processStatus?:number;

    } 
    export interface DeviceVoltageMsgDto{
      date?:string;
  level?:number;
  processStatus?:boolean;

    } 
    export interface RemoveApplyDto{
      id?:string;
 /** 原因 -1-其它，0-未支付，1-没有包月需求 */
 reason?:number;
 /** 备注 */
 remark?:string;

    } 
    export interface CarMonthlyGroupDto{
      id?:string;
 /** 名称 */
 name?:string;
 /** 月费,单位:分 */
 monthMoneyActual?:MonthlyMoney[];
 /** 是否开放购买 */
 openBuy?:boolean;
 /** 组内最大可容纳车辆数 */
 maxSub?:number;
 /** 生效的停车点 */
 lotIds?:string[];
 /** 备注 */
 remark?:string;

    } 
    export interface MonthlyMoney{
      month?:number;
  money?:number;

    } 
    export interface CarMonthlySearchDto{
     /** 车牌号 */
 plateNo?:string;
 /** 包月组 */
 groupId?:string;
 /** 车主姓名 */
 ownerName?:string;
 /** 车主电话 */
 ownerPhone?:string;

    } 
    export interface CarMonthlyUpdDto{
     /** 车id */
 carId?:string;
 /** 车主姓名 */
 ownerName?:string;
 /** 车主电话 */
 ownerPhone?:string;
 /** 车牌号 */
 plateNo?:string;

    } 
    export interface CarMonthlyPayDto{
     /** 新的结束日期 */
 endDate?:string;
 /** 备注 */
 remark?:string;

    } 
    export interface CarMonthlyAddDto{
     /** 车牌号 */
 plateNo?:string;
 /** 包月组 */
 groups?:CarMonthlyAddGroupItem[];
 /** 车主姓名 */
 ownerName?:string;
 /** 车主电话 */
 ownerPhone?:string;

    } 
    export interface CarMonthlyAddGroupItem{
      groupId?:string;
 /** 立即开通的月份 */
 period?:number;
 /** 开始生效日期 */
 startDate?:string;

    } 
    export interface TopUpSearchDto{
      date?:string;
  appUserId?:string;
  orderBy?:string;

    } 
    export interface CreditsSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  appUserId?:string;
  acquires?:boolean;
  creditsType?:number;
  orderBy?:string;

    } 
    export interface CouponSearchDto{
      from?:string;
  to?:string;
  appUserId?:string;
 /** 1 未使用 2已使用 3已过期 */
 type?:number;
  searchDate?:string;

    } 
    export interface UserTopUp{
      id?:string;
 /** 金额-元 */
 money?:number;

    } 
    export interface AppUsersSearchDto{
      date?:string;
 /** 电话号码,右模糊 */
 phone?:string;
 /** 车牌-不能模糊 */
 plateNo?:string;
 /** 是否认证-不传则查所有 0未认证 1认证 */
 auth?:boolean;
 /** 积分小 */
 creditsFrom?:number;
 /** 积分大 */
 creditsTo?:number;
 /** 充值小 */
 topUpFrom?:number;
 /** 充值大 */
 topUpTo?:number;
 /** 余额小 */
 balanceFrom?:number;
 /** 余额大 */
 balanceTo?:number;
  orderBy?:string;

    } 
    export interface FeedBackDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;

    } 
    export interface EnterpriseUsersSearchDto{
     /** 电话号码,右模糊 */
 phone?:string;

    } 
    export interface CommentRangeSearchDtoCore{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位 */
 lotId?:string;
  type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 点位列表 */
 lotIds?:string[];
  status?:boolean;
  pdaUser?:string;

    } 
    export interface KfLogSearchDto{
     /** 操作类型 1.免单 2.核减 3.修改车牌 */
 actionType?:number;
 /** 处理人姓名 */
 patrolUserName?:string;
 /** 点位 */
 placeNum?:string;
 /** 车牌号-模糊搜索 */
 plateNumber?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;

    } 
    export interface OrderAdjustVo{
      id?:string;
  orderId?:string;
  position?:string;
  plateNumber?:string;
  actionType?:MsgType;
  actionTypeStr?:string;
  placeNum?:string;
  pilotoffAt?:string;
  patrolId?:string;
  patrolUserName?:string;
  patrolUserPhone?:string;
  changeFrom?:string;
  changeTo?:string;
  remarks?:string;
  createdAt?:string;

    } 
    export interface PatrolLogSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 操作人 */
 name?:string;
 /** 操作 */
 operation?:number;

    } 
    export interface LoginLogSearch{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  name?:string;

    } 
    export interface JournalLogSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位ID */
 lotId?:string;
 /** 车位号 */
 placeNum?:string;
 /** 值守人员名称 */
 pdaUserName?:string;
 /** 巡查人员名称 */
 patrolUserName?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 上报类型 */
 reportMsgType?:number;
 /** 是否已处理 */
 hasProcess?:number;

    } 
    export interface InvoiceDto{
     /** 方式一:订单ID */
 orderIds?:string[];
 /** 方式二: 车牌号 通常只用于客服接口开发 */
 plateNumber?:string;
 /** 1个人 2企业 */
 type?:number;
 /** 个人姓名或企业名称 */
 name?:string;
 /** 邮件 */
 email?:string;
 /** 税号 企业的时候必填 */
 taxNum?:string;
 /** 公司地址 */
 companyAddress?:string;
 /** 公司电话 */
 companyPhone?:string;
 /** 银行名称 */
 bankName?:string;
 /** 银行账户 */
 bankAccount?:string;
 /** 备注 */
 remark?:string;
 /** 开票验证码 */
 code?:string;
 /** 开票类型 1路边 2停车场 3路边包月 4停车场包月 默认1 */
 remoteType?:number;
 /** 开具发票种类。81：电子发票（增值税专用发票）82：电子发票（普通发票） */
 invoiceIssueKindCode?:string;
 /** 接口开票-开始日期 */
 from?:string;
 /** 接口开票-截至日期 */
 to?:string;

    } 
    export interface DataItem{
      name?:string;
  value?:string;

    } 
    export interface SubscribeMessageSendDto{
     /** 核心标题 */
 title?:string;
 /** 核心参数项 */
 datas?:DataItem[];
 /** 发送用户电话逗号分隔,如果不指定则发送已订阅所有用户 */
 toUsers?:string;
 /** 跳转连接 */
 page?:string;
 /** 支持 开发 developer,体验trial,正式 formal，默认正式版 */
 state?:string;

    } 
    export interface PplAddDto{
     /** 地锁类型 */
 pplType?:number;
 /** 设备编号 */
 systemId?:string;
 /** 二维码编号 */
 qrcodeSn?:string;
 /** 关联车位-非必须 */
 placeId?:string;

    } 
    export interface PplLog{
      id?:string;
  pplId?:string;
  signType?:MsgType;
  msgTime?:string;
  msgBody?:string;

    } 
    export interface GeomImportDto{
     /** 设备类型 */
 type?:number;

    } 
    export interface PplSearchDto{
     /** 设备识别码-模糊查询 */
 systemId?:string;
 /** 设备类型 */
 type?:number;
 /** 健康状态 true正常 false异常 不传所有 */
 status?:boolean;
 /** 绑定状态 true已绑定 false未绑定 不传所有 */
 bindStatus?:boolean;
 /** 启用状态 true启用 false禁用 不传所有 */
 enabled?:boolean;
 /** 在线状态 true在线 false不在线 不传所有 */
 online?:boolean;
 /** 点位ID */
 lotId?:string;
 /** 车位号-全模糊查询 */
 placeNum?:string;
  periods?:string[];
  orderBy?:string;

    } 
    export interface PlaceSaveDto{
     /** 停车点 ID */
 lotId?:string;
 /** 起始编号,不传的话,无数据新增则为1,有数据新增则累加 */
 beginNum?:number;
 /** 新增数量,不传默认为1 */
 newNum?:number;
 /** 位置 0上 1下 */
 position?:number;

    } 
    export interface PayMchInfo{
      id?:string;
 /** 名称 */
 name?:string;
 /** 类型 枚举 */
 type?:number;
 /** 信息 */
 info?:string;
  remark?:string;
  createdAt?:string;
  updatedAt?:string;

    } 
    export interface LotTreeDto{
      id?:string;
  pid?:string;
 /** 名称 */
 name?:string;
 /** 计费规则ID */
 accRuleId?:string;
 /** 负责人 */
 leaderName?:string;
 /** 负责人电话 */
 leaderPhone?:string;
 /** 审核人ID */
 auditorId?:string;

    } 
    export interface GeomAddDto{
     /** 地磁类型 */
 geomType?:number;
 /** 设备识别码 */
 maintainId?:string;
 /** 额外编码-非必须 */
 extraSn?:string;
 /** 关联车位-非必须 */
 placeId?:string;

    } 
    export interface GeomEnabledDto{
     /** 地磁ids */
 ids?:string[];
 /** 启用禁用 */
 enabled?:boolean;

    } 
    export interface GeomSearchDto{
     /** 设备识别码-模糊查询 */
 maintainId?:string;
 /** 设备类型 */
 type?:number;
 /** 激活状态 0~3 */
 active?:number;
 /** 健康状态 true正常 false异常 不传所有 */
 status?:boolean;
 /** 绑定状态 true已绑定 false未绑定 不传所有 */
 bindStatus?:boolean;
 /** 启用状态 true启用 false禁用 不传所有 */
 enabled?:boolean;
 /** 点位ID */
 lotId?:string;
 /** 车位号-全模糊查询 */
 placeNum?:string;
 /** 搜索最后消息天数 */
 days?:number;
  orderBy?:string;

    } 
    export interface FreeCarsSearchDto{
     /** 车牌号码,右模糊 */
 plateNumber?:string;
 /** 免费类型 */
 freeCarType?:number;
 /** 添加人,全模糊 */
 creator?:string;
 /** 部门,全模糊 */
 department?:string;
 /** 添加日期 */
 createdAt?:string;
 /** 免费范围 */
 globalFree?:boolean;
 /** 免费最小值(不含) */
 freeMin?:number;
 /** 免费最大值 */
 freeMax?:number;
  orderBy?:string;

    } 
    export interface DeviceUnBindDto{
     /** 车位ID */
 placeId?:string;

    } 
    export interface DeviceBindDto{
     /** 车位ID */
 placeId?:string;
 /** 设备ID--地磁ID或地锁ID */
 equipmentId?:string;
 /** 是否开启地磁收费 */
 enableCharge?:boolean;

    } 
    export interface FinancialSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位id */
 lotIds?:string[];
  lotId?:string;
 /** 层级id */
 orgId?:string;
  extraType?:string;

    } 
    export interface OrderIncomeSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位ID列表 */
 lotIds?:string[];
 /** 点位类型 */
 type?:number;
  laborType?:number;
 /** 期数 */
 periods?:string[];
  staffName?:string;

    } 
    export interface TccAnalysisVo{
      id?:string;
  parentId?:string;
  parentName?:string;
  name?:string;
 /** 总收入（应收） */
 income?:number;
 /** 现金 */
 cashPay?:number;
 /** 微信 */
 wechatPay?:number;
 /** 支付宝 */
 aliPay?:number;
 /** 钱包 */
 walletPay?:number;
 /** 总订单数 */
 orderNum?:number;
 /** 有效订单数 */
 effectiveOrderNum?:number;
 /** 车场数 */
 tccNum?:number;
 /** 车位数量 */
 placeNum?:number;
  children?:TccAnalysisVo[];
 /** 周转率 */
 zzRate?:string;

    } 
    export interface RoadsideAnalysisVo{
      id?:string;
  parentId?:string;
  name?:string;
 /** 总收入（应收） */
 income?:number;
 /** 已收 */
 received?:number;
 /** 欠费 */
 arrears?:number;
 /** 前期收缴金额 当日收缴往日欠费金额 */
 takeReceived?:number;
 /** 现金 */
 cashPay?:number;
 /** 微信 */
 wechatPay?:number;
 /** 支付宝 */
 aliPay?:number;
 /** 钱包 */
 walletPay?:number;
 /** 订单数量 */
 orderNum?:number;
 /** 有效订单数量 */
 effectiveOrderNum?:number;
 /** 有效订单拍照数量 */
 effectivePhotoOrderNum?:number;
 /** 收费订单 */
 nonFreeOrderNum?:number;
 /** 订单车位数 */
 orderPlaceNum?:number;
 /** 总车位数 */
 placeNum?:number;
 /** 特牌订单 */
 specialCarOrderNum?:number;
 /** 收费率 - 路内 */
 chargeRate?:string;
 /** 周转率 */
 zzRate?:string;
 /** 拍照率 */
 photographRate?:string;
  children?:RoadsideAnalysisVo[];

    } 
    export interface InvoiceSearch{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  type?:number;
  name?:string;

    } 
    export interface InvoiceVo{
      id?:string;
  money?:number;
  email?:string;
  name?:string;
  type?:number;
  status?:MsgType;
  pdfUrl?:string;
  createdAt?:string;

    } 
    export interface ErrorPayProcessDto{
     /** id */
 id?:string;
 /** 退款金额 */
 refundMoney?:number;
 /** 清理积分,适用于部分退款,为0则不扣积分 */
 cleanCredits?:number;
 /** 处理方式 */
 processType?:number;
 /** 处理描述 */
 processNode?:string;
 /** 使用transaction_id */
 useTransactionId?:boolean;

    } 
    export interface IncomeVo{
     /** 日期 */
 date?:string;
 /** 总收入（应收） */
 income?:number;
 /** 总收入（应收）- 路内 */
 roadsideIncome?:number;
 /** 总收入（应收）- 车场 */
 tccIncome?:number;
 /** 已收 */
 received?:number;
 /** 已收 - 路内 */
 roadsideReceived?:number;
 /** 已收 - 车场 */
 tccReceived?:number;
 /** 欠费 */
 arrears?:number;
 /** 前期收缴金额 当日收缴往日欠费金额 */
 takeReceived?:number;
 /** 前期收缴金额 - 路内 */
 roadsideTakeReceived?:number;
 /** 前期收缴金额 - 车场 */
 tccTakeReceived?:number;
 /** 现金 */
 cashPay?:number;
 /** 微信 */
 wechatPay?:number;
 /** 支付宝 */
 aliPay?:number;
 /** 钱包 */
 walletPay?:number;
 /** 有效订单拍照数量 */
 roadsideEffectivePhotoOrderNum?:number;
 /** 有效订单数量 */
 roadsideEffectiveOrderNum?:number;
 /** 订单数量 */
 orderNum?:number;
 /** 车场订单数量 */
 tccOrderNum?:number;
 /** 路内订单数量 */
 roadsideOrderNum?:number;
 /** 车位数 */
 placeNum?:number;
 /** 车位数 - 路内 */
 roadsidePlaceNum?:number;
 /** 车位数 - 车场 */
 tccPlaceNum?:number;
 /** 车场数 */
 tccNum?:number;
 /** 收费订单 */
 nonFreeOrderNum?:number;
 /** 免时订单 */
 freeTimeOrderNum?:number;
 /** 免车订单 */
 freeCarOrderNum?:number;
 /** 特牌订单 */
 specialCarOrderNum?:number;
 /** 收费率 - 路内 */
 chargeRate?:string;
 /** 周转率 - 路内 */
 roadsideZzRate?:string;
 /** 周转率 - 车场 */
 tccZzRate?:string;
 /** 拍照率 */
 photographRate?:string;
 /** 周转率 */
 zzRate?:string;

    } 
    export interface ArrearsVo{
     /** 日期 */
 date?:string;
 /** 当日欠费金额 */
 money?:number;
 /** 当日欠费订单 */
 orderTotal?:number;
 /** 当日收缴欠费 */
 received?:number;
 /** 当日收缴订单 */
 receivedOrderTotal?:number;
 /** 微信支付 */
 wechatPay?:number;
 /** 支付宝支付 */
 aliPay?:number;

    } 
    export interface TakeReceivedSearchDto{
     /** 日期 */
 date?:string;
  plateNumber?:string;
  staffName?:string;
 /** 点位列表 */
 lotIds?:string[];
 /** 订单id 模糊 */
 orderId?:string;

    } 
    export interface ArrearsReceivedVo{
      id?:string;
 /** 停车点 */
 address?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 驶入时间 */
 startAt?:string;
 /** 驶离时间 */
 endAt?:string;
 /** 缴费时间 */
 payAt?:string;
 /** 原始金额 */
 originalMoney?:number;
 /** 应收金额 */
 realMoney?:number;
 /** 支付方式 */
 mode?:MsgType;
 /** 收缴人员 */
 staffName?:string;

    } 
    export interface CoreLotWithTimeRangeSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位 */
 lotId?:string;
  type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 点位列表 */
 lotIds?:string[];

    } 
    export interface FinancialBatchConfimAccountsDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位ID列表 */
 lotIds?:string[];
  laborType?:number;
  dates?:string[];
  money?:number;

    } 
    export interface SearchCouponRecordDto{
     /** 发券时间-开始日期 */
 createdBeginDate?:string;
 /** 发券时间-结束日期 */
 createdEndDate?:string;
 /** 使用时间-开始日期 */
 usageBeginDate?:string;
 /** 使用时间-结束日期 */
 usageEndDate?:string;
  plateNo?:string;
  merchantName?:string;
 /** 0-减免金额 1-全免 */
 type?:number;
  lotName?:string;
 /** 来源 0-系统 1-客服 2-积分 3-积分 4-新用户 5-拉新 6-商户 1111-双11 1212-双12 */
 origin?:number;

    } 
    export interface CouponIssueDto{
      lotId?:string;
  plateNo?:string;
 /** 模板id */
 modelId?:string;
 /** 优惠券金额 */
 money?:number;
  remark?:string;

    } 
    export interface PrintJsonDto{
      json?:string;

    } 
    export interface CarsSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 车牌号码,右模糊 */
 plateNumber?:string;
 /** 欠费笔数(大于等于) */
 unpaidCountMin?:number;
 /** 欠费笔数(小于等于) */
 unpaidCountMax?:number;
 /** 欠费金额(大于等于）单位分 */
 unpaidMoneyMin?:number;
 /** 欠费金额(小于等于）单位分 */
 unpaidMoneyMax?:number;
 /** 缴费笔数(大于等于) */
 paidCountMin?:number;
 /** 缴费笔数(小于等于) */
 paidCountMax?:number;
 /** 缴费金额(大于等于）单位分 */
 paidMoneyMin?:number;
 /** 缴费金额(小于等于）单位分 */
 paidMoneyMax?:number;
 /** 是否是本地车 */
 isLocalPlate?:boolean;
 /** 是否是注册用户（有手机号） */
 isRegUser?:boolean;
 /** 是否是新能源车 */
 isNewEnergy?:boolean;
  orderBy?:string;

    } 
    export interface CarApplySearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 车牌号码,右模糊 */
 plateNumber?:string;

    } 
    export interface ReleaseApkDto{
     /** 版本号 */
 apkVersion?:string;
 /** 更新内容 */
 releaseNotes?:string;
  url?:string;

    } 
    export interface ApproveDto{
     /** 是否通过审核 */
 pass?:boolean;
 /** 备注 */
 remark?:string;

    } 
    export interface ApproveReportDto{
      flowId?:string;
  phone?:string;
  data?:ReportData[];

    } 
    export interface ReportData{
      key?:number;
 /** 项名 */
 name?:string;
 /** 项类型 */
 type?:string;
 /** 填写的值 */
 value?:string;
  option?:string;

    } 
    export interface AdPositionSearchDto{
     /** 渠道 */
 position?:number;
 /** id */
 id?:string;
 /** 名称 */
 name?:string;
 /** 状态 */
 status?:boolean;

    } 
    export interface AdPosition{
      id?:string;
  name?:string;
  position?:MsgType;
  pagePosition?:string;
  exampleImage?:string;
  wide?:number;
  high?:number;
  status?:boolean;
  lastAt?:string;

    } 
    export interface AdPositionAddDto{
     /** id */
 id?:string;
 /** 名称 */
 name?:string;
 /** 位置 */
 positionInt?:number;
 /** 所在页面 */
 pagePosition?:string;
 /** 宽 */
 wide?:number;
 /** 高 */
 high?:number;
 /** 状态 */
 status?:boolean;

    } 
    export interface AdItemSearchDto{
     /** id */
 id?:string;

    } 
    export interface AdItem{
      id?:string;
  positionId?:string;
  title?:string;
  image?:string;
  imageLink?:string;
  startAt?:string;
  endAt?:string;
  sort?:number;
  createdAt?:string;
  deleted?:boolean;

    } 
    export interface AdItemAddDto{
     /** 广告位id */
 positionId?:string;
 /** 标题 */
 title?:string;
 /** 图片点击链接 */
 imageLink?:string;
 /** 有效开始 */
 startAt?:string;
 /** 有效结束 */
 endAt?:string;
 /** 优先级,越大越高 */
 sort?:number;

    } 
    export interface ChannelOnlineDto{
     /** 车库id */
 lotId?:string;

    } 
    export interface CarChannelVo{
      time?:string;
  plateNumber?:string;
  chargeType?:MsgType;
  realMoney?:number;

    } 
    export interface ChannelOnlineVo{
      id?:string;
  lotId?:string;
  exId?:string;
  name?:string;
  inlet?:boolean;
  qrcode?:string;
  cameraType?:MsgType;
  cameraNo?:string;
  cameraInfo?:CameraExtraInfo;
  xspInfo?:XspInfo;
  createdAt?:string;
 /** 库名 */
 lotName?:string;
 /** 摄像头在线状态 */
 cameraOnline?:boolean;
  wait?:TccChannelWait;
  online?:Order;
  lastSs?:TccChannelSs;
  lastCars?:CarChannelVo[];

    } 
    export interface OcrInfo{
      confidence?:number;
  plateId?:string;
  pic?:string;
  smallPic?:string;
  devAt?:string;

    } 
    export interface Order{
      id?:string;
  carId?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 车牌类型 */
 plateType?:MsgType;
 /** 停车点ID */
 lotId?:string;
 /** 停车点名字 */
 lotName?:string;
 /** 点位类型 */
 lotType?:MsgType;
 /** 点位额外类型 */
 extraType?:string;
 /** 车位号 */
 placeNum?:string;
 /** 开始停车时间 */
 startAt?:string;
 /** 结束停车时间 */
 endAt?:string;
 /** 停车图片 */
 picture?:string;
 /** 原始金额(单位:分) */
 originalMoney?:number;
 /** 目标金额(单位:分) */
 targetMoney?:number;
 /** 实际金额(单位:分) */
 realMoney?:number;
 /** 优惠金额(单位:分) */
 discountMoney?:number;
 /** 支付状态 */
 status?:MsgType;
 /** 支付时间 */
 payAt?:string;
 /** 支付方式 0免费 1活动免费 5现金 6余额 7微信支付 8支付宝  */
 mode?:MsgType;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 结束信息来源 */
 endType?:MsgType;
 /** 缴费类型 */
 chargeType?:MsgType;
 /** 是否评价 null-未评价  true-好评 false-差评 */
 commentStatus?:boolean;
 /** 优惠明细 */
 discounts?:OrderDiscounts[];
 /** 补拍照片 */
 extraPictures?:string[];
 /** 补拍照片 */
 rule?:string;
 /** 设备编号 */
 deviceSn?:string;
 /** 是否是代收欠费 */
 receipt?:boolean;
  duringTimeZh?:string;

    } 
    export interface OrderDiscounts{
     /** 优惠金额 */
 money?:number;
 /** 是否是前置优惠 */
 timely?:boolean;
 /** 优惠方式 */
 mode?:MsgType;

    } 
    export interface TccChannelSs{
      id?:string;
  channelId?:string;
  pic?:string;
  createdAt?:string;

    } 
    export interface TccChannelWait{
      id?:string;
  lotId?:string;
  channelId?:string;
  plateNo?:string;
  plateType?:MsgType;
  ocrInfo?:OcrInfo;
  onlineId?:string;
  remark?:string;
  needPay?:number;
  timeAt?:string;
  createdAt?:string;
  updatedAt?:string;

    } 
    export interface TccWithOnlineChannelVo{
      lotName?:string;
  total?:number;
 /** 在场数量 */
 parking?:number;
 /** 在线通道 */
 onlineChannels?:ChannelOnlineVo[];

    } 
    export interface LastSsDto{
      channelId?:string;
 /** 指定这个时间之后的快照 */
 from?:string;

    } 
    export interface YdpSearchDto{
      lotId?:string;
  ydpId?:string;
  level?:number;

    } 
    export interface YdpVo{
      id?:string;
  name?:string;
  lotNames?:string;
  level?:number;
  url?:string;

    } 
    export interface TccYdp{
      id?:string;
  name?:string;
  level?:number;
  url?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface YdpCardRgplVo{
      lotId?:string;
  lotName?:string;
  cards?:YdpCardVo[];

    } 
    export interface YdpCardVo{
      id?:string;
  ydpId?:string;
  lotId?:string;
  lotName?:string;
  number?:string;
  width?:number;
  height?:number;
  type?:number;

    } 
    export interface TccStationUserSearchDto{
      name?:string;
  lotId?:string;
  workStatus?:number;

    } 
    export interface TccStationUserVo{
      id?:string;
  jobNum?:string;
  name?:string;
  sex?:MsgType;
  age?:number;
  phone?:string;
  avatar?:string;
  workStatus?:MsgType;
  sexStr?:string;
  workStatusStr?:string;
 /** 车场 */
 lotId?:string;
 /** 车场 */
 lotName?:string;

    } 
    export interface TccStationUserAccountsVo{
      id?:string;
  lotName?:string;
  startAt?:string;
  endAt?:string;
  all?:number;
  paid?:number;

    } 
    export interface TccSpecialCarVo{
      id?:string;
  lotId?:string;
 /** 停车场 */
 lotName?:string;
 /** 主-车牌号 */
 mainPlateNo?:string;
 /** 主-车牌类型 */
 mainPlateType?:MsgType;
  staffMinute?:number;
 /** 开始时间 */
 beginDate?:string;
 /** 到期时间 */
 endDate?:string;
 /** 创建时间 */
 createdAt?:string;
  extraInfo?:ManageExtraInfo;
  ruleExtraInfo?:RuleExtraInfo;
 /** 额外车辆信息 */
 extraPlates?:ManageCarInfo[];
 /** 剩余时长 （天） */
 validDays?:number;

    } 
    export interface TccPlateManage{
      id?:string;
  lotId?:string;
  mainPlateNo?:string;
  mainPlateType?:MsgType;
  extraPlates?:ManageCarInfo[];
  ruleExtraInfo?:RuleExtraInfo;
  beginDate?:string;
  endDate?:string;
  extraInfo?:ManageExtraInfo;
  chargeType?:MsgType;
  staffMinute?:number;
  createdAt?:string;
  createdBy?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface TccStaffMinuteLog{
      id?:string;
  plateManageId?:string;
  changeFrom?:number;
  changeTo?:number;
  reason?:string;
  orderId?:string;
  createdAt?:string;

    } 
    export interface TccInfoSearchDto{
      name?:string;
 /** 编号 */
 exId?:string;
 /** 层级id */
 orgId?:string;

    } 
    export interface TccInfoVo{
      id?:string;
  exId?:string;
  name?:string;
  address?:string;
  orgId?:string;
  orgName?:string;
  total?:number;
  createdAt?:string;
  tccExtra?:TccExtra;

    } 
    export interface LibPriceAndMonthVo{
      rate?:TccParkRate;
 /** 包月费用列表 */
 monthlyList?:MonthlyMoney[];
  libName?:string;

    } 
    export interface GuestSearchDto{
      lotId?:string;
  plateNumber?:string;
 /** 0-未驶入 1-驶入 2-驶出 */
 status?:number;
 /** 是否免费 */
 free?:boolean;

    } 
    export interface TccGuestVo{
      id?:string;
  createdAt?:string;
  createdName?:string;
  lotName?:string;
  plateNumber?:string;
  plateType?:MsgType;
 /** 车主/单位  */
 remark?:string;
  phone?:string;
 /** 驶入开始时间 */
 beginAt?:string;
 /** 驶入结束时间 */
 endAt?:string;
 /** 是否免费 */
 free?:boolean;
 /** 0-未驶入 1-已驶入 2-已驶离 */
 status?:number;

    } 
    export interface TccChannelSearchDto{
      lotId?:string;
 /** 车库名字 */
 lotName?:string;
 /** 是否是入口 */
 inlet?:boolean;
 /** 摄像头编号 */
 cameraNo?:string;
 /** 是否有相机 */
 hasCamera?:boolean;

    } 
    export interface ChannelVo{
     /** 通道id */
 id?:string;
 /** 通道名称 */
 name?:string;
  libName?:string;
 /** 通行方向是否是入口 */
 inlet?:boolean;
 /** 二维码 */
 qrcode?:string;
  cameraType?:MsgType;
  cameraNo?:string;
  cameraInfo?:CameraExtraInfo;

    } 
    export interface TccChannel{
      id?:string;
  lotId?:string;
  exId?:string;
  name?:string;
  inlet?:boolean;
  qrcode?:string;
  cameraType?:MsgType;
  cameraNo?:string;
  cameraInfo?:CameraExtraInfo;
  xspInfo?:XspInfo;
  createdAt?:string;

    } 
    export interface WaitCarVo{
     /** 车场 */
 tccName?:string;
 /** 车库 */
 libName?:string;
 /** 通道 */
 channelName?:string;
  plateNo?:string;
  ocrInfo?:OcrInfo;
  timeAt?:string;
  plateType?:MsgType;

    } 
    export interface BlacklistSearchDto{
      lotIds?:string[];
  plateNo?:string;

    } 
    export interface BlacklistVo{
      id?:string;
  lotId?:string;
  lotName?:string;
  plateType?:MsgType;
  plateNo?:string;
  remark?:string;
 /** 能否进入 */
 canIn?:boolean;
 /** 能否离开 */
 canOut?:boolean;
 /** 能否包月 */
 canMonth?:boolean;

    } 
    export interface UserSearchDto{
     /** 部门ID */
 depId?:string;
  orgId?:string;
 /** 用户真实姓名 */
 name?:string;
 /** 电话号码 */
 phone?:string;
 /** 模糊匹配部门名称、用户姓名 */
 searchKey?:string;
 /** 排除租户用户 true-过滤  false/不穿-所有 */
 filterTenant?:boolean;

    } 
    export interface UserVo{
      id?:string;
 /** 用户账号 */
 username?:string;
 /** 用户真实姓名 */
 name?:string;
 /** 电话号码 */
 phone?:string;
 /** 性别 0未填写，1男，2女 */
 sex?:number;
 /** 状态 true正常，false停用 */
 status?:boolean;
 /** 激活状态 true激活，false未激活 */
 active?:boolean;
 /** 部门ID */
 depId?:string;
 /** 部门名称 */
 depName?:string;
  orgId?:string;
 /** 层级 */
 orgName?:string;
 /** 是否是部门负责人 */
 leader?:boolean;
 /** 已有角色，逗号分隔 */
 roles?:string;
 /** 已有停车场，逗号分隔 */
 parks?:string;
 /** 创建时间 */
 createdAt?:string;
  tenantId?:string;
  tenantName?:string;

    } 
    export interface Tree{
      id?:string;
  name?:string;
  status?:boolean;
 /** 点位类型 0-层级 1-地磁 2-地锁 3-人工 100-车场 11-部门 12-sysUser */
 type?:number;
 /** 子节点 */
 children?:Tree[];
  pid?:string;

    } 
    export interface SysRole{
      id?:string;
  roleName?:string;
  code?:string;
  status?:boolean;
  sort?:number;
  tenantId?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface SearchTenantDto{
      name?:string;
  contactName?:string;
 /** 0-一级商户 1-二级商户 */
 type?:number;

    } 
    export interface TenantVo{
      id?:string;
  name?:string;
  parentName?:string;
 /** 层级id */
 orgId?:string;
 /** 层级 */
 orgName?:string;
 /** 点位名 */
 lotNames?:string[];
 /** 总车位数 */
 total?:number;
  sysUsername?:string;
  contactName?:string;
  contactPhone?:string;
  status?:boolean;
  roleId?:string;
  extraInfo?:SysTenantExtra;

    } 
    export interface MerchantDataVo{
      id?:string;
  name?:string;
  contactName?:string;
  contactPhone?:string;
  lotNames?:string[];
  total?:number;
 /** 收入 分 */
 income?:number;
  lotIds?:string[];

    } 
    export interface RoleVo{
      id?:string;
  roleName?:string;
  code?:string;
  status?:boolean;
  sort?:number;
  tenantId?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
  tenantName?:string;

    } 
    export interface PermissionTree{
      id?:string;
 /** 父级菜单ID */
 parentId?:string;
 /** 名称 */
 permissionName?:string;
 /** 地址 */
 url?:string;
 /** 排序号 */
 sort?:number;
 /** 权限字符串 */
 code?:string;
 /** 显示状态 */
 visible?:boolean;
 /** 菜单状态 */
 status?:boolean;
 /** 图标 */
 icon?:string;
 /** 资源类型 1目录 2菜单 3按钮 */
 resourceType?:number;
  ownType?:number;
 /** 子菜单 */
 children?:PermissionTree[];

    } 
    export interface MenuButtons{
      menus?:MenuTree[];
  buttons?:string[];

    } 
    export interface MenuTree{
     /** 名称 */
 name?:string;
 /** 地址 */
 url?:string;
 /** 图标 */
 icon?:string;
 /** 资源类型 1目录 2菜单 4单页面 */
 type?:number;
 /** 子菜单 */
 children?:MenuTree[];

    } 
    export interface SysDictValue{
      id?:string;
  type?:string;
  label?:string;
  value?:string;
  enabled?:boolean;
  sort?:number;
  remark?:string;

    } 
    export interface SysDictType{
      id?:string;
  type?:string;
  enabled?:boolean;
  remark?:string;
  system?:boolean;

    } 
    export interface SysDep{
      id?:string;
  depName?:string;
  sort?:number;
  orgId?:string;
  leaderId?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
  orgName?:string;

    } 
    export interface TransactionPayDto{
      transactionId?:string;

    } 
    export interface MergeOrderSearchDto{
     /** 车牌号-精确查询-后台自动小写转大写 */
 plateNumber?:string;

    } 
    export interface Discount{
      id?:string;
  value?:number;
 /** 优惠券类型 0-金额  1-全免 2-时长 */
 type?:number;
  exclusive?:boolean;
  result?:DiscountResult;

    } 
    export interface DiscountResult{
      couponMoney?:number;
  remainMoney?:number;

    } 
    export interface InOutExtraInfo{
      memberId?:string;
  cardType?:string;
  vehicleType?:string;
  enterSerialNo?:string;
  enterStation?:string;
  enterUserId?:string;
  exitSerialNo?:string;
  exitStation?:string;
  exitUserId?:string;
  exitPic?:string;
  totalAmount?:number;
  paidAmount?:number;
  freeAmount?:number;
  payType?:number;
 /** 入场通道 */
 inChannelId?:string;
 /** 入场时间 */
 inAt?:string;
  inOcrInfo?:OcrInfo;
 /** 出场通道 */
 outChannelId?:string;
 /** 出场时间 */
 outAt?:string;
  outOcrInfo?:OcrInfo;
  payInfo?:TccOnlinePayInfo;
 /** 折扣-未支付前的折扣 */
 discounts?:Discount[];
 /** 手动录入订单 */
 manual?:boolean;

    } 
    export interface PayDetail{
      lotId?:string;
  lotName?:string;
 /** 支付流水号 */
 serialId?:string;
 /** 缴费点,0-通道处,1-场中,2-缴欠费 */
 site?:number;
  range?:RateRange;
 /** 总金额 */
 totalMoney?:number;
 /** 支付金额 */
 payMoney?:number;
 /** 免费金额 */
 freeMoney?:number;
 /** 使用的免费分钟 */
 freeMinutesUsed?:number;
 /** 支付方式 */
 payMode?:number;
 /** 支付时间 */
 payTime?:string;
 /** 优惠信息 */
 discounts?:Discount[];
 /** 详细的计费信息 */
 rateDetails?:RateDetail[];

    } 
    export interface PayOrder{
      id?:string;
  exId?:string;
  carId?:string;
  plateNumber?:string;
  plateType?:MsgType;
  startAt?:string;
  lotId?:string;
  lotName?:string;
  placeId?:string;
  placeNum?:string;
  picture?:string;
  beginType?:MsgType;
  merged?:boolean;
  pdaEndAt?:string;
  chargeType?:MsgType;
  retake?:boolean;
  createdAt?:string;
  extraInfo?:InOutExtraInfo;
  status?:MsgType;
  payAt?:string;
  payOrigin?:MsgType;
  mode?:MsgType;
  originalMoney?:number;
  targetMoney?:number;
  realMoney?:number;
  discountMoney?:number;
  endAt?:string;
  duringTime?:number;
  payUserId?:string;
  endType?:MsgType;
  updatedAt?:string;
  deleted?:boolean;
  address?:string;

    } 
    export interface RateDetail{
      range?:RateRange;
 /** 金额 */
 money?:number;
 /** 是否使用了优惠计费 */
 usedDiscount?:boolean;

    } 
    export interface RateRange{
      from?:string;
  to?:string;

    } 
    export interface TccOnlinePayInfo{
     /** 出场倒计时器 */
 exitTimer?:string;
 /** 具体支付信息 */
 details?:PayDetail[];

    } 
    export interface SupportDownLockOrderDto{
     /** 车位号 */
 placeNum?:string;
 /** 二维码编号 */
 deviceSn?:string;

    } 
    export interface WalkStatistics{
     /** 日期 */
 date?:string;
 /** 总步数 */
 totalStep?:number;
 /** 进入人数 */
 viewPersonCount?:number;
 /** 步数兑换人数 */
 stepPersonCount?:number;
 /** 步数兑换获得金币数量 */
 stepCoin?:number;
 /** 授权人数 */
 authPersonCount?:number;
 /** 授权获得金币数量 */
 authCoin?:number;
 /** 分享人数 */
 sharePersonCount?:number;
 /** 分享获得金币数量 */
 shareCoin?:number;
 /** 兑换积分人数 */
 creditsPersonCount?:number;
 /** 兑换积分消耗金币 */
 creditsCoin?:number;

    } 
    export interface NewEnergyStatistics{
     /** 日期 */
 datet?:string;
 /** 停车次数 */
 parkCount?:number;
 /** 车辆数 */
 carCount?:number;
 /** 金额(元) */
 money?:number;
 /** 新注册数量 */
 newCarCount?:number;
 /** 认证数量 */
 authCount?:number;

    } 
    export interface EnergyLotStatistics{
     /** 点位 */
 lotName?:string;
 /** 停车次数 */
 parkCount?:number;
 /** 车辆数 */
 carCount?:number;
 /** 平均停车时长(小时) */
 avgTime?:number;

    } 
    export interface AtomicDouble{
    
    } 
    export interface DcCarPlate{
      plateNumPrefix?:string;
  num?:string;

    } 
    export interface EnergyCarChart{
      total?:string;
 /** 停车次数 */
 parkNumMap?:{[key:string]:number};
 /** 缴纳 */
 moneyMap?:{[key:string]:AtomicDouble};
 /** 车牌统计 */
 typeMap?:DcCarPlate[];

    } 
    export interface LotInfoVo{
      id?:string;
  lotName?:string;
  ruleName?:string;
 /** 设备类型，0-地磁，1-人工 */
 lotType?:MsgType;
  lotTypeStr?:string;
 /** 总车位数 */
 total?:number;
 /** 有效车位数 */
 effective?:number;

    } 
    export interface GeomStatistics{
     /** id */
 id?:string;
 /** 车位 */
 placeNum?:string;
 /** 点位 */
 address?:string;
 /** 设备识别码 */
 maintainId?:string;
 /** 最后心跳时间 */
 lastHeart?:string;
 /** 合并次数 */
 mergeTime?:number;
 /** 无车显红次数 */
 redTime?:number;

    } 
    export interface CreditsStatistics{
     /** 日期 */
 date?:string;
 /** 总获取 */
 acquired?:number;
 /** 总消耗 */
 used?:number;
 /** 充值 */
 topUp?:number;
 /** 支付订单 */
 orderPay?:number;
 /** 认证车辆 */
 authCar?:number;
 /** 签到 */
 sign?:number;
 /** 连续签到 */
 keepSign?:number;
 /** 评价订单 */
 orderComment?:number;
 /** 步数兑换 */
 step?:number;
 /** 积分消耗 */
 costNum?:number;
 /** 退款扣除 */
 refund?:number;
 /** 商城购物 */
 youzan?:number;

    } 
    export interface WorkIndexRecord{
      id?:string;
  name?:string;
  lotName?:string;
  placeNum?:string;
  deviceSn?:string;
  tags?:string;
  urls?:string[];
  createdAt?:string;
 /** 0-上报，1-处理 */
 type?:number;
 /** 处理状态，0-未处理，1-已处理 */
 status?:number;
 /** 处理结果，0-失败，1-成功 */
 result?:number;
  remark?:string;

    } 
    export interface WorkIndexTag{
      name?:string;
  total?:number;

    } 
    export interface WorkRecordReport{
      lotName?:string;
  placeNum?:string;
  tagNames?:string;
 /** 处理状态，0-未处理，1-已处理 */
 status?:number;
  name?:string;
  createdAt?:string;
 /** 处理记录 */
 detailList?:WorkRecordReportDetail[];

    } 
    export interface WorkRecordReportDetail{
      createdAt?:string;
  processId?:string;
  processUser?:string;
  processPhone?:string;
  pictures?:string[];
  remark?:string;
 /** 处理结果，0-失败，1-成功 */
 status?:number;
  detailId?:string;

    } 
    export interface DeviceWorkTag{
      id?:string;
  name?:string;
  system?:boolean;
  type?:number;
  createdAt?:string;
  deleted?:boolean;

    } 
    export interface PdaPerformanceVo{
      id?:string;
  lotId?:string;
  laborType?:MsgType;
 /** 值守街道 */
 address?:string;
 /** 收费员 */
 name?:string;
 /** 应收 */
 income?:number;
 /** 已收 */
 received?:number;
 /** 代收 */
 takeReceived?:number;
 /** 电子收费 */
 onlineReceived?:number;
 /** 周转率 */
 zzRate?:number;
 /** 补贴基数 */
 allowanceBase?:number;
 /** 总车位数 */
 totalPlace?:number;
 /** 车位补贴 */
 allowance?:number;
 /** 收费率 */
 chargeRate?:string;
 /** 电子收费率 */
 onlineChargeRate?:string;
 /** 拍照率 */
 photoRate?:string;
 /** 绩效总分 */
 chargeScore?:number;
 /** 拍照率(得分) */
 photoScore?:number;
 /** 投诉 */
 complaintScore?:number;
 /** 行为规范(得分) */
 behaviourScore?:number;
 /** 自身安全(得分) */
 safeScore?:number;
 /** 分数 */
 score?:number;

    } 
    export interface PdaPerformanceScoreVo{
      id?:string;
  score?:number;
  chargeScore?:number;
  photoScore?:number;
  complaintScore?:number;
  complaintCount?:number;
  behaviourScore?:number;
  behaviourCount?:number;
  safeScore?:number;
  safeCount?:number;
  otherScore?:number;
  otherCount?:number;

    } 
    export interface PdaPerformanceScoreItemVo{
      id?:string;
  level1?:string;
  level2?:string;
  score?:number;
  operator?:string;
  url?:string;
  remarks?:string;
  createdAt?:string;

    } 
    export interface PdaPerformanceItemVo{
      id?:string;
 /** 收费员姓名 */
 pdaUserName?:string;
 /** 日期 */
 date?:string;
  income?:number;
  received?:number;
  takeReceived?:number;
  onlineReceived?:number;
  arrears?:number;
  zzRate?:number;
  allowance?:number;
  chargeRate?:string;
  onlineChargeRate?:string;
  photoRate?:string;

    } 
    export interface PatrolUserResult{
      id?:string;
  jobNum?:string;
  name?:string;
  sex?:MsgType;
  age?:number;
  phone?:string;
  avatar?:string;
  workStatus?:MsgType;
  lotGroupName?:string;
  lotGroupId?:string;
  lotNum?:number;
  manageNum?:number;
  type?:MsgType;
  role?:string;
 /** 版本号 */
 version?:string;
 /** 设备号 */
 imei?:string;
 /** 支付类型 1小程序 2原生微信 */
 payType?:number;
 /** 是否开启小票 */
 ticket?:boolean;
 /** 是否是残疾人 */
 special?:boolean;
  sexStr?:string;
  workStatusStr?:string;
  typeStr?:string;
 /** 值守绑定的点位 */
 lotId?:string;
 /** 值守绑定的点位 */
 lotName?:string;

    } 
    export interface PdaUserAllDayInfo{
     /** 停车点名称 */
 lotName?:string;
 /** 总应收入 */
 generalIncome?:number;
 /** 总实收入 */
 received?:number;

    } 
    export interface PatrolLots{
      lotName?:string;
  pdaUserName?:string;
  pdaUserPhone?:string;
  total?:number;

    } 
    export interface StaffLoginRecordDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 用户ID */
 userId?:string;

    } 
    export interface StaffLoginRecord{
      imei?:string;
  version?:string;
  createdAt?:string;

    } 
    export interface PdaHistorySearchDto{
     /** 值守人员ID */
 pdaUserId?:string;

    } 
    export interface PdaUserAccountsRecordVo{
     /** 日期 */
 accountsDate?:string;
 /** 停车点名称 */
 lotName?:string;
 /** 应收金额,单位分 */
 generalIncome?:number;
 /** 实收金额(累计待交账),单位分 */
 received?:number;

    } 
    export interface StaffChartVo{
     /** 0-未填写，1-男，2-女 */
 genderMap?:{[key:string]:number};
 /** 0-50岁以下，1-50岁以上 */
 ageMap?:{[key:string]:number};
 /** 0-离职，1-在职 */
 statusMap?:{[key:string]:number};

    } 
    export interface PatrolRole{
      id?:string;
  name?:string;
  permissions?:string[];
  sort?:number;
  createdAt?:string;
  updatedAt?:string;

    } 
    export interface SignRecordVo{
      id?:string;
  userId?:string;
  username?:string;
  ruleId?:string;
  ruleName?:string;
  signDate?:string;
  inLotId?:string;
  inAddress?:string;
  inAt?:string;
  inLat?:number;
  inLng?:number;
  inStatus?:boolean;
  inWq?:boolean;
  inResult?:string;
  inReason?:string;
  inUrl?:string;
  outLotId?:string;
  outAddress?:string;
  outAt?:string;
  outLat?:number;
  outLng?:number;
  outStatus?:boolean;
  outWq?:boolean;
  outResult?:string;
  outReason?:string;
  outUrl?:string;
  createdAt?:string;
  updatedAt?:string;
  workStatus?:MsgType;

    } 
    export interface SignRuleVo{
      id?:string;
  name?:string;
  signType?:number;
  lat?:number;
  lng?:number;
  distanceMills?:number;
  workStart?:string;
  workEnd?:string;
  startLimitHour?:number;
  endLimitHour?:number;
  photo?:boolean;
  outside?:boolean;
  total?:number;
  userSource?:number;

    } 
    export interface SignUserItem{
      id?:string;
  name?:string;
 /** 0 未绑定 1已绑定当前规则 -1 已绑定其他点位（禁用） */
 status?:number;

    } 
    export interface SignChartVo{
     /** 地锁 0-正常，1-迟到,2-早退 */
 pplMap?:{[key:string]:number};
 /** 地磁 0-正常，1-迟到,2-早退 */
 patrolMap?:{[key:string]:number};
 /** 值守 0-正常，1-迟到,2-早退 */
 pdaMap?:{[key:string]:number};

    } 
    export interface ParkingCar{
      id?:string;
  exId?:string;
  carId?:string;
  plateNumber?:string;
  plateType?:MsgType;
  startAt?:string;
  lotId?:string;
  lotName?:string;
  placeId?:string;
  placeNum?:string;
  picture?:string;
  beginType?:MsgType;
  merged?:boolean;
  pdaEndAt?:string;
  chargeType?:MsgType;
  retake?:boolean;
  createdAt?:string;
  extraInfo?:InOutExtraInfo;
  address?:string;

    } 
    export interface OnlineChartVo{
      total?:number;
  lotNameMap?:{[key:string]:string};
  sumMap?:{[key:string]:number};
  timeMap?:{[key:string]:number};

    } 
    export interface HistoryChartVo{
     /** 总订单数 */
 total?:number;
 /** 总停车时长,分钟数 */
 parkTime?:number;
  timeMap?:{[key:string]:number};
  payCountMap?:{[key:string]:string};
  payTypeMap?:{[key:string]:string};
  plateTypeMap?:{[key:string]:string};
  plateCountMap?:{[key:string]:string};

    } 
    export interface SysNoticeSearchDto{
     /** 是否已读 */
 read?:boolean;
 /** 类型 1-流程审批 2-设备异常 */
 type?:number;

    } 
    export interface SysNotice{
      id?:string;
  createdAt?:string;
 /** 消息类型 */
 type?:MsgType;
 /** 触发对象id */
 eventId?:string;
 /** 消息内容 */
 msg?:string;
 /** 接受人员 */
 userId?:string;
 /** 是否已读 */
 read?:boolean;

    } 
    export interface NoticeRecordContent{
     /** 实际发送的内容 */
 content?:string;
 /** 短信参数 */
 params?:{[key:string]:string};

    } 
    export interface SmsNoticeVo{
      id?:string;
  createdName?:string;
  createdAt?:string;
  type?:MsgType;
  phone?:string;
  content?:NoticeRecordContent;

    } 
    export interface PplWarnVo{
      id?:string;
 /** 停车点 */
 address?:string;
 /** 车位编号 */
 placeNum?:string;
 /** 设备编号 */
 deviceSn?:string;
 /** 告警内容 */
 msg?:string;
 /** 告警时间 */
 createdAt?:string;

    } 
    export interface PplErrorMsgVo{
      id?:string;
  address?:string;
  placeNum?:string;
  systemId?:string;
  errorMsg?:string;
  processStatus?:MsgType;
  processUser?:string;
  checkUser?:string;
  checkerAt?:string;
  processAt?:string;
  processResult?:string;
  url?:string;
  wrong?:boolean;
  createdAt?:string;
  lastMsgAt?:string;
  updatedAt?:string;

    } 
    export interface DeviceVoltageMsg{
      id?:string;
  lotId?:string;
  lotName?:string;
  placeId?:string;
  placeNum?:string;
  deviceId?:string;
  deviceSn?:string;
  voltage?:number;
  level?:number;
  processId?:string;
  processUser?:string;
  processStatus?:boolean;
  processAt?:string;
  url?:string;
  createdAt?:string;

    } 
    export interface DeviceVoltageMsgStatics{
     /** 日期 */
 date?:string;
 /** 告警锁数 */
 gjss?:number;
 /** 换电锁数 */
 hdss?:number;
 /** 自愈锁数 */
 zyss?:number;
 /** 换电率 */
 hdl?:string;
 /** 需换电率 */
 xhdl?:string;

    } 
    export interface MonthlyCarGroup{
      id?:string;
  name?:string;
  monthMoneyActual?:MonthlyMoney[];
  openBuy?:boolean;
  maxSub?:number;
  lotIds?:string[];
  remark?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
  tcc?:boolean;

    } 
    export interface CarMonthlyPaySearchDto{
     /** 组id */
 groupId?:string;

    } 
    export interface CarMonthlyPaySta{
     /** 日期 */
 date?:string;
 /** 金额,单位:分 */
 moneyNum?:number;
 /** 车辆数量 */
 carCount?:number;
 /** 包月数量 */
 count?:number;
 /** 停车场车辆数量 */
 tccCarCount?:number;
 /** 停车场包月数量 */
 tccCount?:number;
 /** 退款金额,单位:分 */
 refundMoney?:number;
 /** 退款次数 */
 refundCount?:number;

    } 
    export interface CarMonthlyOrderSearchDto{
      date?:string;
  plateNo?:string;
 /** 点位id */
 lotId?:string;

    } 
    export interface MonthlyOrderVo{
      id?:string;
 /** 车牌号 */
 plateNo?:string;
 /** 车主姓名 */
 ownerName?:string;
 /** 车主电话 */
 ownerPhone?:string;
 /** 组名 */
 groupName?:string;
 /** 包含得点位 */
 lotNames?:string[];
  payTime?:string;
 /** 包月天数 */
 days?:number;
 /** 支付金额 分 */
 moneyNum?:number;
 /** 包月前结束时间 */
 oldEndTime?:string;
 /** 包月后结束时间 */
 newEndTime?:string;
 /** 0-手动录入 1-可退款 2-已退款 3-已过期 */
 status?:number;
 /** 退款时间 */
 refundTime?:string;
 /** 退款金额 */
 refundMoney?:number;
 /** 退款备注 */
 refundRemark?:string;
 /** 添加人 */
 creatorName?:string;
  createdAt?:string;

    } 
    export interface CarMonthlyGroupSearchDto{
      lotId?:string;
  name?:string;
 /** 是否包含停车场 */
 tcc?:boolean;
 /** 排除该车辆所在的包月组 */
 carId?:string;

    } 
    export interface CarMonthlyGroupVo{
      id?:string;
 /** 名称 */
 name?:string;
 /** 月费,单位:分 */
 monthMoney?:number;
 /** 月费,单位:分 */
 monthMoneyActual?:MonthlyMoney[];
  discountBeginDate?:string;
  discountEndDate?:string;
 /** 是否开放购买 */
 openBuy?:boolean;
 /** 组内最大可容纳车辆数 */
 maxSub?:number;
 /** 生效的点位ID */
 lotIds?:string[];
 /** 生效的停车点 */
 lots?:string[];
 /** 备注 */
 remark?:string;
 /** 添加时间 */
 createdAt?:string;
 /** 包含停车场 */
 tcc?:boolean;

    } 
    export interface MonthlyEventSearchDto{
     /** 活动名称 */
 title?:string;
 /** 0-进行中 1-未开始  2-已过期 */
 type?:number;

    } 
    export interface MonthlyEventVo{
      id?:string;
 /** 包月组名 */
 groupName?:string;
  title?:string;
  remark?:string;
 /** 活动总名额 */
 total?:number;
 /** 每个人限制购买次数 */
 limitBuy?:number;
 /** 已经购买的数量 */
 used?:number;
  beginDate?:string;
  endDate?:string;
 /** 启禁用 */
 enabled?:boolean;
  sort?:number;
  extraInfo?:MonthlyEventExtraInfo;
 /** 是否是车场 */
 tcc?:boolean;
 /** 剩余可用数量 */
 available?:number;
 /** 0-未开始 1-进行中 2-已结束 */
 type?:number;

    } 
    export interface CarMonthlyGroupInfo{
     /** 包月id */
 carMonthlyId?:string;
 /** 组id */
 groupId?:string;
 /** 组名 */
 groupName?:string;
 /** 是否生效中 */
 active?:boolean;
 /** 添加人id */
 sysUserId?:string;
 /** 添加人名 */
 sysUserName?:string;
 /** 添加时间 */
 createdAt?:string;
 /** 修改时间 */
 updatedAt?:string;
 /** 开始日 */
 startDate?:string;
 /** 到期日 */
 endDate?:string;
 /** 0-包月中 1-已到期 2-已暂停 3-未缴费 */
 status?:number;

    } 
    export interface CarMonthlyVo{
     /** 车辆id */
 carId?:string;
 /** 车牌号 */
 plateNo?:string;
 /** 累计金额 */
 accMoney?:number;
 /** 车主姓名 */
 ownerName?:string;
 /** 车主电话 */
 ownerPhone?:string;
 /** 分组信息 */
 groupInfos?:CarMonthlyGroupInfo[];

    } 
    export interface CarMonthlyPayLogVo{
     /** 老开始日期 */
 oldStartDate?:string;
 /** 老结束日期 */
 oldEndDate?:string;
 /** 新开始日期 */
 newStartDate?:string;
 /** 新结束日期 */
 newEndDate?:string;
 /** 金额,单位:分 */
 moneyNum?:number;
 /** 车辆数量 */
 payMode?:MsgType;
 /** 续费日期 */
 createdAt?:string;
 /** 分组id */
 groupId?:string;
 /** 分组名 */
 groupName?:string;
 /** 操作人 */
 createdUser?:string;
 /** 备注 */
 remark?:string;
  payType?:string;

    } 
    export interface MonthlyApplySearchDto{
     /** 0-申请列表，1-移除列表 */
 status?:number;
  groupId?:string;

    } 
    export interface MonthlyApplyVo{
      id?:string;
 /** 姓名 */
 ownerName?:string;
 /** 包月组名称 */
 groupName?:string;
  lots?:string[];
 /** 车牌 */
 plateNo?:string;
 /** 颜色 */
 color?:string;
 /** 联系电话 */
 ownerPhone?:string;
 /** 地址 */
 ownerAddress?:string;
 /** 申请时间 */
 createdAt?:string;
 /** 申请状态 */
 status?:MsgType;
 /** 移除原因 */
 reason?:MsgType;
 /** 备注 */
 remark?:string;
  lotIds?:string[];

    } 
    export interface UserInfoVo{
     /** id */
 id?:string;
 /** 电话 */
 phone?:string;
 /** 绑定数量 */
 bindCarCount?:number;
 /** 认证数量 */
 carOwnerCount?:number;
 /** 钱包余额 */
 remainingSum?:number;
 /** 充值金额 */
 topUpSum?:number;
 /** 实际到账金额 */
 topUpActual?:number;
 /** 积分余额 */
 creditsSum?:number;
 /** 优惠券余额 */
 discountSum?:number;
 /** 欠费笔数 */
 unpaidNum?:number;
 /** 注册日期 */
 createdAt?:string;
 /** 车牌号 */
 plateNumber?:string;

    } 
    export interface UserTopUpVo{
     /**  充值金额,单位:分 */
 topUpNum?:number;
 /**  实际到账金额,单位:分 */
 actualAccount?:number;
 /** 充值时间 */
 createdAt?:string;

    } 
    export interface CreditsVo{
     /** 积分类别 */
 creditsType?:MsgType;
 /** 获取/消费 */
 acquires?:boolean;
 /** 积分数量 */
 creditsSum?:number;
  createdAt?:string;

    } 
    export interface CouponVo{
     /** 用户电话 */
 phone?:string;
 /** 优惠劵金额 */
 money?:number;
 /** 优惠劵来源 */
 origin?:MsgType;
 /** 有效状态 */
 actively?:boolean;
 /** 门槛金额 */
 thresholdAmount?:number;
 /** 过期时间 */
 endDate?:string;
 /** 使用时间 */
 usageTime?:string;
 /** 创建时间 */
 createdAt?:string;
 /** 关联订单ID */
 orderId?:string;

    } 
    export interface UserVehicleLicenseVO{
      id?:string;
 /** 号牌号码 */
 plateNo?:string;
 /** 行驶证照片 */
 licenseImage?:string;
 /** 车辆类型 */
 vehicleType?:string;
 /** 所有人 */
 owner?:string;
 /** 住址 */
 address?:string;
 /** 使用性质 */
 useCharacter?:string;
 /** 品牌类型 */
 model?:string;
 /** 车辆识别代号 */
 vin?:string;
 /** 发动机号码 */
 engineNo?:string;
 /** 注册日期 */
 registerDate?:string;
 /** 发证日期 */
 issueDate?:string;

    } 
    export interface UserChartVo{
     /** 用户总数 */
 userTotal?:string;
 /** 钱包总余额 元 */
 moneyTotal?:string;
 /** 近6月新增用户统计 */
 lastSixMonthUserMap?:{[key:string]:number};
 /** 绑定车牌用户 0:1-2个 1:3-4个 2:大于等于5个 */
 userMap?:{[key:string]:number};
 /** 停车次数统计 0:0～10次 1:11～20次 2:21～30次 3:30～50次 4:50次以上 */
 parkMap?:{[key:string]:number};

    } 
    export interface AnalysisDto{
      beginDate?:string;
  endDate?:string;

    } 
    export interface WxMaVisitTrend{
      refDate?:string;
  sessionCnt?:string;
  visitPv?:string;
  visitUv?:string;
  visitUvNew?:string;
  stayTimeUv?:number;
  stayTimeSession?:number;
  visitDepth?:number;

    } 
    export interface WxMaRetainInfo{
      refDate?:string;
  visitUvNew?:{[key:string]:number};
  visitUv?:{[key:string]:number};

    } 
    export interface AnalysisSingleDto{
      date?:string;

    } 
    export interface WxMaVisitPage{
      pagePath?:string;
  pageVisitPv?:string;
  pageVisitUv?:string;
  pageStayTimePv?:number;
  entryPagePv?:string;
  exitPagePv?:string;
  pageSharePv?:string;
  pageShareUv?:string;

    } 
    export interface WxMaVisitDistribution{
      refDate?:string;
  list?:{[key:string]:{[key:string]:number}};

    } 
    export interface UserStatisticVo{
      total?:string;
  newUserDay?:{[key:string]:number};
  newUserWeek?:{[key:string]:number};
  newUserMonth?:{[key:string]:number};
  activeUserDay?:{[key:string]:number};
  activeUserWeek?:{[key:string]:number};
  activeUserMonth?:{[key:string]:number};

    } 
    export interface Item{
      province?:{[key:string]:string};
  city?:{[key:string]:string};
  genders?:{[key:string]:string};
  platforms?:{[key:string]:string};
  devices?:{[key:string]:string};
  ages?:{[key:string]:string};

    } 
    export interface WxMaUserPortrait{
      refDate?:string;
  visitUvNew?:Item;
  visitUv?:Item;

    } 
    export interface UserCountVo{
      value?:number;
  dateTime?:string;

    } 
    export interface WxMaSummaryTrend{
      refDate?:string;
  visitTotal?:string;
  sharePv?:string;
  shareUv?:string;

    } 
    export interface FeedBackVo{
      id?:string;
 /** 反馈用户 */
 phone?:string;
 /** 反馈内容 */
 content?:string;
 /** 反馈图片 */
 url?:string;
 /** 创建时间 */
 createdAt?:string;

    } 
    export interface EnterpriseUserVo{
     /** 企业名称 */
 enterpriseName?:string;
 /** 负责人名字 */
 leaderName?:string;
 /** 负责人电话 */
 leaderPhone?:string;
 /** 备注 */
 note?:string;
 /** 创建时间 */
 createdAt?:string;

    } 
    export interface CommentVo{
      orderId?:string;
 /** 车主 */
 phone?:string;
 /** 停车点 */
 address?:string;
 /** 收费员 */
 pdaUser?:string;
 /** 评价 true 好评 false 差评 */
 type?:boolean;
 /** 评价内容 */
 contents?:string[];
 /** 补充 */
 supplement?:string;
 /** 评价时间 */
 createdAt?:string;

    } 
    export interface CommentChartVo{
     /** 评价总数 0-好评，1-差评 */
 totalMap?:{[key:string]:number};
 /** 差评统计 */
 badMap?:{[key:string]:number};
 /** 好评统计 */
 goodMap?:{[key:string]:number};
 /** 好评排行 */
 goodRank?:LotCommentRank[];
 /** 差评排行 */
 badRank?:LotCommentRank[];

    } 
    export interface LotCommentRank{
      lotName?:string;
  count?:number;

    } 
    export interface MerchantSearchDto{
      name?:string;

    } 
    export interface MerchantVo{
      id?:string;
  name?:string;
  merchantUsername?:string;
  contactName?:string;
  contactPhone?:string;
  status?:boolean;
  extraInfo?:MerchantExtra;
  lotNames?:string[];
  total?:number;

    } 
    export interface MerchantUserSearchDto{
      name?:string;
  merchantId?:string;

    } 
    export interface MerchantUserVo{
      id?:string;
  username?:string;
  phone?:string;
  name?:string;
 /** 状态 */
 status?:boolean;
  active?:boolean;
 /** 所属商户 */
 merchantName?:string;
  merchantId?:string;

    } 
    export interface MerchantDataSearchDto{
      name?:string;
  contactName?:string;
  contactPhone?:string;
  lotId?:string;

    } 
    export interface MapLot{
      id?:string;
 /** 停车点名称 */
 lotName?:string;
 /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;
 /** 总数 */
 total?:number;
 /** 正在使用 */
 used?:number;
 /** 点位类型 */
 type?:MsgType;
 /** 停车场类型 */
 tccType?:MsgType;
 /** 是否有巡查工作 */
 patrolWork?:boolean;
 /** 员工名 */
 staffName?:string;
 /** 角色名 */
 role?:string;

    } 
    export interface MapLotPlace{
     /** 点位ID */
 id?:string;
  name?:string;
  type?:MsgType;
 /** 详细地址 */
 address?:string;
 /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;
 /** 总数 */
 total?:number;
 /** 正在使用 */
 used?:number;
 /** 每一个车位当前信息 */
 places?:MapPlace[];
 /** 收费规则名称 */
 ruleName?:string;
 /** 巡查操作记录 */
 patrolLog?:MapPatrolLogVo[];
  tccExtra?:TccExtra;

    } 
    export interface MapPatrolLogVo{
     /** 姓名 */
 name?:string;
 /** 电话 */
 phone?:string;
 /** 角色 */
 roleName?:string;
 /** 操作 */
 operation?:MsgType;
 /** 操作时间 */
 createdAt?:string;

    } 
    export interface MapPlace{
     /** 车位ID */
 id?:string;
 /** 车位号 */
 placeNum?:string;
 /** 使用状态 */
 status?:boolean;
 /** 车辆ID */
 carId?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 开始时间 */
 startAt?:string;
 /** 费用 */
 money?:number;
 /** 停车次数 */
 times?:number;

    } 
    export interface SearchLotDto{
     /** 点位类型 0-地磁 1-地锁  2-人工 3-停车场 */
 type?:number;

    } 
    export interface LotUsedResult{
      lotId?:string;
  used?:number;

    } 
    export interface SystemLogSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  name?:string;
  phone?:string;

    } 
    export interface SysTopUpLog{
      id?:string;
  name?:string;
  ip?:string;
  phone?:string;
  money?:number;
  createdAt?:string;

    } 
    export interface SysLogVo{
      id?:string;
 /** IP地址 */
 ip?:string;
 /** 操作 */
 operation?:string;
 /** 执行方法 */
 method?:string;
 /** 耗费时间/毫秒 */
 costTime?:number;
 /** 操作参数 */
 paramJson?:string;
 /** 操作人 */
 createdUser?:string;
 /** 创建时间 */
 createdAt?:string;

    } 
    export interface LogChartVo{
     /** 类型统计 */
 typeMap?:{[key:string]:number};
 /** 数量统计 最近30天 */
 numMap?:{[key:string]:number};
 /** 状态统计 -1-驳回,0-未处理 1-已处理,2-过期 */
 statusMap?:{[key:string]:number};

    } 
    export interface PatrolLogVo{
      id?:string;
  pplId?:string;
  operation?:MsgType;
  position?:string;
  deviceSn?:string;
  plateNumber?:string;
  operationStr?:string;
  placeNum?:string;
  patrolId?:string;
  patrolUserName?:string;
  changeFrom?:string;
  changeTo?:string;
  orderId?:string;
  createdAt?:string;

    } 
    export interface OrderRecordSearchDto{
     /** 订单id */
 orderId?:string;
 /** 消息类型 4-岗亭 */
 msgType?:number;
 /** 消息子类型 */
 msgSubType?:number;
  lotId?:string;

    } 
    export interface OrderRecordContent{
      text?:string;
  changeFrom?:string;
  changeTo?:string;
  remarks?:string;

    } 
    export interface OrderRecordDevice{
      id?:string;
  sn?:string;

    } 
    export interface OrderRecordLogSubTypeVo{
      type?:number;
  node?:string;

    } 
    export interface OrderRecordLogVo{
      id?:string;
  createdAt?:string;
  launchUser?:OrderRecordUser;
 /** 处理时间 */
 processedAt?:string;
  processUser?:OrderRecordUser;
 /** 处理状态 */
 processStatus?:MsgType;
 /** 触发事件主体id */
 eventId?:string;
 /** 点位 */
 lotId?:string;
 /** 地址 */
 address?:string;
 /** 车位号 */
 placeNum?:string;
  device?:OrderRecordDevice;
 /** 车牌 */
 plateNum?:string;
 /** 消息类型 */
 msgType?:MsgType;
 /** 消息子类型 */
 msgSubtype?:number;
  msgSubTypeInfo?:OrderRecordLogSubTypeVo;
  msgContent?:OrderRecordContent;

    } 
    export interface OrderRecordUser{
      id?:string;
  name?:string;
  phone?:string;
  urls?:string[];

    } 
    export interface SysLoginLog{
      id?:string;
  account?:string;
  name?:string;
  ip?:string;
  success?:boolean;
  successStr?:string;
  msg?:string;
  createdAt?:string;

    } 
    export interface JournalLogVo{
      id?:string;
 /** 上报人名字 */
 pdaUserName?:string;
 /** 点位详细地址 */
 position?:string;
 /** 停车位编号 */
 placeNum?:string;
 /** 照片列表 */
 pictures?:string[];
 /** 上报类型 */
 msgType?:MsgType;
  msgTypeStr?:string;
 /** 上报时间 */
 reportDateTime?:string;
 /** 处理时间 */
 processDateTime?:string;
 /** 处理人 */
 patrolUserName?:string;
 /** 修改前数据 */
 changeFrom?:string;
 /** 修改后数据 */
 changeTo?:string;
 /** 处理图片 */
 processPic?:string;
 /** 处理状态 */
 processStatus?:MsgType;
  processStatusStr?:string;
  parkingCarId?:string;
  orderId?:string;
  processUser?:OrderRecordUser;

    } 
    export interface ImportReportSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  type?:number;
  userName?:string;

    } 
    export interface ImportReport{
      id?:string;
  lotId?:string;
  userName?:string;
  result?:string;
  originFile?:string;
  errorFile?:string;
  type?:MsgType;
  createdAt?:string;
  createdBy?:string;

    } 
    export interface SearchChannelOpenDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  lotId?:string;
  userName?:string;

    } 
    export interface ChannelOpenLogVo{
      id?:string;
  lotName?:string;
  channelName?:string;
  plateNo?:string;
  pic?:string;
  reason?:string;
  remark?:string;
  userName?:string;
  type?:MsgType;
  createdAt?:string;
 /** 是否是入口 */
 inlet?:boolean;

    } 
    export interface Invoice{
      id?:string;
  appUserId?:string;
  money?:number;
  email?:string;
  titleJson?:InvoiceTitleJson;
  type?:number;
  blue?:string;
  blueNotice?:string;
  red?:string;
  redNotice?:string;
  status?:MsgType;
  pdfUrl?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface InvoiceTitleJson{
      type?:number;
  name?:string;
  taxNum?:string;
  companyAddress?:string;
  companyPhone?:string;
  bankName?:string;
  bankAccount?:string;

    } 
    export interface InvoiceOrderSearchDto{
      appUserId?:string;
  from?:string;
  to?:string;
  plateNumber?:string;

    } 
    export interface TopUpDiscounts{
      id?:string;
  name?:string;
  beginTime?:string;
  endTime?:string;
  maxGainMoney?:number;
  maxGainCount?:number;
  createdAt?:string;
  updatedAt?:string;

    } 
    export interface TopUpDiscountsItem{
      id?:string;
  linkId?:string;
  amount?:number;
  actualAmount?:number;
  giveAmount?:number;

    } 
    export interface SubscribeMessageTemplate{
      id?:string;
  title?:string;
  keyWord?:string;
  type?:number;
  code?:string;
  permanent?:boolean;

    } 
    export interface ParkRateRule{
      id?:string;
  name?:string;
  config?:Config;
  describe?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface PplExtra{
      DeviceModel?:string;
  HardwareVersion?:string;
  FirmwareVersion?:string;
  IMEI?:string;
  ICCID?:string;
  IMSI?:string;
  RebootReason?:string;
  CopsName?:string;
  BandName?:string;

    } 
    export interface PplVo{
      id?:string;
 /** 地址 */
 address?:string;
 /** 点位 */
 lotName?:string;
 /** 车位号 */
 placeNum?:string;
 /** 锁类型 */
 type?:MsgType;
 /** 锁编号 */
 systemId?:string;
 /** 二维码编号 */
 qrcodeSn?:string;
 /** 在线状态 */
 online?:boolean;
 /** 健康状态 */
 status?:boolean;
 /** 异常原因 */
 errorNode?:string;
 /** 异常原因 */
 enabled?:boolean;
 /** 二维码 */
 qrcode?:string;
  extra?:PplExtra;
 /** 电压 */
 voltage?:string;
  createdAt?:string;

    } 
    export interface ParkingPlace{
      id?:string;
  placeNum?:string;
  position?:number;
  lotId?:string;
  reserve?:boolean;
  chargeStatus?:number;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface MchAli{
     /** 网关域名 */
 gatewayHost?:string;
 /** appId */
 appId?:string;
 /** pid */
 pid?:string;
 /** 支付宝公钥 */
 alipayPublicKey?:string;
 /** 应用私钥 */
 merchantPrivateKey?:string;
 /** 应用私钥文件路径 */
 merchantPrivateKeyPath?:string;
 /** 应用公钥证书文件路径 */
 merchantCertPath?:string;
 /** 支付宝公钥证书文件路径 */
 alipayCertPath?:string;
 /** 支付宝根证书文件路径 */
 alipayRootCertPath?:string;
 /** 异步通知回调地址（可选） */
 notifyUrl?:string;
 /** AES密钥（可选） */
 encryptKey?:string;
 /** 商家授权令牌 */
 appAuthToken?:string;

    } 
    export interface MchSwift{
     /** 商户号 */
 mchId?:string;
 /** 商户秘钥 */
 mchKey?:string;
 /** AppID */
 appId?:string;

    } 
    export interface MchWx{
     /** 设置微信公众号或者小程序等的appid */
 appId?:string;
 /** 微信支付商户号 */
 mchId?:string;
 /** 微信支付商户密钥 */
 mchKey?:string;
 /** 服务商模式下的子商户公众账号ID，普通模式请不要配置，请在配置文件中将对应项删除. */
 subAppId?:string;
 /** 服务商模式下的子商户号，普通模式请不要配置，最好是请在配置文件中将对应项删除. */
 subMchId?:string;
 /** apiclient_cert.p12文件的绝对路径，或者如果放在项目中，请以classpath:开头指定. */
 keyPath?:string;

    } 
    export interface MchYdz{
     /** 是否是特约商户 */
 subOpenId?:boolean;
 /** AppID */
 appId?:string;
 /** 商户号 */
 mchNo?:string;
 /** 商户秘钥 */
 mchKey?:string;
 /** 门店ID */
 storeId?:number;

    } 
    export interface PayMchInfoVo{
      id?:string;
  name?:string;
  type?:MsgType;
  remark?:string;
  createdAt?:string;
  mchAli?:MchAli;
  mchWx?:MchWx;
  mchSwift?:MchSwift;
  mchYdz?:MchYdz;

    } 
    export interface LotSearchDto{
     /** 层级id-会查子集 */
 orgId?:string;
 /** 点位ID */
 lotId?:string;
  lotName?:string;
  payType?:number;
  ticket?:boolean;
  police?:boolean;
  type?:number;
  laborType?:number;
  runningStatus?:number;
 /** 期数 */
 period?:string;
 /** 是否是路内点位 */
 roadside?:boolean;
  tenantId?:string;

    } 
    export interface LotVo{
      id?:string;
  orgId?:string;
  orgName?:string;
 /** 规则 */
 ruleName?:string;
 /** 警局 */
 policeName?:string;
 /** 点位 */
 name?:string;
 /** 地址 */
 address?:string;
 /** 总车位数 */
 total?:number;
 /** 安装地磁总数 */
 geomTotal?:number;
 /** 安装地锁总数 */
 pplTotal?:number;
 /** 人工收费总数 */
 manualTotal?:number;
 /** 设备类型 */
 type?:MsgType;
 /** 劳务方 */
 laborType?:MsgType;
 /** 当前支付类型 1 小程序 2 二维码 */
 payType?:number;
 /** 是否打印小票 */
 ticket?:boolean;
 /** 是否是纯人工收费 */
 manual?:boolean;
  period?:string;
 /** 点位状态 0-筹备中 1-正式收费 2-取消收费 */
 runningStatus?:number;
 /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;
  tccExtra?:TccExtra;
  lotNum?:string;

    } 
    export interface LotTreeSearchDto{
      name?:string;
  type?:number;
  laborType?:number;
  types?:number[];
  visitable?:boolean;
  orgId?:string;
 /** 车场类型 仅车场有  0-红门 1-宜泊车 2-自研 */
 tccFactory?:number;
 /** 0-筹备中 1-正式 2-停止 3-暂停 */
 runningStatus?:number;
  id?:string;

    } 
    export interface LotTreeInfo{
      id?:string;
  pid?:string;
  lft?:number;
  rgt?:number;
  level?:number;
 /** 审核人ID */
 auditorId?:string;
  auditorName?:string;
  name?:string;
 /** 负责人 */
 leaderName?:string;
 /** 负责人电话 */
 leaderPhone?:string;
  accRuleId?:string;
  accRuleName?:string;
  createdAt?:string;
  creatorName?:string;
  creator?:string;
  pname?:string;

    } 
    export interface LotGroupSearchDto{
     /** 1-免费车 2-路内巡查 3-车场巡查 4-混合巡查 */
 type?:number;
  types?:number[];

    } 
    export interface LotGroupVo{
      id?:string;
  name?:string;
  lotNames?:string;
  type?:MsgType;
  lotIds?:string[];

    } 
    export interface GeomVo{
      id?:string;
 /** 点位 */
 lotName?:string;
 /** 车位号 */
 placeNum?:string;
 /** 设备识别码 */
 maintainId?:string;
 /** 设备辅助编码 */
 extraSn?:string;
 /** 地磁类型 */
 type?:MsgType;
 /** 激活状态 */
 active?:MsgType;
 /** 健康状态 */
 status?:boolean;
 /** 异常原因 */
 errorNode?:string;
 /** 启用状态 */
 enabled?:boolean;
  createdAt?:string;
 /** 最后消息时间 */
 lastTime?:string;

    } 
    export interface GeomLog{
      id?:string;
  geomId?:string;
  msgTime?:string;
  msgBody?:string;

    } 
    export interface GeomHeart{
      id?:string;
  geomId?:string;
  msgTime?:string;
  msgBody?:string;

    } 
    export interface FreeCarVo{
     /** 车辆ID */
 id?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 状态 true正常 false禁用 */
 status?:boolean;
  groupId?:string;
 /** 免费组 */
 groupName?:string;
 /** 白名单类型 */
 freeCarType?:MsgType;
 /** 是否是全局免费 */
 globalFree?:boolean;
 /** 备注 */
 note?:string;
 /** 添加人 */
 creator?:string;
 /** 部门 */
 department?:string;
 /** 累计免费金额(分) */
 money?:number;
 /** 过期时间 */
 endTime?:string;
  createdAt?:string;

    } 
    export interface AccountFreeRule{
      id?:string;
  name?:string;
  startTime?:string;
  endTime?:string;
  reason?:string;
  url?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface DeviceSearchDto{
     /** 人员类型 */
 laborType?:number;
 /** 点位ID */
 lotId?:string;
 /** 车位号-模糊 */
 placeNum?:string;
 /** 类型 0未绑定设备 1地磁 2地锁 3绑定设备 */
 type?:number;
  orderBy?:string;
 /** 收费状态（仅地磁车位存在） 0地磁收费 1人工收费 2关闭收费 */
 chargeStatus?:number;
 /** 车位是否占用 */
 used?:boolean;
 /** 最后使用时间距现在小时数 */
 lastUsedTime?:number;

    } 
    export interface DeviceVo{
     /** 车位ID */
 id?:string;
 /** 地址 */
 lotName?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车位是否被占用 */
 used?:boolean;
 /** 最后使用时间 */
 lastUsedTime?:string;
 /** 是否是人工收费 */
 manualGear?:boolean;
 /** 是否是可预约 */
 reserve?:boolean;
 /** 编码 */
 sn?:string;
 /** 类型 1地磁 2地锁 */
 type?:number;
 /** 收费状态 0地磁收费 1人工收费 2关闭收费  仅当且当地磁收费时设备为启用状态 */
 chargeStatus?:number;
 /** 设备状态 */
 deviceEnabled?:boolean;

    } 
    export interface DeviceCanUseVo{
      id?:string;
 /** 编码 */
 sn?:string;

    } 
    export interface Device{
      id?:string;
  systemId?:string;
  factory?:string;
  model?:string;
  softVersion?:string;
  hardVersion?:string;
  online?:boolean;
  enabled?:boolean;
  voltage?:number;
  lotName?:string;
  tccName?:string;
  channel?:string;
  placeNum?:string;
  createdAt?:string;

    } 
    export interface MockProduct{
      id?:string;
  factory?:string;
  deviceName?:string;
  model?:string;
  price?:string;
  num?:number;
  sum?:string;

    } 
    export interface DeviceImportReport{
      id?:string;
  userName?:string;
  result?:string;
  originFile?:string;
  errorFile?:string;
  type?:number;
  createdAt?:string;

    } 
    export interface TopUpStatistics{
     /** 日期 */
 date?:string;
 /** 充值金额,单位:分 */
 topUpNum?:number;
 /** 赠送金额,单位:分 */
 giveMoney?:number;
 /** 到账金额,单位:分 */
 actualAccount?:number;
 /** 充值数量 */
 count?:number;
 /** 充值人数 */
 personCount?:number;

    } 
    export interface TopUpStatisticsDetail{
      phone?:string;
 /** 充值金额,单位:分 */
 topUpNum?:number;
 /** 赠送金额,单位:分 */
 giveMoney?:number;
 /** 到账金额,单位:分 */
 actualAccount?:number;
 /** 充值时间 */
 createdAt?:string;

    } 
    export interface TccFinancialVo{
      date?:string;
  name?:string;
 /** 总收入 */
 income?:number;
 /** 退款 */
 refund?:number;
 /** 优惠金额 */
 discount?:number;
 /** 总订单数 */
 orderNum?:number;
 /** 车场数 */
 tccNum?:number;
 /** 周转率 */
 zzRate?:string;
 /** 现金 */
 cashPay?:number;
 /** 微信 */
 wechatPay?:number;
 /** 支付宝 */
 aliPay?:number;
 /** 钱包 */
 walletPay?:number;
  placeNum?:number;

    } 
    export interface RoadsideFinancialVo{
      date?:string;
  name?:string;
 /** 应收 */
 income?:number;
 /** 已收 */
 received?:number;
 /** 欠费 */
 arrears?:number;
 /** 前期收缴金额 当日收缴往日欠费金额 */
 takeReceived?:number;
 /** 订单数量 */
 orderNum?:number;
 /** 车位数 */
 placeNum?:number;
 /** 周转率 */
 zzRate?:string;
 /** 收费率 */
 chargeRate?:string;
 /** 拍照率 */
 photoRate?:string;
 /** 现金 */
 cashPay?:number;
 /** 微信 */
 wechatPay?:number;
 /** 支付宝 */
 aliPay?:number;
 /** 钱包 */
 walletPay?:number;
 /** 收费订单 */
 nonFreeOrderNum?:number;
 /** 免时订单 */
 freeTimeOrderNum?:number;
 /** 免车订单 */
 freeCarOrderNum?:number;
 /** 特牌订单 */
 specialCarOrderNum?:number;

    } 
    export interface RefundDayVo{
     /** 日期 */
 date?:string;
 /** 金额:单位分 */
 money?:number;

    } 
    export interface RefundSimpleVo{
     /** 退款时间 */
 refundTime?:string;
 /** 收款时间 */
 payTime?:string;
 /** 平台退款单号 */
 refundId?:string;
 /** 全额退款 */
 fullRefund?:boolean;
 /** 退款金额 */
 refundFee?:number;
 /** 退款类型 */
 type?:MsgType;
 /** 备注 */
 remark?:string;

    } 
    export interface PayAffirmErrorVo{
     /** id */
 id?:string;
 /** 关联订单的车牌号  可能没有 */
 plateNo?:string;
 /** 原始支付方法 */
 oldMode?:MsgType;
 /** 后来的支付方式 */
 nowMode?:MsgType;
 /** 处理状态 */
 status?:boolean;
 /** 产生时间 */
 createdAt?:string;
 /** 处理时间 */
 updatedAt?:string;
 /** 处理人 */
 processUser?:string;
 /** 金额 */
 money?:number;
 /** 描述 */
 node?:string;

    } 
    export interface PayAffirmErrorChartVo{
      statusMap?:{[key:string]:number};
  moneyMap?:{[key:string]:number};
  typeMap?:{[key:string]:number};

    } 
    export interface CouponStatistics{
      couponDate?:string;
 /** 获得数量 */
 acquiredCount?:number;
 /** 获得金额 */
 acquiredMoney?:number;
 /** 拉新数量 */
 inviteCount?:number;
 /** 拉新金额 */
 inviteMoney?:number;
 /** 新用户数量 */
 newCount?:number;
 /** 新用户金额 */
 newMoney?:number;
 /** 使用数量 */
 usedCount?:number;
 /** 使用金额 */
 usedMoney?:number;
 /** 过期数量 */
 expiredCount?:number;
 /** 过期金额 */
 expiredMoney?:number;

    } 
    export interface AllFinancialVo{
      date?:string;
 /** 充值 用户当日使用小程序充值进系统的金额. */
 topUp?:number;
 /** 月租 用户当日支付包月费用的金额,包含路内点位的包月和停车场的包月. */
 monthly?:number;
 /** 月租 路内 */
 roadsideMonthly?:number;
 /** 月租 车场 */
 tccMonthly?:number;
 /** 订单 用户当日使用线上支付渠道缴纳的现金. (不含现金支付,包含缴纳的历史的) */
 order?:number;
 /** 订单 路内 */
 roadsideOrder?:number;
 /** 订单 车场 */
 tccOrder?:number;
 /** 交账 收费员当日扫码交账的金额(包含缴纳历史的) */
 accounts?:number;
 /** 交账 路内 */
 roadsideAccounts?:number;
 /** 交账 车场 */
 tccAccounts?:number;
 /** 收入合计 */
 allReceived?:number;
 /** 退款 */
 refund?:number;
 /** 营业外 对应原财务系统里的异常支付,大部分都是订单重复支付和在支付的时候订单被合并了 */
 other?:number;
  profit?:number;

    } 
    export interface AccountsVo{
      date?:string;
 /** 应缴-分 */
 all?:number;
 /** 已缴-分 */
 paid?:number;
 /** 欠缴-分 */
 unPaid?:number;

    } 
    export interface CoreLotWithTimeDateSearchDto{
     /** 具体日期 */
 date?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 点位列表 */
 lotIds?:string[];
 /** 点位 */
 lotId?:string;
 /** 层级id */
 orgId?:string;
 /** 1地磁 2地锁 3人工 100停车场 */
 type?:number;
 /** 二级类型 */
 extraType?:string;
 /** 点位期数 */
 periods?:string[];
 /** 停车场 true:车场  false:路内 */
 tcc?:boolean;
  fromTime?:string;
  toTime?:string;

    } 
    export interface AccountsItemVo{
     /** 交账ID */
 id?:string;
  lotType?:MsgType;
 /** 姓名 */
 name?:string;
 /** 地址 */
 address?:string;
 /** 应缴-分 */
 all?:number;
 /** 已缴-分 */
 paid?:number;
 /** 欠缴-分 */
 unPaid?:number;
 /** 缴费状态 */
 status?:MsgType;

    } 
    export interface TccStationUaItem{
      id?:string;
  accountsId?:string;
  stationUserId?:string;
  status?:MsgType;
  mode?:MsgType;
  payAt?:string;
  accountsMoney?:number;
  createdAt?:string;
  updatedAt?:string;

    } 
    export interface StationAccountsItemSearchDto{
     /** 具体日期 */
 date?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
  name?:string;
  lotId?:string;
  jobNum?:string;
  fromTime?:string;
  toTime?:string;

    } 
    export interface StationAccountsItemVo{
     /** 交账ID */
 id?:string;
 /** 工号 */
 jobNum?:string;
  lotName?:string;
 /** 姓名 */
 name?:string;
  phone?:string;
  startAt?:string;
  endAt?:string;
 /** 应缴-分 */
 all?:number;
 /** 已缴-分 */
 paid?:number;
 /** 欠缴-分 */
 unPaid?:number;
 /** 缴费状态 */
 status?:MsgType;

    } 
    export interface DcTopList{
     /** 点位名称 */
 name?:string;
 /** 次数 */
 count?:number;
 /** 总车位 */
 totalPlace?:number;

    } 
    export interface DataCenterBasic{
     /** 总泊位 */
 totalPlace?:number;
 /** 有效泊位 */
 activePlace?:number;
 /** 占用泊位 */
 usedPlace?:number;
 /** 泊位实时占用率 */
 placeRate?:string;
 /** 泊位区域详情 */
 placeItems?:DcActiveUsed[];
 /** 总人数 */
 totalPerson?:number;
 /** 在岗人数 */
 activePerson?:number;
 /** 拍照次数 */
 photoCount?:number;
 /** 拍照率 */
 photoRate?:string;
 /** 区域人员详情 */
 personItems?:DcPerson[];
 /** 日泊位均产 */
 dayAvgMoneyPerPlace?:number;
 /** 日订单均产 */
 dayAvgMoneyPerOrder?:number;
 /** 周转次数 */
 turnoverCount?:number;
 /** 低于一次周转率 */
 lowTurnoverRate?:string;
 /** 平均停车时长 */
 avgParkTime?:number;
 /** 15分钟内 */
 count1?:number;
 /** 15-60分钟 */
 count2?:number;
 /** 1-2小时 */
 count3?:number;
 /** 2-4小时 */
 count4?:number;
 /** 4小时以上 */
 count5?:number;
 /** 平均停车时长 */
 avgParkTimeGeom?:number;
  countGeom?:number[];
 /** 平均停车时长 */
 avgParkTimePpl?:number;
 /** 15分钟内 */
 countPpl?:number[];

    } 
    export interface DcActiveUsed{
      areaName?:string;
  total?:number;
  active?:number;
  used?:number;
  rate?:string;

    } 
    export interface DcPerson{
      total?:number;
  active?:number;

    } 
    export interface DcInOutStatistics{
     /** 进车列表-前端直接用 */
 inCount?:number[];
 /** 出车列表-前端直接用 */
 outCount?:number[];
  xaxis?:string[];

    } 
    export interface DataCenterAreaOverdue{
     /** 欠费总金额(元) */
 money?:number;
  items?:DcAreaOverdue[];

    } 
    export interface DcAreaOverdue{
      areaName?:string;
  money?:number;
  rate?:string;

    } 
    export interface DataCenterInner{
     /** 有效点位 */
 lotCount?:number;
 /** 有效泊位 */
 placeCount?:number;
 /** 今日收费订单 */
 orderCount?:number;
 /** 今日收入（元） */
 orderYuan?:number;
 /** 今日欠费（元） */
 unPaidYuan?:number;

    } 
    export interface DcIncome{
     /** 应收(元) */
 income?:number;
 /** 已收(元) */
 received?:number;
 /** 老板看到的钱(元) */
 bossMoney?:number;
 /** 收费率 */
 chargeRate?:string;
 /** 订单总数 */
 total?:number;
 /** 收费订单次数 */
 chargeCount?:number;
 /** 免费订单次数 */
 freeCount?:number;
 /** 新能源订单次数 */
 newEnergyCount?:number;

    } 
    export interface DcIncomeAll{
     /** 总收入 */
 income?:number;
 /** 地磁收入 */
 geomIncome?:number;
 /** 地锁收入 */
 pplIncome?:number;
 /** 停车场收入 */
 tccIncome?:number;
 /** 订单数量 */
 orderNum?:number;
 /** 服务车次 */
 carNum?:number;

    } 
    export interface DcAreaIncome{
     /** 区域名称 */
 areaName?:string;
 /** 微信(元) */
 wechatPay?:number;
 /** 支付宝(元) */
 aliPay?:number;
 /** 现金(元) */
 cashPay?:number;
 /** 钱包(元) */
 walletPay?:number;

    } 
    export interface CouponRecordVo{
     /** 模板类型 */
 type?:MsgType;
 /** 赠券时间 */
 createdAt?:string;
 /** 使用时间 */
 usageTime?:string;
 /** 优惠券名称 */
 name?:string;
  lotId?:string;
  lotName?:string;
  merchantName?:string;
  origin?:MsgType;
  plateNo?:string;
 /** 金额，元 */
 money?:number;
 /** 备注 */
 remark?:string;
 /** 操作人 */
 operater?:string;
  orderId?:string;

    } 
    export interface CouponModelSearchDto{
      lotId?:string;
  name?:string;

    } 
    export interface CouponModelVo{
      id?:string;
 /** 优惠券名称 */
 name?:string;
 /** 添加时间 */
 createdAt?:string;
 /** 发放数量 */
 issueNum?:string;
 /** 说明 */
 remark?:string;
 /** 优惠券类型 */
 type?:MsgType;
  lotName?:string;
  lotId?:string;

    } 
    export interface SysConfig{
      module?:string;
  key?:string;
  value?:string;
  description?:string;

    } 
    export interface ChartSearchDto{
      date?:string;
 /** true:路内 false:车场 */
 roadside?:boolean;

    } 
    export interface ChartZhifu{
      wechat?:number;
  ali?:number;
 /** 余额 */
 wallet?:number;
 /** 现金 */
 cash?:number;

    } 
    export interface ChartTopUp{
      wechat?:number;
  ali?:number;
  app?:number;

    } 
    export interface ChartTc{
      count1?:number;
  count2?:number;
  count3?:number;
  count4?:number;
  count5?:number;

    } 
    export interface ChartZhouZhuan{
      time?:string;
  rate?:number;

    } 
    export interface ChartPlaceRate{
      time?:number;
  rate?:number;

    } 
    export interface ChartMoneyItem{
      date?:string;
 /** 原始收�� */
 originalIncome?:number;
 /** 应收 */
 generalIncome?:number;
 /** 实际到账 */
 actualIncome?:number;
 /** 已收 */
 received?:number;
 /** 欠费 */
 arrears?:number;
 /** 代收 */
 takeReceived?:number;
  balancePay?:number;

    } 
    export interface ChartMoneyVo{
     /** 原始收入 */
 originalIncome?:number;
  original1?:number;
  original2?:number;
 /** 应收 */
 generalIncome?:number;
  general1?:number;
  general2?:number;
 /** 实际到账 */
 actualIncome?:number;
  actual1?:number;
  actual2?:number;
 /** 已收 */
 received?:number;
  received1?:number;
  received2?:number;
 /** 欠费 */
 arrears?:number;
  arrears1?:number;
  arrears2?:number;
 /** 代收 */
 takeReceived?:number;
  takeReceived1?:number;
  takeReceived2?:number;
  balancePay?:number;
  items?:ChartMoneyItem[];

    } 
    export interface ChargingShopSearchDto{
     /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 区域 */
 area?:string;
 /** 地质 */
 address?:string;
 /** 运营商 */
 operator?:string;
 /** 状态 */
 status?:boolean;

    } 
    export interface ChargingShopVo{
      id?:string;
  createdAt?:string;
  updatedAt?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 区域 */
 area?:string;
 /** 地址 */
 address?:string;
 /** 运营商 */
 operator?:string;
  total?:number;
  status?:boolean;

    } 
    export interface ChargingPoint{
      id?:string;
  shopId?:string;
  name?:string;
  number?:string;
  status?:boolean;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface ChargingPointSearchDto{
     /** 充电站ID */
 shopId?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 状态 */
 status?:boolean;

    } 
    export interface ChargingPointVo{
      id?:string;
  createdAt?:string;
  updatedAt?:string;
 /** 充电站ID */
 shopId?:string;
 /** 名称 */
 name?:string;
 /** 编号 */
 number?:string;
 /** 状态 */
 status?:boolean;

    } 
    export interface CarVo{
     /** id */
 id?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 可联系电话 */
 phone?:string;
 /** 电话 */
 paidPhone?:string;
 /** 停车次数 */
 parkCount?:number;
 /** 缴费笔数 */
 paidCount?:number;
 /** 累计缴费,单位:分 */
 paidSum?:number;
 /** 欠费笔数 */
 unpaidCount?:number;
 /** 累计欠费,单位:分 */
 unpaidSum?:number;
  carType?:MsgType;
  createdAt?:string;

    } 
    export interface CarChartVo{
     /** 牌照类型, 1. 新能源车 2. 普通车 */
 plateTypeMap?:{[key:string]:number};
 /** 停车时长分析, 1.0～10次 2. 11～20次 3. 21～30次,4.30～50次,5.50次以上 */
 parkCountMap?:{[key:string]:number};
 /** 累计缴费, 1. 10元以内 2. 11～30元 3.31～50元 4.51～100元 5.100元以上 */
 payMoneyGroup?:{[key:string]:number};

    } 
    export interface CarApplyVo{
      id?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 绑定手机 */
 phone?:string;
 /** 车辆类型 */
 carType?:MsgType;
  carTypeStr?:string;
 /** 申请时间 */
 createdAt?:string;
 /** 上传图片 */
 picUrls?:string[];
 /** 审核结果 */
 status?:MsgType;
  statusStr?:string;

    } 
    export interface PatrolApk{
      id?:string;
  apkVersion?:string;
  url?:string;
  releaseNotes?:string;
  createdAt?:string;

    } 
    export interface SearchReportDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 0-已上报  1-待处理   2-已处理  3-抄送来的数据 */
 type?:number;
 /** 上报人 */
 createdName?:string;
 /** 审批状态 1-审核中  2-通过  3-拒绝 */
 status?:number;

    } 
    export interface ApproveNode{
      user?:ApproveUser;
  status?:number;
  remark?:string;
  approvedAt?:string;

    } 
    export interface ApproveReportExtraInfo{
     /** 抄送人 */
 cc?:ApproveUser[];
 /** 审核节点 */
 nodes?:ApproveNode[];
 /** 上报的数据 */
 data?:ReportData[];

    } 
    export interface ApproveReportVo{
      id?:string;
  name?:string;
  remark?:string;
  createdName?:string;
 /** 上报时间 */
 createdAt?:string;
 /** 当前上报的总状态 */
 status?:MsgType;
 /** 当前用户审核的状态 */
 localStatus?:MsgType;
 /** 审核时间-只有已审核才有 */
 approvedAt?:string;
  extraInfo?:ApproveReportExtraInfo;
 /** 审核节点数量 */
 total?:number;
 /** 审核节点序号 */
 now?:number;
 /** 当前审核人姓名 */
 approveUserName?:string;

    } 
    export interface RApproveReportVo{
      success?:boolean;
  msg?:string;
  result?:ApproveReportVo;

    } 
    export interface SearchFlowDto{
      name?:string;
 /** 是内部流程 */
 internal?:boolean;
 /** 启用 */
 enabled?:boolean;

    } 
    export interface ApproveFlow{
      id?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
  name?:string;
 /** 是内部流程 */
 internal?:boolean;
  enabled?:boolean;
  remark?:string;
  extraInfo?:ApproveFlowExtraInfo;

    } 
    export interface RApproveFlow{
      success?:boolean;
  msg?:string;
  result?:ApproveFlow;

    } 
    export interface PplDeleteDto{
      pplIds?:string[];

    } 
    export interface PlaceDeleteDto{
      lotId?:string;
  placeIds?:string[];
 /** 验证码 */
 code?:string;

    } 
    export interface LotDeleteDto{
     /** 点位id */
 lotIds?:string[];

    } 
              