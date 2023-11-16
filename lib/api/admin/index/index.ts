import { IPage, Paging, MsgType } from '@/types/index';
import { server } from '@/utils/axios/request'; 

              
   export interface GetCouponmodel  extends Paging {
        name?:string;
      
      }
  /** 
   * @description:  分页查询停车券
   * @param {GetCouponmodel} params? 
   * @return {*}
   */
  export const get_couponModel = async(params?:GetCouponmodel) => {
    
  const res = await server.GET<IPage<CouponModelVo>> (`/couponModel`,{params} );

        return res?.result; 
        }
    
   export interface PutCouponmodel  extends CouponModelDto {
        
      
      }
  /** 
   * @description:  修改停车券模板
   * @param {CouponModelDto} data?,  
   * @return {*}
   */
  export const put_couponModel = async(data?:CouponModelDto,) => {
    
  const res = await server.PUT<Boolean> (`/couponModel`,{data} );

        return res?.result; 
        }
    
   export interface PostCouponmodel  extends CouponModelDto {
        
      
      }
  /** 
   * @description:  添加停车券模板
   * @param {CouponModelDto} data?,  
   * @return {*}
   */
  export const post_couponModel = async(data?:CouponModelDto,) => {
    
  const res = await server.POST (`/couponModel`,{data} );

        return res?.success; 
        }
    
   export interface PostCouponRecordsexport  extends SearchCouponRecordDto {
        
      
      }
  /** 
   * @description:  赠券记录
   * @param {PostCouponRecordsexport} params? 
   * @return {*}
   */
  export const post_coupon_recordsExport = async(params?:PostCouponRecordsexport) => {
    
  const res = await server.POST<ArrayBuffer> (`/coupon/recordsExport`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostCouponIssue  extends CouponIssueDto {
        
      
      }
  /** 
   * @description:  赠送优惠券
   * @param {CouponIssueDto} data?,  
   * @return {*}
   */
  export const post_coupon_issue = async(data?:CouponIssueDto,) => {
    
  const res = await server.POST (`/coupon/issue`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  查询全部停车券模板
     
   * @return {*}
   */
  export const get_couponModel_list = async() => {
    
  const res = await server.GET<CouponModelVo[]> (`/couponModel/list`, );

        return res?.result??[]; 
        }
    
   export interface GetCouponUsers  extends SearchCouponUserDto,Paging {
        
      
      }
  /** 
   * @description:  赠送用户列表
   * @param {GetCouponUsers} params? 
   * @return {*}
   */
  export const get_coupon_users = async(params?:GetCouponUsers) => {
    
  const res = await server.GET<IPage<CouponUserVo>> (`/coupon/users`,{params} );

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
    
   export interface DeleteCouponmodelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车券模板
   * @param {DeleteCouponmodelId} params? 
   * @return {*}
   */
  export const delete_couponModel_id = async(params?:DeleteCouponmodelId) => {
    
  const res = await server.DELETE (`/couponModel/${params?.id}`,{params} );

        return res?.success; 
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

    } 
    export interface SearchCouponRecordDto{
     /** 开始日期 */
 beginDate?:string;
 /** 结束日期 */
 endDate?:string;
 /** 手机号 */
 phone?:string;

    } 
    export interface CouponIssueDto{
     /** app用户id */
 appUserId?:string;
 /** 限制开始日期 */
 beginDate?:string;
 /** 限制结束日期 */
 endDate?:string;
 /** 模板id */
 modelId?:string;
 /** 优惠券金额 */
 money?:number;
  remark?:string;

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

    } 
    export interface SearchCouponUserDto{
     /** 扫码日期 */
 bindPhoneAt?:string;
 /** 扫码有效分钟数 */
 minutes?:number;
 /** 手机号 */
 phone?:string;

    } 
    export interface CouponUserVo{
      appUserId?:string;
  newUser?:boolean;
 /** 手机号 */
 phone?:string;
 /** 注册时间 */
 createdAt?:string;
 /** 扫码时间 */
 bindPhoneAt?:string;
 /** 优惠券数量 */
 couponNum?:string;

    } 
    export interface CouponRecordVo{
     /** 手机号 */
 phone?:string;
 /** 赠券时间 */
 createdAt?:string;
 /** 优惠券名称 */
 name?:string;
 /** 金额，元 */
 money?:number;
 /** 赠券开始时间 */
 beginDate?:string;
 /** 赠券结束时间 */
 endDate?:string;
  validDateStr?:string;
 /** 备注 */
 remark?:string;
 /** 操作人 */
 operater?:string;
 /** 模板类型 */
 modelType?:MsgType;

    } 
              
   export interface PostCommonOssAli   {
        file?:string;path?:string;
      
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
    
   export interface GetChartZhifu  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  支付数据
   * @param {GetChartZhifu} params? 
   * @return {*}
   */
  export const get_chart_zhifu = async(params?:GetChartZhifu) => {
    
  const res = await server.GET<ChartZhifu> (`/chart/zhifu`,{params} );

        return res?.result; 
        }
    
   export interface GetChartTopUp  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  充值数据
   * @param {GetChartTopUp} params? 
   * @return {*}
   */
  export const get_chart_top_up = async(params?:GetChartTopUp) => {
    
  const res = await server.GET<ChartTopUp> (`/chart/top-up`,{params} );

        return res?.result; 
        }
    
   export interface GetChartTime   {
        day?:number;
      
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
    
   export interface GetChartPlaceRate  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  停车利用率
   * @param {GetChartPlaceRate} params? 
   * @return {*}
   */
  export const get_chart_place_rate = async(params?:GetChartPlaceRate) => {
    
  const res = await server.GET<ChartPlaceRate[]> (`/chart/place-rate`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetChartMoney  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  财务数据
   * @param {GetChartMoney} params? 
   * @return {*}
   */
  export const get_chart_money = async(params?:GetChartMoney) => {
    
  const res = await server.GET<ChartMoneyVo> (`/chart/money`,{params} );

        return res?.result; 
        }
     
    export interface TimeLocalDate{
      date?:string;

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
 /** 原始收入 */
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
   
  /** 
   * @description:  临时需求
     
   * @return {*}
   */
  export const get_map_temp = async() => {
    
  const res = await server.GET<DzTempLot[]> (`/map/temp`, );

        return res?.result??[]; 
        }
    
   export interface GetMapRgpls   {
        area?:string;
      
      }
  /** 
   * @description:  道闸列表
   * @param {GetMapRgpls} params? 
   * @return {*}
   */
  export const get_map_rgpls = async(params?:GetMapRgpls) => {
    
  const res = await server.GET<MapLot[]> (`/map/rgpls`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMapRgplsId   {
        id?:string;
      
      }
  /** 
   * @description:  道闸列表
   * @param {GetMapRgplsId} params? 
   * @return {*}
   */
  export const get_map_rgpls_id = async(params?:GetMapRgplsId) => {
    
  const res = await server.GET<DztccBasicInfoVo> (`/map/rgpls/${params?.id}`,{params} );

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
    
   
  /** 
   * @description:  地图停车点列表-当前状况
     
   * @return {*}
   */
  export const get_map_lots_online = async() => {
    
  const res = await server.GET<LotUsedResult[]> (`/map/lots/online`, );

        return res?.result??[]; 
        }
     
    export interface DzTempLot{
      id?:string;
 /** 停车点名称 */
 lotName?:string;
 /** 经度 */
 longitude?:number;
 /** 纬度 */
 latitude?:number;
 /** 总车位数 */
 total?:number;
 /** 周转率 */
 rate?:number;

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
 /** 是否有巡查工作 */
 patrolWork?:boolean;
 /** 停车场专用剩余- 不能用总数减去正在使用 */
 rgplTemp?:number;
 /** 停车场类型 */
 tccType?:MsgType;

    } 
    export interface DztccBasicInfoVo{
      id?:string;
  name?:string;
  factory?:MsgType;
  total?:number;
  fixedTotal?:number;
  point?:GeoPoint;
  address?:string;
  manager?:string;
  contactMan?:string;
  contactPhone?:string;
  ruleText?:string;
  reserve?:boolean;
  monthTotal?:number;
  monthEnabled?:boolean;
  monthMoney?:number;
  monthMoneyActual?:TccMonthlyMoney[];
  discountEndDate?:string;
  type?:MsgType;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;
 /** 剩余车位数 */
 available?:number;

    } 
    export interface GeoPoint{
     /** 经度 */
 lon?:number;
 /** 纬度 */
 lat?:number;

    } 
    export interface TccMonthlyMoney{
      month?:number;
  money?:number;
  discountMoney?:number;

    } 
    export interface MapLotPlace{
     /** 停车点ID */
 id?:string;
 /** 朝向,从 */
 directionFrom?:MsgType;
 /** 朝向,到 */
 directionTo?:MsgType;
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
 patrolLog?:PatrolLogVo[];

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
    export interface PatrolLogVo{
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
    export interface LotUsedResult{
      lotId?:string;
  used?:number;

    }
   export interface GetAppsPdaApk extends Paging{}
  /** 
   * @description:  PDA的版本历史-带分页
   * @param {GetAppsPdaApk} params? 
   * @return {*}
   */
  export const get_apps_pda_apk = async(params?:GetAppsPdaApk) => {
    
  const res = await server.GET<IPage<PdaApk>> (`/apps/pda-apk`, {params} );

        return res?.result; 
        }
    
   export interface PostAppsPdaApk  extends ReleaseApkDto {
        
      
      }
  /** 
   * @description:  发布新版本
   * @param {ReleaseApkDto} data?,  
   * @return {*}
   */
  export const post_apps_pda_apk = async(data?:ReleaseApkDto,) => {
    
  const res = await server.POST (`/apps/pda-apk`,{data} );

        return res?.success; 
        }
    
   export interface GetAppsPatrolApk extends Paging{}
  /** 
   * @description:  PDA的版本历史-带分页
   * @param {GetAppsPatrolApk} params? 
   * @return {*}
   */
  export const get_apps_patrol_apk = async(params?:GetAppsPatrolApk) => {
    
  const res = await server.GET<IPage<PatrolApk>> (`/apps/patrol-apk`, {params} );

        return res?.result; 
        }
    
   export interface PostAppsPatrolApk  extends ReleaseApkDto {
        
      
      }
  /** 
   * @description:  发布新版本
   * @param {ReleaseApkDto} data?,  
   * @return {*}
   */
  export const post_apps_patrol_apk = async(data?:ReleaseApkDto,) => {
    
  const res = await server.POST (`/apps/patrol-apk`,{data} );

        return res?.success; 
        }
     
    export interface ReleaseApkDto{
     /** 版本号 */
 apkVersion?:string;
 /** 更新内容 */
 releaseNotes?:string;
  url?:string;

    } 
    export interface PdaApk{
      id?:string;
  apkVersion?:string;
  url?:string;
  releaseNotes?:string;
  createdAt?:string;

    } 
    export interface PatrolApk{
      id?:string;
  apkVersion?:string;
  url?:string;
  releaseNotes?:string;
  createdAt?:string;

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
    
   export interface PutChargingShops  extends ChargingShopDto {
        
      
      }
  /** 
   * @description:  更新充电站
   * @param {ChargingShopDto} data?,  
   * @return {*}
   */
  export const put_charging_shops = async(data?:ChargingShopDto,) => {
    
  const res = await server.PUT (`/charging-shops`,{data} );

        return res?.success; 
        }
    
   export interface PostChargingShops  extends ChargingShopDto {
        
      
      }
  /** 
   * @description:  添加充电站
   * @param {ChargingShopDto} data?,  
   * @return {*}
   */
  export const post_charging_shops = async(data?:ChargingShopDto,) => {
    
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
    
   export interface PutChargingPoints  extends ChargingPointDto {
        
      
      }
  /** 
   * @description:  更新充电桩
   * @param {ChargingPointDto} data?,  
   * @return {*}
   */
  export const put_charging_points = async(data?:ChargingPointDto,) => {
    
  const res = await server.PUT (`/charging-points`,{data} );

        return res?.success; 
        }
    
   export interface PostChargingPoints  extends ChargingPointDto {
        
      
      }
  /** 
   * @description:  添加充电桩
   * @param {ChargingPointDto} data?,  
   * @return {*}
   */
  export const post_charging_points = async(data?:ChargingPointDto,) => {
    
  const res = await server.POST (`/charging-points`,{data} );

        return res?.success; 
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
    
   export interface PutAdItemChange  extends AdItemChangeDto {
        
      
      }
  /** 
   * @description:  广告排期修改
   * @param {AdItemChangeDto} data?,  
   * @return {*}
   */
  export const put_ad_item_change = async(data?:AdItemChangeDto,) => {
    
  const res = await server.PUT (`/ad/item-change`,{data} );

        return res?.success; 
        }
    
   export interface PostAdPosition  extends AdPositionSearchDto,Paging {
        
      
      }
  /** 
   * @description:  广告位列表
   * @param {AdPositionSearchDto} data?,* @param {PostAdPosition} params? 
   * @return {*}
   */
  export const post_ad_position = async(data?:AdPositionSearchDto,params?:PostAdPosition) => {
    
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
   * @param {AdItemSearchDto} data?,* @param {PostAdItem} params? 
   * @return {*}
   */
  export const post_ad_item = async(data?:AdItemSearchDto,params?:PostAdItem) => {
    
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
  sort?:number;

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
  sort?:number;

    }
   export interface PutSystemProfileResetpass  extends UserPasswordDto {
        
      
      }
  /** 
   * @description:  用户更新密码
   * @param {UserPasswordDto} data?,  
   * @return {*}
   */
  export const put_system_profile_resetPass = async(data?:UserPasswordDto,) => {
    
  const res = await server.PUT (`/system/profile/resetPass`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemResetloginpass  extends ResetLoginPassDto {
        
      
      }
  /** 
   * @description:  修改登录密码
   * @param {ResetLoginPassDto} data?,  
   * @return {*}
   */
  export const post_system_resetLoginPass = async(data?:ResetLoginPassDto,) => {
    
  const res = await server.POST (`/system/resetLoginPass`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemLogin  extends AdminLoginDto {
        
      
      }
  /** 
   * @description:  登录
   * @param {AdminLoginDto} data?,  
   * @return {*}
   */
  export const post_system_login = async(data?:AdminLoginDto,) => {
    
  const res = await server.POST<LoginResult> (`/system/login`,{data} );

        return res?.result; 
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
    
   
  /** 
   * @description:  用户菜单和权限
     
   * @return {*}
   */
  export const get_system_profile_menus = async() => {
    
  const res = await server.GET<MenuButtons> (`/system/profile/menus`, );

        return res?.result; 
        }
     
    export interface UserPasswordDto{
     /** 原始密码 */
 oldPassword?:string;
 /** 新密码 */
 password?:string;
 /** 确认的新密码 */
 confirmPassword?:string;

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
 /** 子菜单 */
 children?:MenuTree[];

    }
   export interface PostMsgPplWarnExport  extends PplWarnSearchDto {
        
      
      }
  /** 
   * @description:  告警-导出
   * @param {PplWarnSearchDto} data?,  
   * @return {*}
   */
  export const post_msg_ppl_warn_export = async(data?:PplWarnSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/ppl-warn/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMsgPplErrorsExport  extends PplErrorSearchDto {
        
      
      }
  /** 
   * @description:  故障-导出
   * @param {PplErrorSearchDto} data?,  
   * @return {*}
   */
  export const post_msg_ppl_errors_export = async(data?:PplErrorSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/ppl-errors/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMsgDeviceVoltageStaticsExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  电池电量告警-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_msg_device_voltage_statics_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/device-voltage/statics/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMsgDeviceVoltageExport  extends DeviceVoltageMsgDto {
        
      
      }
  /** 
   * @description:  电池电量告警-excel导出
   * @param {DeviceVoltageMsgDto} data?,  
   * @return {*}
   */
  export const post_msg_device_voltage_export = async(data?:DeviceVoltageMsgDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/msg/device-voltage/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
     
    export interface PplWarnSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
 /** 停车点ID */
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
 /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
 /** 停车点ID */
 lotId?:string;
  placeNum?:string;
  systemId?:string;
  processUser?:string;
  errorMsg?:string;
  processStatus?:number;

    } 
    export interface TimeRangeDate{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;

    } 
    export interface DeviceVoltageMsgDto{
      date?:string;
  level?:number;
  processStatus?:boolean;

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
  areaId?:string;
  areaName?:string;
  streetId?:string;
  streetName?:string;
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
    
   export interface PostInvoices  extends InvoiceDto {
        
      
      }
  /** 
   * @description:  开票
   * @param {InvoiceDto} data?,  
   * @return {*}
   */
  export const post_invoices = async(data?:InvoiceDto,) => {
    
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
    
   export interface GetInvoicesOrders  extends InvoiceOrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  可开票订单
   * @param {GetInvoicesOrders} params? 
   * @return {*}
   */
  export const get_invoices_orders = async(params?:GetInvoicesOrders) => {
    
  const res = await server.GET<IPage<RoadSideOrder>> (`/invoices/orders`,{params} );

        return res?.result; 
        }
    
   export interface GetInvoicesAllOrdersMoney  extends InvoiceOrderSearchDto {
        
      
      }
  /** 
   * @description:  查询开票订单金额
   * @param {GetInvoicesAllOrdersMoney} params? 
   * @return {*}
   */
  export const get_invoices_all_orders_money = async(params?:GetInvoicesAllOrdersMoney) => {
    
  const res = await server.GET<number> (`/invoices/all-orders-money`,{params} );

        return res?.result; 
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
    export interface InvoiceSearch{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 购买方 */
 buyer?:string;
 /** 开票地址 */
 email?:string;

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
    export interface RoadSideOrder{
     /** 订单ID */
 id?:string;
 /** 微信用户ID */
 appUserId?:string;
 /** 原始金额(单位:分) */
 originalMoney?:number;
 /** 目标金额(单位:分) */
 targetMoney?:number;
 /** 实际金额(单位:分) */
 realMoney?:number;
 /** 停车开始时间 */
 startAt?:string;
 /** 停车结束时间 */
 endAt?:string;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 结束信息来源 */
 endType?:MsgType;
 /** 停车总时长(分钟) */
 duringTime?:number;
 /** 停车图片 */
 picture?:string;
 /** 车牌ID */
 carId?:string;
 /** 车牌 */
 plateNumber?:string;
 /** 区域名称 */
 areaName?:string;
 /** 街道名称 */
 streetName?:string;
 /** 停车地点 */
 lotName?:string;
 /** 车位号 */
 placeNum?:string;
 /** 是否支付 */
 status?:MsgType;
 /** 支付时间 */
 payAt?:string;
 /** 支付方式 */
 mode?:MsgType;
 /** 缴费类型 */
 chargeType?:MsgType;
 /** 子订单数量 */
 itemCount?:number;
 /** 享受优惠数量 */
 discountCount?:number;
  discountMoney?:number;
 /** 补拍照片 */
 extraPictures?:string[];
 /** 补拍照片 */
 rule?:string;
 /** 设备编号 */
 deviceSn?:string;
 /** 是否是代收欠费 */
 receipt?:boolean;

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
    
   export interface PutSignRules  extends SignRuleDto {
        
      
      }
  /** 
   * @description:  编辑考勤规则
   * @param {SignRuleDto} data?,  
   * @return {*}
   */
  export const put_sign_rules = async(data?:SignRuleDto,) => {
    
  const res = await server.PUT (`/sign/rules`,{data} );

        return res?.success; 
        }
    
   export interface PostSignRules  extends SignRuleDto {
        
      
      }
  /** 
   * @description:  添加考勤规则
   * @param {SignRuleDto} data?,  
   * @return {*}
   */
  export const post_sign_rules = async(data?:SignRuleDto,) => {
    
  const res = await server.POST (`/sign/rules`,{data} );

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
    
   export interface PostSignStatistics  extends SignStaticsSearchDto {
        
      
      }
  /** 
   * @description:  考勤统计导出
   * @param {SignStaticsSearchDto} data?,  
   * @return {*}
   */
  export const post_sign_statistics = async(data?:SignStaticsSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/sign/statistics`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostSignRulesGroup  extends BingSignUserDto {
        
      
      }
  /** 
   * @description:  绑定考勤用户
   * @param {BingSignUserDto} data?,  
   * @return {*}
   */
  export const post_sign_rules_group = async(data?:BingSignUserDto,) => {
    
  const res = await server.POST (`/sign/rules/group`,{data} );

        return res?.success; 
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
   export interface GetDatacenterToplist   {
        type?:number;
      
      }
  /** 
   * @description:  通用-流量排行
   * @param {GetDatacenterToplist} params? 
   * @return {*}
   */
  export const get_dataCenter_toplist = async(params?:GetDatacenterToplist) => {
    
  const res = await server.GET<DataCenterTopList[]> (`/dataCenter/toplist`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  test
     
   * @return {*}
   */
  export const get_dataCenter_test_test = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/dataCenter/test-test`, );

        return res?.result; 
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
    
  const res = await server.GET<DateCenterDeviceAreaItem[]> (`/dataCenter/place-statistics`,{params} );

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
    
  const res = await server.GET<DataCenterInOutStatistics> (`/dataCenter/park-statistics`,{params} );

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
    
  const res = await server.GET<DataCenterIncome> (`/dataCenter/income-statistics`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通用-收入-总和
     
   * @return {*}
   */
  export const get_dataCenter_income_statistics_all = async() => {
    
  const res = await server.GET<DataCenterIncomeNew> (`/dataCenter/income-statistics-all`, );

        return res?.result; 
        }
    
   
  /** 
   * @description:  通用-区域收入分析
     
   * @return {*}
   */
  export const get_dataCenter_area_income_statistics = async() => {
    
  const res = await server.GET<{[key:string]:DataCenterAreaIncome[]}> (`/dataCenter/area-income-statistics`, );

        return res?.result; 
        }
     
    export interface DataCenterTopList{
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
 placeItems?:DateCenterDeviceAreaItem[];
 /** 总人数 */
 totalPerson?:number;
 /** 在岗人数 */
 activePerson?:number;
 /** 拍照次数 */
 photoCount?:number;
 /** 拍照率 */
 photoRate?:string;
 /** 区域人员详情 */
 personItems?:DateCenterPerson[];
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
    export interface DateCenterDeviceAreaItem{
      areaName?:string;
  total?:number;
  active?:number;
  used?:number;
  rate?:string;

    } 
    export interface DateCenterPerson{
      total?:number;
  active?:number;

    } 
    export interface DataCenterInOutStatistics{
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
    export interface DataCenterIncome{
     /** 收入-应收(元) */
 income?:number;
 /** 收入-已收(元) */
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
    export interface DataCenterIncomeNew{
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
    export interface DataCenterAreaIncome{
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
   export interface PostCarsExport  extends CarsSearchDto {
        
      
      }
  /** 
   * @description:  车辆列表-excel导出
   * @param {CarsSearchDto} data?,  
   * @return {*}
   */
  export const post_cars_export = async(data?:CarsSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/cars/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostCarsExportoverdue  extends CarsSearchDto {
        
      
      }
  /** 
   * @description:  车辆列表明细-excel导出
   * @param {CarsSearchDto} data?,  
   * @return {*}
   */
  export const post_cars_exportOverDue = async(data?:CarsSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/cars/exportOverDue`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostCarapplyExport  extends CarApplySearchDto {
        
      
      }
  /** 
   * @description:  导出
   * @param {CarApplySearchDto} data?,  
   * @return {*}
   */
  export const post_carApply_export = async(data?:CarApplySearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/carApply/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
    
  const res = await server.GET<IPage<OrderVo>> (`/cars/${params?.id}/his`,{params} );

        return res?.result; 
        }
    
   export interface GetCarsChart  extends CarsSearchDto {
        
      
      }
  /** 
   * @description:  图表
   * @param {GetCarsChart} params? 
   * @return {*}
   */
  export const get_cars_chart = async(params?:GetCarsChart) => {
    
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
    export interface OrderVo{
      id?:string;
 /** 微信用户ID */
 appUserId?:string;
 /** 开始停车时间 */
 startAt?:string;
 /** 结束停车时间 */
 endAt?:string;
  position?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 停车图片 */
 picture?:string;
 /** 区域 */
 areaName?:string;
 /** 街道 */
 streetName?:string;
 /** 停车点名字 */
 lotName?:string;
 /** 原始金额(单位:分) */
 originalMoney?:number;
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
 /** 使用优惠券名称 */
 couponName?:string;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 结束信息来源 */
 endType?:MsgType;
 /** 子订单数量 */
 itemCount?:number;
 /** 优惠数量 */
 discountCount?:number;
 /** 缴费类型 */
 chargeType?:MsgType;

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
   export interface PostStatisticsWalkExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  步数统计-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_statistics_walk_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/walk/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStatisticsNewenergylotExport  extends NewEnergyStaDto {
        
      
      }
  /** 
   * @description:  新能源车点位数据分析-excel导出
   * @param {NewEnergyStaDto} data?,  
   * @return {*}
   */
  export const post_statistics_newEnergyLot_export = async(data?:NewEnergyStaDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/newEnergyLot/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStatisticsNewenergyExport  extends NewEnergyStaDto {
        
      
      }
  /** 
   * @description:  新能源车月数据分析-excel导出
   * @param {NewEnergyStaDto} data?,  
   * @return {*}
   */
  export const post_statistics_newEnergy_export = async(data?:NewEnergyStaDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/newEnergy/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStatisticsLotExport  extends LotInfoDto {
        
      
      }
  /** 
   * @description:  点位列表-导出
   * @param {LotInfoDto} data?,  
   * @return {*}
   */
  export const post_statistics_lot_export = async(data?:LotInfoDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/lot/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStatisticsGeomExport  extends GeomStaDtoRange {
        
      
      }
  /** 
   * @description:  地磁分析导出
   * @param {GeomStaDtoRange} data?,  
   * @return {*}
   */
  export const post_statistics_geom_export = async(data?:GeomStaDtoRange,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/geom/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStatisticsCreditsExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  积分统计-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_statistics_credits_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/statistics/credits/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
      areaId?:string;
  streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 规则 */
 accountRuleId?:string;
 /** 设备类型 0-地磁，1-地锁 */
 lotType?:number;

    } 
    export interface GeomStaDtoRange{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
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
    export interface EnergyCarChart{
      total?:string;
 /** 停车次数 */
 parkNumMap?:{[key:string]:number};
 /** 缴纳 */
 moneyMap?:{[key:string]:AtomicDouble};
 /** 车牌统计 */
 typeMap?:{[key:string]:string};

    } 
    export interface LotInfoVo{
      id?:string;
  areaName?:string;
  streetName?:string;
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
   export interface PostMonthlyGroupUpd  extends CarMonthlyGroupDto {
        
      
      }
  /** 
   * @description:  修改包月组
   * @param {CarMonthlyGroupDto} data?,  
   * @return {*}
   */
  export const post_monthly_group_upd = async(data?:CarMonthlyGroupDto,) => {
    
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
    
   export interface PostMonthlyGroupAdd  extends CarMonthlyGroupDto {
        
      
      }
  /** 
   * @description:  新增包月组
   * @param {CarMonthlyGroupDto} data?,  
   * @return {*}
   */
  export const post_monthly_group_add = async(data?:CarMonthlyGroupDto,) => {
    
  const res = await server.POST (`/monthly/group-add`,{data} );

        return res?.success; 
        }
    
   export interface PostMonthlyCarUpd  extends CarMonthlyUpdDto {
        
      
      }
  /** 
   * @description:  包月车修改
   * @param {CarMonthlyUpdDto} data?,  
   * @return {*}
   */
  export const post_monthly_car_upd = async(data?:CarMonthlyUpdDto,) => {
    
  const res = await server.POST (`/monthly/car-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostMonthlyCarPayMonthid  extends CarMonthlyPayDto {
        monthId?:string;
      
      }
  /** 
   * @description:  手动修改包月日期
   * @param {CarMonthlyPayDto} data?,* @param {PostMonthlyCarPayMonthid} params? 
   * @return {*}
   */
  export const post_monthly_car_pay_monthId = async(data?:CarMonthlyPayDto,params?:PostMonthlyCarPayMonthid) => {
    
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
    
   export interface PostMonthlyCarAdd  extends CarMonthlyAddDto {
        
      
      }
  /** 
   * @description:  包月车新增
   * @param {CarMonthlyAddDto} data?,  
   * @return {*}
   */
  export const post_monthly_car_add = async(data?:CarMonthlyAddDto,) => {
    
  const res = await server.POST (`/monthly/car-add`,{data} );

        return res?.success; 
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
    
  const res = await server.GET<CarMonthlyGroup> (`/monthly/${params?.id}`,{params} );

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
    
   export interface GetMonthlyGroups   {
        carId?:string;
      
      }
  /** 
   * @description:  所有包月组
   * @param {GetMonthlyGroups} params? 
   * @return {*}
   */
  export const get_monthly_groups = async(params?:GetMonthlyGroups) => {
    
  const res = await server.GET<CarMonthlyGroup[]> (`/monthly/groups`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMonthlyGroupsPage extends Paging{}
  /** 
   * @description:  所有包月组-分页
   * @param {GetMonthlyGroupsPage} params? 
   * @return {*}
   */
  export const get_monthly_groups_page = async(params?:GetMonthlyGroupsPage) => {
    
  const res = await server.GET<IPage<CarMonthlyGroupVo>> (`/monthly/groups-page`, {params} );

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
     
    export interface CarMonthlyGroupDto{
      id?:string;
 /** 名称 */
 name?:string;
 /** 月费,单位:分 */
 monthMoneyActual?:CarMonthlyMoney[];
 /** 减免截止日期 */
 discountEndDate?:string;
 /** 是否开放购买 */
 openBuy?:boolean;
 /** 组内最大可容纳车辆数 */
 maxSub?:number;
 /** 生效的区域 */
 areaIds?:string[];
 /** 生效的街道 */
 streetIds?:string[];
 /** 生效的停车点 */
 lotIds?:string[];
 /** 备注 */
 remark?:string;

    } 
    export interface CarMonthlyMoney{
      month?:number;
  money?:number;
  discountMoney?:number;

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
 /** 开��生效日期 */
 startDate?:string;

    } 
    export interface CarMonthlyGroup{
      id?:string;
  name?:string;
  monthMoneyActual?:CarMonthlyMoney[];
  discountEndDate?:string;
  openBuy?:boolean;
  maxSub?:number;
  areaIds?:string[];
  streetIds?:string[];
  lotIds?:string[];
  remark?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

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
 /** 数量 */
 count?:number;
 /** 退款金额,单位:分 */
 refundMoney?:number;
 /** 退款次数 */
 refundCount?:number;

    } 
    export interface CarMonthlyGroupVo{
      id?:string;
 /** 名称 */
 name?:string;
 /** 月费,单位:分 */
 monthMoney?:number;
 /** 月费,单位:分 */
 monthlyMoneyActual?:CarMonthlyMoney[];
  discountEndDate?:string;
 /** 是否开放购买 */
 openBuy?:boolean;
 /** 组内最大可容纳车辆数 */
 maxSub?:number;
 /** 生效的区域id */
 areaIds?:string[];
 /** 生效的街道id */
 streetIds?:string[];
 /** 生效的停车点id */
 lotIds?:string[];
 /** 生效的区域 */
 areas?:string[];
 /** 生效的街道 */
 streets?:string[];
 /** 生效的停车点 */
 lots?:string[];
 /** 备注 */
 remark?:string;
 /** 添加时间 */
 createdAt?:string;

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
 createType?:MsgType;
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
   export interface PostRoadSidePplOnlineExport  extends OnlineSearchDto {
        
      
      }
  /** 
   * @description:  当前停车数据-excel导出
   * @param {OnlineSearchDto} data?,  
   * @return {*}
   */
  export const post_road_side_ppl_online_export = async(data?:OnlineSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/road-side/ppl/online/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostRoadSidePplHistoryExport  extends OrderSearchDto {
        
      
      }
  /** 
   * @description:  历史数据-excel导出
   * @param {OrderSearchDto} data?,  
   * @return {*}
   */
  export const post_road_side_ppl_history_export = async(data?:OrderSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/road-side/ppl/history/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostRoadSideOnlineExport  extends OnlineSearchDto {
        
      
      }
  /** 
   * @description:  当前停车数据-excel导出
   * @param {OnlineSearchDto} data?,  
   * @return {*}
   */
  export const post_road_side_online_export = async(data?:OnlineSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/road-side/online/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostRoadSideHistoryExport  extends OrderSearchDto {
        
      
      }
  /** 
   * @description:  历史数据-excel导出
   * @param {OrderSearchDto} data?,  
   * @return {*}
   */
  export const post_road_side_history_export = async(data?:OrderSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/road-side/history/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetRoadSideIdExtraPictures   {
        id?:string;
      
      }
  /** 
   * @description:  订单图片
   * @param {GetRoadSideIdExtraPictures} params? 
   * @return {*}
   */
  export const get_road_side_id_extra_pictures = async(params?:GetRoadSideIdExtraPictures) => {
    
  const res = await server.GET<string[]> (`/road-side/${params?.id}/extra-pictures`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetRoadSidePplOnline  extends OnlineSearchDto,Paging {
        
      
      }
  /** 
   * @description:  当前停车数据-带分页
   * @param {GetRoadSidePplOnline} params? 
   * @return {*}
   */
  export const get_road_side_ppl_online = async(params?:GetRoadSidePplOnline) => {
    
  const res = await server.GET<IPage<OnlineOrderVo>> (`/road-side/ppl/online`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSidePplOnlineChart  extends OnlineSearchDto {
        
      
      }
  /** 
   * @description:  当前停车-图表
   * @param {GetRoadSidePplOnlineChart} params? 
   * @return {*}
   */
  export const get_road_side_ppl_online_chart = async(params?:GetRoadSidePplOnlineChart) => {
    
  const res = await server.GET<OnlineChartVo> (`/road-side/ppl/online/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSidePplHistory  extends OrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  历史数据-带分页
   * @param {GetRoadSidePplHistory} params? 
   * @return {*}
   */
  export const get_road_side_ppl_history = async(params?:GetRoadSidePplHistory) => {
    
  const res = await server.GET<IPage<OrderVo>> (`/road-side/ppl/history`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSidePplHistoryChart  extends OrderSearchDto {
        
      
      }
  /** 
   * @description:  历史数据-图表
   * @param {GetRoadSidePplHistoryChart} params? 
   * @return {*}
   */
  export const get_road_side_ppl_history_chart = async(params?:GetRoadSidePplHistoryChart) => {
    
  const res = await server.GET<HistoryChartVo> (`/road-side/ppl/history/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideOnline  extends OnlineSearchDto,Paging {
        
      
      }
  /** 
   * @description:  当前停车数据-带分页
   * @param {GetRoadSideOnline} params? 
   * @return {*}
   */
  export const get_road_side_online = async(params?:GetRoadSideOnline) => {
    
  const res = await server.GET<IPage<OnlineOrderVo>> (`/road-side/online`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideOnlineId   {
        id?:string;
      
      }
  /** 
   * @description:  当前停车数据-订单明细
   * @param {GetRoadSideOnlineId} params? 
   * @return {*}
   */
  export const get_road_side_online_id = async(params?:GetRoadSideOnlineId) => {
    
  const res = await server.GET<ParkingCar> (`/road-side/online/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideOnlineChart  extends OnlineSearchDto {
        
      
      }
  /** 
   * @description:  当前停车-图表
   * @param {GetRoadSideOnlineChart} params? 
   * @return {*}
   */
  export const get_road_side_online_chart = async(params?:GetRoadSideOnlineChart) => {
    
  const res = await server.GET<OnlineChartVo> (`/road-side/online/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideHistory  extends OrderSearchDto,Paging {
        
      
      }
  /** 
   * @description:  历史数据-带分页
   * @param {GetRoadSideHistory} params? 
   * @return {*}
   */
  export const get_road_side_history = async(params?:GetRoadSideHistory) => {
    
  const res = await server.GET<IPage<OrderVo>> (`/road-side/history`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideHistoryId   {
        id?:string;
      
      }
  /** 
   * @description:  历史数据-订单明细
   * @param {GetRoadSideHistoryId} params? 
   * @return {*}
   */
  export const get_road_side_history_id = async(params?:GetRoadSideHistoryId) => {
    
  const res = await server.GET<PayOrder> (`/road-side/history/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetRoadSideHistoryChart  extends OrderSearchDto {
        
      
      }
  /** 
   * @description:  历史数据-图表
   * @param {GetRoadSideHistoryChart} params? 
   * @return {*}
   */
  export const get_road_side_history_chart = async(params?:GetRoadSideHistoryChart) => {
    
  const res = await server.GET<HistoryChartVo> (`/road-side/history/chart`,{params} );

        return res?.result; 
        }
     
    export interface OnlineSearchDto{
     /** 点位列表 */
 lotIds?:string[];
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
  id?:string;
 /** 车牌号-模糊查询-后台自动小写转大写 */
 plateNumber?:string;
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
    export interface OrderSearchDto{
     /** 具体日期 */
 date?:string;
 /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** ���位列表 */
 lotIds?:string[];
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
  id?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号-模糊查询-后台自动小写转大写 */
 plateNumber?:string;
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
    export interface OnlineOrderVo{
      id?:string;
  address?:string;
  placeNum?:string;
  plateNumber?:string;
  startAt?:string;
 /** 停车图片 */
 picture?:string;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 缴费类型 */
 chargeType?:MsgType;

    } 
    export interface OnlineChartVo{
      total?:number;
  lotNameMap?:{[key:string]:string};
  sumMap?:{[key:string]:number};
  timeMap?:{[key:string]:number};

    } 
    export interface OrderVo{
      id?:string;
 /** 微信用户ID */
 appUserId?:string;
 /** 开始停车时间 */
 startAt?:string;
 /** 结束停车时间 */
 endAt?:string;
  position?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 停车图片 */
 picture?:string;
 /** 区域 */
 areaName?:string;
 /** 街道 */
 streetName?:string;
 /** 停车点名字 */
 lotName?:string;
 /** 原始金额(单位:分) */
 originalMoney?:number;
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
 /** 使用优惠券名称 */
 couponName?:string;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 结束信息来源 */
 endType?:MsgType;
 /** 子订单数量 */
 itemCount?:number;
 /** 优惠数量 */
 discountCount?:number;
 /** 缴费类型 */
 chargeType?:MsgType;

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
    export interface ParkingCar{
      id?:string;
  appUserId?:string;
  carId?:string;
  plateNumber?:string;
  startAt?:string;
  areaId?:string;
  areaName?:string;
  streetId?:string;
  streetName?:string;
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
  address?:string;

    } 
    export interface PayOrder{
      id?:string;
  status?:MsgType;
  payAt?:string;
  mode?:MsgType;
  originalMoney?:number;
  targetMoney?:number;
  realMoney?:number;
  discountMoney?:number;
  startAt?:string;
  endAt?:string;
  duringTime?:number;
  picture?:string;
  appUserId?:string;
  payUserId?:string;
  carId?:string;
  plateNumber?:string;
  areaId?:string;
  areaName?:string;
  streetId?:string;
  streetName?:string;
  lotId?:string;
  lotName?:string;
  placeId?:string;
  placeNum?:string;
  beginType?:MsgType;
  endType?:MsgType;
  merged?:boolean;
  cdr?:boolean;
  chargeType?:MsgType;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    }
   export interface PostLogsSupportExport  extends KfLogSearchDto {
        
      
      }
  /** 
   * @description:  客服日志-导出
   * @param {KfLogSearchDto} data?,  
   * @return {*}
   */
  export const post_logs_support_export = async(data?:KfLogSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/support/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostLogsPatrolExport  extends PatrolLogSearchDto {
        
      
      }
  /** 
   * @description:  巡查日志-导出
   * @param {PatrolLogSearchDto} data?,  
   * @return {*}
   */
  export const post_logs_patrol_export = async(data?:PatrolLogSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/patrol/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostLogsLoginExport  extends LoginLogSearch {
        
      
      }
  /** 
   * @description:  登录日志-导出
   * @param {LoginLogSearch} data?,  
   * @return {*}
   */
  export const post_logs_login_export = async(data?:LoginLogSearch,) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/login/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostLogsJournalExport  extends JournalLogSearchDto {
        
      
      }
  /** 
   * @description:  值守日志-导出
   * @param {JournalLogSearchDto} data?,  
   * @return {*}
   */
  export const post_logs_journal_export = async(data?:JournalLogSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/logs/journal/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
    
   export interface GetLogsSupportChart  extends KfLogSearchDto {
        
      
      }
  /** 
   * @description:  客服日志图表
   * @param {GetLogsSupportChart} params? 
   * @return {*}
   */
  export const get_logs_support_chart = async(params?:GetLogsSupportChart) => {
    
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
    
   export interface GetLogsPatrolChart  extends PatrolLogSearchDto {
        
      
      }
  /** 
   * @description:  巡查日志图表
   * @param {GetLogsPatrolChart} params? 
   * @return {*}
   */
  export const get_logs_patrol_chart = async(params?:GetLogsPatrolChart) => {
    
  const res = await server.GET<LogChartVo> (`/logs/patrol/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetLogsOrder  extends OrderRecordSearchDto {
        
      
      }
  /** 
   * @description:  订单全日志查询
   * @param {GetLogsOrder} params? 
   * @return {*}
   */
  export const get_logs_order = async(params?:GetLogsOrder) => {
    
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
    
   export interface GetLogsJournalChart  extends JournalLogSearchDto {
        
      
      }
  /** 
   * @description:  值守日志图表
   * @param {GetLogsJournalChart} params? 
   * @return {*}
   */
  export const get_logs_journal_chart = async(params?:GetLogsJournalChart) => {
    
  const res = await server.GET<LogChartVo> (`/logs/journal/chart`,{params} );

        return res?.result; 
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
 /** 街道ID */
 streetId?:string;
 /** 区域ID */
 areaId?:string;
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
 /** 消息类型 */
 msgType?:number;
 /** 消息子类型 */
 msgSubType?:number;

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
    
   export interface PutSystemUsers  extends UserDto {
        
      
      }
  /** 
   * @description:  更新用户
   * @param {UserDto} data?,  
   * @return {*}
   */
  export const put_system_users = async(data?:UserDto,) => {
    
  const res = await server.PUT (`/system/users`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemUsers  extends UserDto {
        
      
      }
  /** 
   * @description:  添加用户
   * @param {UserDto} data?,  
   * @return {*}
   */
  export const post_system_users = async(data?:UserDto,) => {
    
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
    
   export interface PutSystemUsersResetPass  extends ResetPassDto {
        
      
      }
  /** 
   * @description:  更新用户密码
   * @param {ResetPassDto} data?,  
   * @return {*}
   */
  export const put_system_users_reset_pass = async(data?:ResetPassDto,) => {
    
  const res = await server.PUT (`/system/users/reset-pass`,{data} );

        return res?.success; 
        }
    
   export interface GetSystemRoles extends Paging{}
  /** 
   * @description:  角色列表-带分页
   * @param {GetSystemRoles} params? 
   * @return {*}
   */
  export const get_system_roles = async(params?:GetSystemRoles) => {
    
  const res = await server.GET<IPage<SysRole>> (`/system/roles`, {params} );

        return res?.result; 
        }
    
   export interface PutSystemRoles  extends RoleDto {
        
      
      }
  /** 
   * @description:  更新角色
   * @param {RoleDto} data?,  
   * @return {*}
   */
  export const put_system_roles = async(data?:RoleDto,) => {
    
  const res = await server.PUT (`/system/roles`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemRoles  extends RoleDto {
        
      
      }
  /** 
   * @description:  添加角色
   * @param {RoleDto} data?,  
   * @return {*}
   */
  export const post_system_roles = async(data?:RoleDto,) => {
    
  const res = await server.POST (`/system/roles`,{data} );

        return res?.success; 
        }
    
   export interface PutSystemMenus  extends MenuDto {
        
      
      }
  /** 
   * @description:  修改菜单
   * @param {MenuDto} data?,  
   * @return {*}
   */
  export const put_system_menus = async(data?:MenuDto,) => {
    
  const res = await server.PUT (`/system/menus`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemMenus  extends MenuDto {
        
      
      }
  /** 
   * @description:  添加菜单
   * @param {MenuDto} data?,  
   * @return {*}
   */
  export const post_system_menus = async(data?:MenuDto,) => {
    
  const res = await server.POST (`/system/menus`,{data} );

        return res?.success; 
        }
    
   export interface PutSystemDictValue  extends DictValueDto {
        
      
      }
  /** 
   * @description:  修改值
   * @param {DictValueDto} data?,  
   * @return {*}
   */
  export const put_system_dict_value = async(data?:DictValueDto,) => {
    
  const res = await server.PUT (`/system/dict/value`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemDictValue  extends DictValueDto {
        
      
      }
  /** 
   * @description:  添加值
   * @param {DictValueDto} data?,  
   * @return {*}
   */
  export const post_system_dict_value = async(data?:DictValueDto,) => {
    
  const res = await server.POST (`/system/dict/value`,{data} );

        return res?.success; 
        }
    
   export interface PutSystemDictType  extends DictTypeDto {
        
      
      }
  /** 
   * @description:  修改类型
   * @param {DictTypeDto} data?,  
   * @return {*}
   */
  export const put_system_dict_type = async(data?:DictTypeDto,) => {
    
  const res = await server.PUT (`/system/dict/type`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemDictType  extends DictTypeDto {
        
      
      }
  /** 
   * @description:  添加类型
   * @param {DictTypeDto} data?,  
   * @return {*}
   */
  export const post_system_dict_type = async(data?:DictTypeDto,) => {
    
  const res = await server.POST (`/system/dict/type`,{data} );

        return res?.success; 
        }
    
   export interface PutSystemDepartments  extends DepDto {
        
      
      }
  /** 
   * @description:  更新部门
   * @param {DepDto} data?,  
   * @return {*}
   */
  export const put_system_departments = async(data?:DepDto,) => {
    
  const res = await server.PUT (`/system/departments`,{data} );

        return res?.success; 
        }
    
   export interface PostSystemDepartments  extends DepDto {
        
      
      }
  /** 
   * @description:  添加部门
   * @param {DepDto} data?,  
   * @return {*}
   */
  export const post_system_departments = async(data?:DepDto,) => {
    
  const res = await server.POST (`/system/departments`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  获取可同步菜单列表
     
   * @return {*}
   */
  export const get_system_menus_sync = async() => {
    
  const res = await server.GET<SyncMenuVo[]> (`/system/menus/sync`, );

        return res?.result??[]; 
        }
    
   export interface PostSystemMenusSync  extends SyncMenuDto {
        
      
      }
  /** 
   * @description:  增量更新菜单
   * @param {SyncMenuDto} data?,  
   * @return {*}
   */
  export const post_system_menus_sync = async(data?:SyncMenuDto,) => {
    
  const res = await server.POST (`/system/menus/sync`,{data} );

        return res?.success; 
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
    
   
  /** 
   * @description:  可用角色列表
     
   * @return {*}
   */
  export const get_system_users_roles = async() => {
    
  const res = await server.GET<SysRole[]> (`/system/users/roles`, );

        return res?.result??[]; 
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
   * @description:  菜单权限树
     
   * @return {*}
   */
  export const get_system_menus_tree = async() => {
    
  const res = await server.GET<PermissionTree[]> (`/system/menus/tree`, );

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
    
   export interface GetSystemDictTypes extends Paging{}
  /** 
   * @description:  类型列表-分页
   * @param {GetSystemDictTypes} params? 
   * @return {*}
   */
  export const get_system_dict_types = async(params?:GetSystemDictTypes) => {
    
  const res = await server.GET<IPage<SysDictType>> (`/system/dict/types`, {params} );

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
   * @description:  部门列表树
     
   * @return {*}
   */
  export const get_system_departments_tree = async() => {
    
  const res = await server.GET<DepTree[]> (`/system/departments/tree`, );

        return res?.result??[]; 
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
 /** 状态 true正常false停用  默认正常 */
 status?:boolean;
 /** 角色ID数组(非必须) */
 roleIds?:string[];

    } 
    export interface ResetPassDto{
     /** 用户ID */
 id?:string;
 /** 用户密码 */
 password?:string;

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
 /** 资源类型 1目录 2菜单 3按钮 */
 resourceType?:number;
 /** 路由或跳转连接 */
 url?:string;
 /** 是否可见 默认可见 */
 visible?:boolean;
 /** 是否可用 默认可用 */
 status?:boolean;

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
 /** 上级部门ID */
 parentId?:string;
 /** 负责人姓名 */
 leader?:string;
 /** 负责人电话 */
 leaderPhone?:string;

    } 
    export interface SyncMenuDto{
      permissions?:string[];

    } 
    export interface UserSearchDto{
     /** 部门ID */
 depId?:string;
 /** 用户真实姓名 */
 name?:string;
 /** 电话号码 */
 phone?:string;

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
 /** 已有角色，逗号分隔 */
 roles?:string;
 /** 已有停车场，逗号分隔 */
 parks?:string;
 /** 创建时间 */
 createdAt?:string;

    } 
    export interface SysRole{
      id?:string;
  roleName?:string;
  code?:string;
  status?:boolean;
  sort?:number;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

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
 /** 子菜单 */
 children?:PermissionTree[];

    } 
    export interface SyncMenuVo{
     /** ID */
 id?:string;
 /** 父级权限ID */
 parentId?:string;
 /** 权限名称 */
 permissionName?:string;
 /** 资源类型 1目录 2菜单 3按钮 */
 resourceType?:number;
 /** 图标 */
 icon?:string;
 /** 权限code */
 code?:string;
 /** 地址(路由) */
 url?:string;
 /** 排序号 */
 sort?:number;
 /** 状态 true正常 false停用  默认正常 */
 status?:boolean;
  exist?:SyncMenuVo;
 /** 子菜单 */
 children?:SyncMenuVo[];

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
    export interface DepTree{
      id?:string;
 /** 上级部门ID */
 parentId?:string;
 /** 部门名称 */
 depName?:string;
 /** 负责人 */
 leader?:string;
 /** 负责人电话 */
 leaderPhone?:string;
 /** 排序 */
 sort?:number;
  createdAt?:string;
  updatedAt?:string;

    }
   export interface PutInformationTopUpDiscountsId  extends TopUpDiscountsDto {
        id?:string;
      
      }
  /** 
   * @description:  修改一个优惠活动
   * @param {TopUpDiscountsDto} data?,* @param {PutInformationTopUpDiscountsId} params? 
   * @return {*}
   */
  export const put_information_top_up_discounts_id = async(data?:TopUpDiscountsDto,params?:PutInformationTopUpDiscountsId) => {
    
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
    
   export interface PutInformationTopUpDiscountsItem  extends TopUpDiscountsItemSaveDto {
        
      
      }
  /** 
   * @description:  该活动修改一个子项目
   * @param {TopUpDiscountsItemSaveDto} data?,  
   * @return {*}
   */
  export const put_information_top_up_discounts_item = async(data?:TopUpDiscountsItemSaveDto,) => {
    
  const res = await server.PUT (`/information/top-up-discounts-item`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationTopUpDiscountsItem  extends TopUpDiscountsItemSaveDto {
        
      
      }
  /** 
   * @description:  该活动新增一个子项目
   * @param {TopUpDiscountsItemSaveDto} data?,  
   * @return {*}
   */
  export const post_information_top_up_discounts_item = async(data?:TopUpDiscountsItemSaveDto,) => {
    
  const res = await server.POST (`/information/top-up-discounts-item`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationStreets  extends StreetDto {
        
      
      }
  /** 
   * @description:  更新街道
   * @param {StreetDto} data?,  
   * @return {*}
   */
  export const put_information_streets = async(data?:StreetDto,) => {
    
  const res = await server.PUT (`/information/streets`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationStreets  extends StreetDto {
        
      
      }
  /** 
   * @description:  新增街道
   * @param {StreetDto} data?,  
   * @return {*}
   */
  export const post_information_streets = async(data?:StreetDto,) => {
    
  const res = await server.POST (`/information/streets`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationRules extends Paging{}
  /** 
   * @description:  收费规则列表-带分页
   * @param {GetInformationRules} params? 
   * @return {*}
   */
  export const get_information_rules = async(params?:GetInformationRules) => {
    
  const res = await server.GET<IPage<AccountRule>> (`/information/rules`, {params} );

        return res?.result; 
        }
    
   export interface PutInformationRules  extends AccountRule {
        
      
      }
  /** 
   * @description:  更新收费规则
   * @param {AccountRule} data?,  
   * @return {*}
   */
  export const put_information_rules = async(data?:AccountRule,) => {
    
  const res = await server.PUT (`/information/rules`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationRules  extends AccountRule {
        
      
      }
  /** 
   * @description:  新增收费规则
   * @param {AccountRule} data?,  
   * @return {*}
   */
  export const post_information_rules = async(data?:AccountRule,) => {
    
  const res = await server.POST (`/information/rules`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationRateRules extends Paging{}
  /** 
   * @description:  收费规则列表-带分页
   * @param {GetInformationRateRules} params? 
   * @return {*}
   */
  export const get_information_rate_rules = async(params?:GetInformationRateRules) => {
    
  const res = await server.GET<IPage<ParkRateRule>> (`/information/rate-rules`, {params} );

        return res?.result; 
        }
    
   export interface PutInformationRateRules  extends RateRuleDto {
        
      
      }
  /** 
   * @description:  更新收费规则
   * @param {RateRuleDto} data?,  
   * @return {*}
   */
  export const put_information_rate_rules = async(data?:RateRuleDto,) => {
    
  const res = await server.PUT (`/information/rate-rules`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationRateRules  extends RateRuleDto {
        
      
      }
  /** 
   * @description:  新增收费规则
   * @param {RateRuleDto} data?,  
   * @return {*}
   */
  export const post_information_rate_rules = async(data?:RateRuleDto,) => {
    
  const res = await server.POST (`/information/rate-rules`,{data} );

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
    
   export interface PutInformationPpls  extends PplEditSnDto {
        
      
      }
  /** 
   * @description:  编辑地锁
   * @param {PplEditSnDto} data?,  
   * @return {*}
   */
  export const put_information_ppls = async(data?:PplEditSnDto,) => {
    
  const res = await server.PUT (`/information/ppls`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationPpls  extends PplAddDto {
        
      
      }
  /** 
   * @description:  添加地锁
   * @param {PplAddDto} data?,  
   * @return {*}
   */
  export const post_information_ppls = async(data?:PplAddDto,) => {
    
  const res = await server.POST (`/information/ppls`,{data} );

        return res?.success; 
        }
    
   export interface DeleteInformationPpls  extends PplDeleteDto {
        
      
      }
  /** 
   * @description:  批量删除地锁
   * @param {PplDeleteDto} data?,  
   * @return {*}
   */
  export const delete_information_ppls = async(data?:PplDeleteDto,) => {
    
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
    
   export interface PutInformationPlaces  extends PlaceUpdDto {
        
      
      }
  /** 
   * @description:  修改停车位编号
   * @param {PlaceUpdDto} data?,  
   * @return {*}
   */
  export const put_information_places = async(data?:PlaceUpdDto,) => {
    
  const res = await server.PUT (`/information/places`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationPlaces  extends PlaceSaveDto {
        
      
      }
  /** 
   * @description:  新增停车位
   * @param {PlaceSaveDto} data?,  
   * @return {*}
   */
  export const post_information_places = async(data?:PlaceSaveDto,) => {
    
  const res = await server.POST (`/information/places`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationPlacesTransfer  extends PlaceTransferDto {
        
      
      }
  /** 
   * @description:  批量转移车位到新点
   * @param {PlaceTransferDto} data?,  
   * @return {*}
   */
  export const put_information_places_transfer = async(data?:PlaceTransferDto,) => {
    
  const res = await server.PUT (`/information/places/transfer`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationPlacesChargestatus  extends PlaceUpdChargeStatusDto {
        
      
      }
  /** 
   * @description:  修改车位收费状态
   * @param {PlaceUpdChargeStatusDto} data?,  
   * @return {*}
   */
  export const put_information_places_chargeStatus = async(data?:PlaceUpdChargeStatusDto,) => {
    
  const res = await server.PUT (`/information/places/chargeStatus`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationPlacesBatch  extends PlaceUpdBatchDto {
        
      
      }
  /** 
   * @description:  批量修改停车位编号
   * @param {PlaceUpdBatchDto} data?,  
   * @return {*}
   */
  export const put_information_places_batch = async(data?:PlaceUpdBatchDto,) => {
    
  const res = await server.PUT (`/information/places/batch`,{data} );

        return res?.success; 
        }
    
   export interface DeleteInformationPlacesBatch  extends PlaceDeleteDto {
        
      
      }
  /** 
   * @description:  删除停车位,批量
   * @param {PlaceDeleteDto} data?,  
   * @return {*}
   */
  export const delete_information_places_batch = async(data?:PlaceDeleteDto,) => {
    
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
    
   export interface PutInformationLots  extends LotDto {
        
      
      }
  /** 
   * @description:  更新停车点
   * @param {LotDto} data?,  
   * @return {*}
   */
  export const put_information_lots = async(data?:LotDto,) => {
    
  const res = await server.PUT (`/information/lots`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLots  extends LotDto {
        
      
      }
  /** 
   * @description:  新增停车点
   * @param {LotDto} data?,  
   * @return {*}
   */
  export const post_information_lots = async(data?:LotDto,) => {
    
  const res = await server.POST (`/information/lots`,{data} );

        return res?.success; 
        }
    
   export interface DeleteInformationLots  extends LotDeleteDto {
        
      
      }
  /** 
   * @description:  删除停车点
   * @param {LotDeleteDto} data?,  
   * @return {*}
   */
  export const delete_information_lots = async(data?:LotDeleteDto,) => {
    
  const res = await server.DELETE (`/information/lots`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationLotsLotidTicket  extends LotSetTicketDto {
        lotId?:string;
      
      }
  /** 
   * @description:  更改配置-小票开关
   * @param {LotSetTicketDto} data?,* @param {PutInformationLotsLotidTicket} params? 
   * @return {*}
   */
  export const put_information_lots_lotId_ticket = async(data?:LotSetTicketDto,params?:PutInformationLotsLotidTicket) => {
    
  const res = await server.PUT (`/information/lots/${params?.lotId}/ticket`,{data,params} );

        return res?.success; 
        }
    
   export interface PutInformationLotsLotidPayType  extends LotSetPayTypeDto {
        lotId?:string;
      
      }
  /** 
   * @description:  更改配置-支付类型
   * @param {LotSetPayTypeDto} data?,* @param {PutInformationLotsLotidPayType} params? 
   * @return {*}
   */
  export const put_information_lots_lotId_pay_type = async(data?:LotSetPayTypeDto,params?:PutInformationLotsLotidPayType) => {
    
  const res = await server.PUT (`/information/lots/${params?.lotId}/pay-type`,{data,params} );

        return res?.success; 
        }
    
   export interface PutInformationLotsStatus  extends LotStatusUpdBatchDto {
        
      
      }
  /** 
   * @description:  更新停车点位状态
   * @param {LotStatusUpdBatchDto} data?,  
   * @return {*}
   */
  export const put_information_lots_status = async(data?:LotStatusUpdBatchDto,) => {
    
  const res = await server.PUT (`/information/lots/status`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationLotsPolice  extends LotSetPoliceDto {
        
      
      }
  /** 
   * @description:  设置点位所属警察局
   * @param {LotSetPoliceDto} data?,  
   * @return {*}
   */
  export const put_information_lots_police = async(data?:LotSetPoliceDto,) => {
    
  const res = await server.PUT (`/information/lots/police`,{data} );

        return res?.success; 
        }
    
   export interface PutInformationLotsPeriod  extends LotPeriodDto {
        
      
      }
  /** 
   * @description:  设置点位周期
   * @param {LotPeriodDto} data?,  
   * @return {*}
   */
  export const put_information_lots_period = async(data?:LotPeriodDto,) => {
    
  const res = await server.PUT (`/information/lots/period`,{data} );

        return res?.success; 
        }
    
   
  /** 
   * @description:  查停车点位组列表
     
   * @return {*}
   */
  export const get_information_lot_group = async() => {
    
  const res = await server.GET<LotGroupVo[]> (`/information/lot-group`, );

        return res?.result??[]; 
        }
    
   export interface PutInformationLotGroup  extends LotGroupDto {
        
      
      }
  /** 
   * @description:  编辑停车点位组
   * @param {LotGroupDto} data?,  
   * @return {*}
   */
  export const put_information_lot_group = async(data?:LotGroupDto,) => {
    
  const res = await server.PUT (`/information/lot-group`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLotGroup  extends LotGroupDto {
        
      
      }
  /** 
   * @description:  新增停车点位组
   * @param {LotGroupDto} data?,  
   * @return {*}
   */
  export const post_information_lot_group = async(data?:LotGroupDto,) => {
    
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
    
   export interface PutInformationGeoms  extends GeomEditDto {
        
      
      }
  /** 
   * @description:  编辑地磁
   * @param {GeomEditDto} data?,  
   * @return {*}
   */
  export const put_information_geoms = async(data?:GeomEditDto,) => {
    
  const res = await server.PUT (`/information/geoms`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationGeoms  extends GeomAddDto {
        
      
      }
  /** 
   * @description:  添加地磁
   * @param {GeomAddDto} data?,  
   * @return {*}
   */
  export const post_information_geoms = async(data?:GeomAddDto,) => {
    
  const res = await server.POST (`/information/geoms`,{data} );

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
    
   export interface PutInformationFreecars  extends FreeCarDto {
        
      
      }
  /** 
   * @description:  修改免费车辆
   * @param {FreeCarDto} data?,  
   * @return {*}
   */
  export const put_information_freeCars = async(data?:FreeCarDto,) => {
    
  const res = await server.PUT (`/information/freeCars`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationFreecars  extends FreeCarDto {
        
      
      }
  /** 
   * @description:  添加免费车辆
   * @param {FreeCarDto} data?,  
   * @return {*}
   */
  export const post_information_freeCars = async(data?:FreeCarDto,) => {
    
  const res = await server.POST (`/information/freeCars`,{data} );

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
   * @description:  免费车辆分组列表
     
   * @return {*}
   */
  export const get_information_freeCarGroups = async() => {
    
  const res = await server.GET<FreeCarGroupVo[]> (`/information/freeCarGroups`, );

        return res?.result??[]; 
        }
    
   export interface PutInformationFreecargroups  extends FreeCarGroupAddDto {
        
      
      }
  /** 
   * @description:  编辑免费车辆分组
   * @param {FreeCarGroupAddDto} data?,  
   * @return {*}
   */
  export const put_information_freeCarGroups = async(data?:FreeCarGroupAddDto,) => {
    
  const res = await server.PUT (`/information/freeCarGroups`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationFreecargroups  extends FreeCarGroupAddDto {
        
      
      }
  /** 
   * @description:  添加免费车辆分组
   * @param {FreeCarGroupAddDto} data?,  
   * @return {*}
   */
  export const post_information_freeCarGroups = async(data?:FreeCarGroupAddDto,) => {
    
  const res = await server.POST (`/information/freeCarGroups`,{data} );

        return res?.success; 
        }
    
   export interface GetInformationFreeRules extends Paging{}
  /** 
   * @description:  假日免费规则列表-带分页
   * @param {GetInformationFreeRules} params? 
   * @return {*}
   */
  export const get_information_free_rules = async(params?:GetInformationFreeRules) => {
    
  const res = await server.GET<IPage<AccountFreeRule>> (`/information/free-rules`, {params} );

        return res?.result; 
        }
    
   export interface PutInformationFreeRules  extends AccountFreeRuleDto {
        
      
      }
  /** 
   * @description:  更新假日免费规则
   * @param {AccountFreeRuleDto} data?,  
   * @return {*}
   */
  export const put_information_free_rules = async(data?:AccountFreeRuleDto,) => {
    
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
    
   export interface GetInformationAreas extends Paging{}
  /** 
   * @description:  区域列表-带分页
   * @param {GetInformationAreas} params? 
   * @return {*}
   */
  export const get_information_areas = async(params?:GetInformationAreas) => {
    
  const res = await server.GET<IPage<Area>> (`/information/areas`, {params} );

        return res?.result; 
        }
    
   export interface PutInformationAreas  extends AreaDto {
        
      
      }
  /** 
   * @description:  更新区域
   * @param {AreaDto} data?,  
   * @return {*}
   */
  export const put_information_areas = async(data?:AreaDto,) => {
    
  const res = await server.PUT (`/information/areas`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationAreas  extends AreaDto {
        
      
      }
  /** 
   * @description:  新增区域
   * @param {AreaDto} data?,  
   * @return {*}
   */
  export const post_information_areas = async(data?:AreaDto,) => {
    
  const res = await server.POST (`/information/areas`,{data} );

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
    
   export interface PostInformationTopUpDiscounts  extends TopUpDiscountsDto {
        
      
      }
  /** 
   * @description:  新增一个优惠活动
   * @param {TopUpDiscountsDto} data?,  
   * @return {*}
   */
  export const post_information_top_up_discounts = async(data?:TopUpDiscountsDto,) => {
    
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
    
   export interface PostInformationSubscribeTemplatesSend  extends SubscribeMessageSendDto {
        
      
      }
  /** 
   * @description:  发送消息
   * @param {SubscribeMessageSendDto} data?,  
   * @return {*}
   */
  export const post_information_subscribe_templates_send = async(data?:SubscribeMessageSendDto,) => {
    
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
    
   export interface PostInformationPplsExport  extends PplSearchDto {
        
      
      }
  /** 
   * @description:  地锁列表导出
   * @param {PplSearchDto} data?,  
   * @return {*}
   */
  export const post_information_ppls_export = async(data?:PplSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/ppls/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
    
   export interface PostInformationLotTreeTreeUpd  extends LotTreeDto {
        
      
      }
  /** 
   * @description:  更新停车点-树
   * @param {LotTreeDto} data?,  
   * @return {*}
   */
  export const post_information_lot_tree_tree_upd = async(data?:LotTreeDto,) => {
    
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
    
   export interface PostInformationLotTreeTreeAdd  extends LotTreeDto {
        
      
      }
  /** 
   * @description:  新增停车点-树
   * @param {LotTreeDto} data?,  
   * @return {*}
   */
  export const post_information_lot_tree_tree_add = async(data?:LotTreeDto,) => {
    
  const res = await server.POST (`/information/lot-tree/tree-add`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLotTreeLotUpd  extends LotWithTreeDto {
        
      
      }
  /** 
   * @description:  更新停车点-位置
   * @param {LotWithTreeDto} data?,  
   * @return {*}
   */
  export const post_information_lot_tree_lot_upd = async(data?:LotWithTreeDto,) => {
    
  const res = await server.POST (`/information/lot-tree/lot-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationLotTreeLotDelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车点-位置
   * @param {PostInformationLotTreeLotDelId} params? 
   * @return {*}
   */
  export const post_information_lot_tree_lot_del_id = async(params?:PostInformationLotTreeLotDelId) => {
    
  const res = await server.POST (`/information/lot-tree/lot-del/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface PostInformationLotTreeLotAdd  extends LotWithTreeDto {
        
      
      }
  /** 
   * @description:  新增停车点-位置
   * @param {LotWithTreeDto} data?,  
   * @return {*}
   */
  export const post_information_lot_tree_lot_add = async(data?:LotWithTreeDto,) => {
    
  const res = await server.POST (`/information/lot-tree/lot-add`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationGeomsSwitchEnabled  extends GeomEnabledDto {
        
      
      }
  /** 
   * @description:  地磁启用禁用
   * @param {GeomEnabledDto} data?,  
   * @return {*}
   */
  export const post_information_geoms_switch_enabled = async(data?:GeomEnabledDto,) => {
    
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
    
   export interface PostInformationGeomsExport  extends GeomSearchDto {
        
      
      }
  /** 
   * @description:  地磁列表导出
   * @param {GeomSearchDto} data?,  
   * @return {*}
   */
  export const post_information_geoms_export = async(data?:GeomSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/geoms/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostInformationFreecarsExport  extends FreeCarsSearchDto {
        
      
      }
  /** 
   * @description:  免费车辆列表-excel导出
   * @param {FreeCarsSearchDto} data?,  
   * @return {*}
   */
  export const post_information_freeCars_export = async(data?:FreeCarsSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/information/freeCars/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostInformationDevicesUnbindppl  extends DeviceUnBindDto {
        
      
      }
  /** 
   * @description:  解绑地锁
   * @param {DeviceUnBindDto} data?,  
   * @return {*}
   */
  export const post_information_devices_unbindPpl = async(data?:DeviceUnBindDto,) => {
    
  const res = await server.POST (`/information/devices/unbindPpl`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationDevicesUnbindgeom  extends DeviceUnBindDto {
        
      
      }
  /** 
   * @description:  解绑地磁
   * @param {DeviceUnBindDto} data?,  
   * @return {*}
   */
  export const post_information_devices_unbindGeom = async(data?:DeviceUnBindDto,) => {
    
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
    
   export interface PostInformationDevicesBindppl  extends DeviceBindDto {
        
      
      }
  /** 
   * @description:  绑定地锁
   * @param {DeviceBindDto} data?,  
   * @return {*}
   */
  export const post_information_devices_bindPpl = async(data?:DeviceBindDto,) => {
    
  const res = await server.POST (`/information/devices/bindPpl`,{data} );

        return res?.success; 
        }
    
   export interface PostInformationDevicesBindgeom  extends DeviceBindDto {
        
      
      }
  /** 
   * @description:  绑定地磁
   * @param {DeviceBindDto} data?,  
   * @return {*}
   */
  export const post_information_devices_bindGeom = async(data?:DeviceBindDto,) => {
    
  const res = await server.POST (`/information/devices/bindGeom`,{data} );

        return res?.success; 
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
    
   export interface GetInformationSubscribeTemplates extends Paging{}
  /** 
   * @description:  小程序订阅消息模板-带分页
   * @param {GetInformationSubscribeTemplates} params? 
   * @return {*}
   */
  export const get_information_subscribe_templates = async(params?:GetInformationSubscribeTemplates) => {
    
  const res = await server.GET<IPage<SubscribeMessageTemplate>> (`/information/subscribe-templates`, {params} );

        return res?.result; 
        }
    
   export interface GetInformationStreetsStreetidLots   {
        streetId?:string;
      
      }
  /** 
   * @description:  某街道下的停车点列表
   * @param {GetInformationStreetsStreetidLots} params? 
   * @return {*}
   */
  export const get_information_streets_streetId_lots = async(params?:GetInformationStreetsStreetidLots) => {
    
  const res = await server.GET<InformationLotVo[]> (`/information/streets/${params?.streetId}/lots`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  收费规则列表
     
   * @return {*}
   */
  export const get_information_rules_list = async() => {
    
  const res = await server.GET<AccountRule[]> (`/information/rules/list`, );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  收费规则列表
     
   * @return {*}
   */
  export const get_information_rate_rules_list = async() => {
    
  const res = await server.GET<ParkRateRule[]> (`/information/rate-rules/list`, );

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
    
   export interface GetInformationLotsTree  extends LotTreeSearchDto {
        
      
      }
  /** 
   * @description:  停车点树结构
   * @param {GetInformationLotsTree} params? 
   * @return {*}
   */
  export const get_information_lots_tree = async(params?:GetInformationLotsTree) => {
    
  const res = await server.GET<Tree[]> (`/information/lots/tree`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  停车点树
     
   * @return {*}
   */
  export const get_information_lot_tree_tree = async() => {
    
  const res = await server.GET<LotTree> (`/information/lot-tree/tree`, );

        return res?.result; 
        }
    
   export interface GetInformationLotTreeTreeLotId  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  停车点-树下的所有位置-带分页
   * @param {GetInformationLotTreeTreeLotId} params? 
   * @return {*}
   */
  export const get_information_lot_tree_tree_lot_id = async(params?:GetInformationLotTreeTreeLotId) => {
    
  const res = await server.GET<IPage<LotTree>> (`/information/lot-tree/tree-lot/${params?.id}`,{params} );

        return res?.result; 
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
    
   
  /** 
   * @description:  获取验证码
     
   * @return {*}
   */
  export const get_information_free_rules_sms = async() => {
    
  const res = await server.GET (`/information/free-rules/sms`, );

        return res?.success; 
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
    
   export interface GetInformationAreasAreaidStreets   {
        areaId?:string;ruleId?:string;
      
      }
  /** 
   * @description:  某区域下的街道列表
   * @param {GetInformationAreasAreaidStreets} params? 
   * @return {*}
   */
  export const get_information_areas_areaId_streets = async(params?:GetInformationAreasAreaidStreets) => {
    
  const res = await server.GET<InformationStreetVo[]> (`/information/areas/${params?.areaId}/streets`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  区域列表
     
   * @return {*}
   */
  export const get_information_areas_list = async() => {
    
  const res = await server.GET<InformationAreaVo[]> (`/information/areas/list`, );

        return res?.result??[]; 
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
    
   export interface DeleteInformationStreetsStreetid   {
        streetId?:string;
      
      }
  /** 
   * @description:  删除街道
   * @param {DeleteInformationStreetsStreetid} params? 
   * @return {*}
   */
  export const delete_information_streets_streetId = async(params?:DeleteInformationStreetsStreetid) => {
    
  const res = await server.DELETE (`/information/streets/${params?.streetId}`,{params} );

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
    
   export interface DeleteInformationRateRulesRuleid   {
        ruleId?:string;
      
      }
  /** 
   * @description:  删除收费规则
   * @param {DeleteInformationRateRulesRuleid} params? 
   * @return {*}
   */
  export const delete_information_rate_rules_ruleId = async(params?:DeleteInformationRateRulesRuleid) => {
    
  const res = await server.DELETE (`/information/rate-rules/${params?.ruleId}`,{params} );

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
    
   export interface DeleteInformationFreecargroupsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除免费车辆分组
   * @param {DeleteInformationFreecargroupsId} params? 
   * @return {*}
   */
  export const delete_information_freeCarGroups_id = async(params?:DeleteInformationFreecargroupsId) => {
    
  const res = await server.DELETE (`/information/freeCarGroups/${params?.id}`,{params} );

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
    
   export interface DeleteInformationAreasAreaid   {
        areaId?:string;
      
      }
  /** 
   * @description:  删除区域
   * @param {DeleteInformationAreasAreaid} params? 
   * @return {*}
   */
  export const delete_information_areas_areaId = async(params?:DeleteInformationAreasAreaid) => {
    
  const res = await server.DELETE (`/information/areas/${params?.areaId}`,{params} );

        return res?.success; 
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
 /** 类型 */
 type?:number;

    } 
    export interface TopUpDiscountsItemSaveDto{
     /** id,在新增时是主表id,修改时是自己的id */
 id?:string;
 /** 充值的金额,单位元 */
 amount?:number;
 /** 实际到账金额,单位元 */
 actualAmount?:number;

    } 
    export interface StreetDto{
      id?:string;
 /** 区域ID */
 areaId?:string;
 /** 名称 */
 name?:string;
 /** 计费规则表ID */
 accountingRuleId?:string;
 /** 收费编号 */
 number?:string;

    } 
    export interface AccountRule{
      id?:string;
  name?:string;
  normal?:Rule;
  newEnergy?:Rule;
  cycleType?:MsgType;
  describe?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface Rule{
      daytime?:RuleItem;
  night?:RuleItem;
  maxPrice?:number;

    } 
    export interface RuleCycle{
      freeMin?:number;
  cycleItems?:RuleCycleItem[];

    } 
    export interface RuleCycleItem{
      sort?:number;
  levelMin?:number;
  unitMin?:number;
  unitPrice?:number;

    } 
    export interface RuleItem{
      computeBegin?:string;
  computeEnd?:string;
  firstCycle?:RuleCycle;
  thenCycle?:RuleCycle;
  maxPrice?:number;
  freeMinJoin?:boolean;

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
     /** 新停车点ID */
 newLotId?:string;
 /** 原停车点ID */
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
 /** 街道ID */
 streetId?:string;
 /** 名称 */
 name?:string;
 /** 停车点编号 */
 lotNum?:string;
 /** 朝向,从 */
 directionFrom?:number;
 /** 朝向,到 */
 directionTo?:number;
 /** 腾讯地图经度 */
 longitude?:number;
 /** 腾讯地图纬度 */
 latitude?:number;
 /** 0 地磁 1地锁 */
 type?:number;
 /** （1）无（2）自营（3）志向（4）臻信诚 */
 laborType?:number;
 /** 是否是纯人工收费 - 默认false */
 manual?:boolean;

    } 
    export interface LotSetTicketDto{
     /** 是否开启小票 */
 ticket?:boolean;

    } 
    export interface LotSetPayTypeDto{
     /** 支付类型 1 小程序 2微信 */
 payType?:number;

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
    export interface LotGroupDto{
      id?:string;
  name?:string;
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
    export interface FreeCarGroupAddDto{
     /** id，编辑才需要 */
 id?:string;
 /** 分组名称 */
 name?:string;
 /** 分组点位列表 */
 lotIds?:string[];

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
 /** 验证码 */
 code?:string;

    } 
    export interface AreaDto{
      id?:string;
 /** 区域名称 */
 name?:string;
 /** 区域编号 */
 number?:string;

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
    export interface ImportResult{
      success?:number;
  error?:number;

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
 /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
 /** 停车点ID */
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
    export interface LotTreeDto{
      id?:string;
  pid?:string;
 /** 名称 */
 name?:string;
 /** 计费规则ID */
 accRuleId?:string;
 /** 编号前缀 */
 number?:string;
 /** 微信支付id */
 wxPayId?:number;

    } 
    export interface LotWithTreeDto{
      id?:string;
  pid?:string;
 /** 名称 */
 name?:string;
 /** 计费规则ID */
 accRuleId?:string;
 /** 编号前缀 */
 number?:string;
 /** 微信支付id */
 wxPayId?:number;
 /** 停车位总数(只有在lot=true情况下才生效) */
 total?:number;
 /** 朝向,从 */
 directionFrom?:number;
 /** 朝向,到 */
 directionTo?:number;
 /** 腾讯地图经度 */
 longitude?:number;
 /** 腾讯地图纬度 */
 latitude?:number;
 /** 0 地磁 1地锁 */
 type?:number;
 /** （1）无（2）自营（3）志向（4）臻信诚 */
 laborType?:number;
 /** 是否是纯人工收费 - 默认false */
 manual?:boolean;

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
 /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
 /** 停车点ID */
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
    export interface TopUpDiscounts{
      id?:string;
  name?:string;
  beginTime?:string;
  endTime?:string;
  type?:MsgType;
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
    export interface InformationLotVo{
      id?:string;
  name?:string;
  lotNum?:string;
  directionFrom?:MsgType;
  directionTo?:MsgType;
  address?:string;
  longitude?:number;
  latitude?:number;
  total?:number;
  type?:MsgType;
  laborType?:MsgType;
  manual?:boolean;
  period?:string;
  runningStatus?:number;

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
 /** 点位 */
 address?:string;
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
    export interface LotSearchDto{
     /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
 /** 停车点ID */
 lotId?:string;
  payType?:number;
  ticket?:boolean;
  police?:boolean;
  type?:number;
  laborType?:number;
  runningStatus?:number;
 /** 期数 */
 period?:string;

    } 
    export interface LotVo{
      id?:string;
 /** 区域 */
 areaName?:string;
 /** 街道 */
 streetName?:string;
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

    } 
    export interface LotTreeSearchDto{
      name?:string;
  type?:number;
  laborType?:number;
  visitable?:boolean;

    } 
    export interface Tree{
      id?:string;
  name?:string;
  status?:boolean;
  type?:number;

    } 
    export interface LotTree{
      id?:string;
  pid?:string;
  name?:string;
  lft?:number;
  rgt?:number;
  level?:number;
  lot?:boolean;
  accRuleId?:string;
  number?:string;
  wxPayId?:number;
  total?:number;
  child?:LotTree[];
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface LotGroupVo{
      id?:string;
  name?:string;
  lotNames?:string;
  lotIds?:string[];

    } 
    export interface GeomVo{
      id?:string;
 /** 点位 */
 address?:string;
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
    export interface TimeLocalDate{
      date?:string;

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
    export interface FreeCarGroupVo{
     /** 分组ID */
 id?:string;
 /** 组名 */
 name?:string;
 /** 点位名 */
 lotNames?:string;
 /** 点位id */
 lotIds?:string[];
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
 /** 区域ID */
 areaId?:string;
 /** 街道ID */
 streetId?:string;
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
 address?:string;
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
    export interface DeviceImportReport{
      id?:string;
  userName?:string;
  result?:string;
  originFile?:string;
  errorFile?:string;
  type?:number;
  createdAt?:string;

    } 
    export interface Area{
      id?:string;
  name?:string;
  number?:string;
  wxMch?:number;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface InformationStreetVo{
      id?:string;
  name?:string;
  ruleId?:string;
  ruleName?:string;
  total?:number;
  number?:string;

    } 
    export interface InformationAreaVo{
      id?:string;
  name?:string;
  number?:string;
  streetTotal?:number;
  lotTotal?:number;
  placeTotal?:number;

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
    
   export interface PutTccYdps  extends YdpDto {
        
      
      }
  /** 
   * @description:  更新诱导屏
   * @param {YdpDto} data?,  
   * @return {*}
   */
  export const put_tcc_ydps = async(data?:YdpDto,) => {
    
  const res = await server.PUT (`/tcc/ydps`,{data} );

        return res?.success; 
        }
    
   export interface PostTccYdps  extends YdpDto {
        
      
      }
  /** 
   * @description:  添加诱导屏
   * @param {YdpDto} data?,  
   * @return {*}
   */
  export const post_tcc_ydps = async(data?:YdpDto,) => {
    
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
    
   export interface PutTccYdpsCards  extends YdpCardDto {
        
      
      }
  /** 
   * @description:  编辑卡号
   * @param {YdpCardDto} data?,  
   * @return {*}
   */
  export const put_tcc_ydps_cards = async(data?:YdpCardDto,) => {
    
  const res = await server.PUT (`/tcc/ydps/cards`,{data} );

        return res?.success; 
        }
    
   export interface PostTccYdpsCards  extends YdpCardDto {
        
      
      }
  /** 
   * @description:  添加卡号
   * @param {YdpCardDto} data?,  
   * @return {*}
   */
  export const post_tcc_ydps_cards = async(data?:YdpCardDto,) => {
    
  const res = await server.POST (`/tcc/ydps/cards`,{data} );

        return res?.success; 
        }
    
   export interface GetTccVoiceText extends Paging{}
  /** 
   * @description:  查询-分页
   * @param {GetTccVoiceText} params? 
   * @return {*}
   */
  export const get_tcc_voice_text = async(params?:GetTccVoiceText) => {
    
  const res = await server.GET<IPage<DztccVoiceText>> (`/tcc/voice-text`, {params} );

        return res?.result; 
        }
    
   export interface PutTccVoiceText  extends DztccVoiceText {
        
      
      }
  /** 
   * @description:  修改
   * @param {DztccVoiceText} data?,  
   * @return {*}
   */
  export const put_tcc_voice_text = async(data?:DztccVoiceText,) => {
    
  const res = await server.PUT (`/tcc/voice-text`,{data} );

        return res?.success; 
        }
    
   export interface GetTccMerchants  extends DztccMerchantSearchDto,Paging {
        
      
      }
  /** 
   * @description:  停车场商户-带分页
   * @param {GetTccMerchants} params? 
   * @return {*}
   */
  export const get_tcc_merchants = async(params?:GetTccMerchants) => {
    
  const res = await server.GET<IPage<DztccMerchantVo>> (`/tcc/merchants`,{params} );

        return res?.result; 
        }
    
   export interface PutTccMerchants  extends DztccMerchantDto {
        
      
      }
  /** 
   * @description:  更新停车场商户
   * @param {DztccMerchantDto} data?,  
   * @return {*}
   */
  export const put_tcc_merchants = async(data?:DztccMerchantDto,) => {
    
  const res = await server.PUT (`/tcc/merchants`,{data} );

        return res?.success; 
        }
    
   export interface PostTccMerchants  extends DztccMerchantDto {
        
      
      }
  /** 
   * @description:  添加停车场商户
   * @param {DztccMerchantDto} data?,  
   * @return {*}
   */
  export const post_tcc_merchants = async(data?:DztccMerchantDto,) => {
    
  const res = await server.POST (`/tcc/merchants`,{data} );

        return res?.success; 
        }
    
   export interface PutTccCarsSpecial  extends SpecialCarDto {
        
      
      }
  /** 
   * @description:  特殊车辆-编辑
   * @param {SpecialCarDto} data?,  
   * @return {*}
   */
  export const put_tcc_cars_special = async(data?:SpecialCarDto,) => {
    
  const res = await server.PUT (`/tcc/cars/special`,{data} );

        return res?.success; 
        }
    
   export interface PostTccCarsSpecial  extends SpecialCarDto {
        
      
      }
  /** 
   * @description:  特殊车辆-新增
   * @param {SpecialCarDto} data?,  
   * @return {*}
   */
  export const post_tcc_cars_special = async(data?:SpecialCarDto,) => {
    
  const res = await server.POST (`/tcc/cars/special`,{data} );

        return res?.success; 
        }
    
   export interface PutTccBasicInfoChannel  extends ChannelDto {
        
      
      }
  /** 
   * @description:  编辑通道
   * @param {ChannelDto} data?,  
   * @return {*}
   */
  export const put_tcc_basic_info_channel = async(data?:ChannelDto,) => {
    
  const res = await server.PUT (`/tcc/basic-info/channel`,{data} );

        return res?.success; 
        }
    
   export interface PostTccBasicInfoChannel  extends ChannelDto {
        
      
      }
  /** 
   * @description:  添加通道
   * @param {ChannelDto} data?,  
   * @return {*}
   */
  export const post_tcc_basic_info_channel = async(data?:ChannelDto,) => {
    
  const res = await server.POST (`/tcc/basic-info/channel`,{data} );

        return res?.success; 
        }
    
   export interface PostTccOrdersExport  extends HistorySearchDto {
        
      
      }
  /** 
   * @description:  历史停车-导出
   * @param {HistorySearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_orders_export = async(data?:HistorySearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/orders/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccMonthlyUpdMonthBatch  extends UpdMonthBatchDto {
        
      
      }
  /** 
   * @description:  批量管理包月状态
   * @param {UpdMonthBatchDto} data?,  
   * @return {*}
   */
  export const post_tcc_monthly_upd_month_batch = async(data?:UpdMonthBatchDto,) => {
    
  const res = await server.POST (`/tcc/monthly/upd-month-batch`,{data} );

        return res?.success; 
        }
    
   export interface PostTccMonthlyRemoveApply  extends RemoveApplyDto {
        
      
      }
  /** 
   * @description:  移除申请
   * @param {RemoveApplyDto} data?,  
   * @return {*}
   */
  export const post_tcc_monthly_remove_apply = async(data?:RemoveApplyDto,) => {
    
  const res = await server.POST (`/tcc/monthly/remove-apply`,{data} );

        return res?.success; 
        }
    
   export interface PostTccMonthlyMonthUpd  extends UpdMonthDto {
        
      
      }
  /** 
   * @description:  更新停车场包月信息
   * @param {UpdMonthDto} data?,  
   * @return {*}
   */
  export const post_tcc_monthly_month_upd = async(data?:UpdMonthDto,) => {
    
  const res = await server.POST (`/tcc/monthly/month-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostTccMonthlyMonthApply  extends QueryApplyDto,Paging {
        
      
      }
  /** 
   * @description:  申请列表
   * @param {QueryApplyDto} data?,* @param {PostTccMonthlyMonthApply} params? 
   * @return {*}
   */
  export const post_tcc_monthly_month_apply = async(data?:QueryApplyDto,params?:PostTccMonthlyMonthApply) => {
    
  const res = await server.POST<IPage<ApplyVo>> (`/tcc/monthly/month-apply`,{data,params} );

        return res?.result; 
        }
    
   export interface PostTccMerchantsRechargeExport  extends LogSearchDto {
        
      
      }
  /** 
   * @description:  充值记录-导出
   * @param {LogSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_merchants_recharge_export = async(data?:LogSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/merchants/recharge/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccMerchantsPaymentExport  extends LogSearchDto {
        
      
      }
  /** 
   * @description:  缴费记录-导出
   * @param {LogSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_merchants_payment_export = async(data?:LogSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/merchants/payment/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccMerchantsExport  extends DztccMerchantSearchDto {
        
      
      }
  /** 
   * @description:  停车场商户-excel导出
   * @param {DztccMerchantSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_merchants_export = async(data?:DztccMerchantSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/merchants/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccFinancialTemporaryExport  extends FinancialSearchDto {
        
      
      }
  /** 
   * @description:  临停财务-导出
   * @param {FinancialSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_financial_temporary_export = async(data?:FinancialSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/financial/temporary/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccFinancialMonthRechargeExport  extends FinancialSearchDto {
        
      
      }
  /** 
   * @description:  月卡充值数据-导出
   * @param {FinancialSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_financial_month_recharge_export = async(data?:FinancialSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/financial/month-recharge/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccFinancialAllExport  extends FinancialSearchDto {
        
      
      }
  /** 
   * @description:  财务总计-导出
   * @param {FinancialSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_financial_all_export = async(data?:FinancialSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/financial/all/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccCarsExport  extends TccCarSearchDto {
        
      
      }
  /** 
   * @description:  车辆管理-导出
   * @param {TccCarSearchDto} data?,  
   * @return {*}
   */
  export const post_tcc_cars_export = async(data?:TccCarSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/cars/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccBasicInfoParkidQrcode   {
        parkId?:string;
      
      }
  /** 
   * @description:  二维码导出
   * @param {PostTccBasicInfoParkidQrcode} params? 
   * @return {*}
   */
  export const post_tcc_basic_info_parkId_qrcode = async(params?:PostTccBasicInfoParkidQrcode) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/basic-info/${params?.parkId}/qrcode`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccBasicInfoSyncMcId   {
        id?:string;
      
      }
  /** 
   * @description:  同步信息(月租,通道)
   * @param {PostTccBasicInfoSyncMcId} params? 
   * @return {*}
   */
  export const post_tcc_basic_info_sync_mc_id = async(params?:PostTccBasicInfoSyncMcId) => {
    
  const res = await server.POST (`/tcc/basic-info/sync-mc/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetTccBasicInfoRuleId   {
        id?:string;
      
      }
  /** 
   * @description:  停车场收费规则
   * @param {GetTccBasicInfoRuleId} params? 
   * @return {*}
   */
  export const get_tcc_basic_info_rule_id = async(params?:GetTccBasicInfoRuleId) => {
    
  const res = await server.GET<Rule> (`/tcc/basic-info/rule/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface PostTccBasicInfoRuleId  extends Rule {
        id?:string;
      
      }
  /** 
   * @description:  保存停车场收费规则
   * @param {Rule} data?,* @param {PostTccBasicInfoRuleId} params? 
   * @return {*}
   */
  export const post_tcc_basic_info_rule_id = async(data?:Rule,params?:PostTccBasicInfoRuleId) => {
    
  const res = await server.POST (`/tcc/basic-info/rule/${params?.id}`,{data,params} );

        return res?.success; 
        }
    
   export interface PostTccBasicInfoParkUpd  extends UpdBasicInfoDto {
        
      
      }
  /** 
   * @description:  手动更新停车场
   * @param {UpdBasicInfoDto} data?,  
   * @return {*}
   */
  export const post_tcc_basic_info_park_upd = async(data?:UpdBasicInfoDto,) => {
    
  const res = await server.POST (`/tcc/basic-info/park-upd`,{data} );

        return res?.success; 
        }
    
   export interface PostTccBasicInfoParkAdd  extends ParkAddDto {
        
      
      }
  /** 
   * @description:  新增停车场
   * @param {ParkAddDto} data?,  
   * @return {*}
   */
  export const post_tcc_basic_info_park_add = async(data?:ParkAddDto,) => {
    
  const res = await server.POST<Boolean> (`/tcc/basic-info/park-add`,{data} );

        return res?.result; 
        }
    
   export interface PostTccBasicInfoMembers  extends QueryMemberDto,Paging {
        
      
      }
  /** 
   * @description:  会员信息-分页
   * @param {QueryMemberDto} data?,* @param {PostTccBasicInfoMembers} params? 
   * @return {*}
   */
  export const post_tcc_basic_info_members = async(data?:QueryMemberDto,params?:PostTccBasicInfoMembers) => {
    
  const res = await server.POST<IPage<MemberVo>> (`/tcc/basic-info/members`,{data,params} );

        return res?.result; 
        }
    
   export interface PostTccBasicInfoMembersExport  extends QueryMemberDto {
        
      
      }
  /** 
   * @description:  会员信息-导出
   * @param {QueryMemberDto} data?,  
   * @return {*}
   */
  export const post_tcc_basic_info_members_export = async(data?:QueryMemberDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/tcc/basic-info/members/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostTccBasicInfoMember  extends DztccMemberDto {
        
      
      }
  /** 
   * @description:  会员信息-添加会员
   * @param {DztccMemberDto} data?,  
   * @return {*}
   */
  export const post_tcc_basic_info_member = async(data?:DztccMemberDto,) => {
    
  const res = await server.POST (`/tcc/basic-info/member`,{data} );

        return res?.success; 
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
    
  const res = await server.GET<DztccYdp[]> (`/tcc/ydps/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccStatisticsZz   {
        days?:number;
      
      }
  /** 
   * @description:  停车周转率
   * @param {GetTccStatisticsZz} params? 
   * @return {*}
   */
  export const get_tcc_statistics_zz = async(params?:GetTccStatisticsZz) => {
    
  const res = await server.GET<TccGraph[]> (`/tcc/statistics/zz`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccStatisticsUse   {
        date?:string;
      
      }
  /** 
   * @description:  停车利用率,1-进场，2-出场
   * @param {GetTccStatisticsUse} params? 
   * @return {*}
   */
  export const get_tcc_statistics_use = async(params?:GetTccStatisticsUse) => {
    
  const res = await server.GET<TccGraph[]> (`/tcc/statistics/use`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccStatisticsTime   {
        days?:number;
      
      }
  /** 
   * @description:  时长分析
   * @param {GetTccStatisticsTime} params? 
   * @return {*}
   */
  export const get_tcc_statistics_time = async(params?:GetTccStatisticsTime) => {
    
  const res = await server.GET<TccTimeStatistics> (`/tcc/statistics/time`,{params} );

        return res?.result; 
        }
    
   export interface GetTccStatisticsPay   {
        date?:string;
      
      }
  /** 
   * @description:  支付占比-收入类型
   * @param {GetTccStatisticsPay} params? 
   * @return {*}
   */
  export const get_tcc_statistics_pay = async(params?:GetTccStatisticsPay) => {
    
  const res = await server.GET<TccPayStatistics> (`/tcc/statistics/pay`,{params} );

        return res?.result; 
        }
    
   export interface GetTccStatisticsIncome   {
        date?:string;
      
      }
  /** 
   * @description:  收费趋势分析
   * @param {GetTccStatisticsIncome} params? 
   * @return {*}
   */
  export const get_tcc_statistics_income = async(params?:GetTccStatisticsIncome) => {
    
  const res = await server.GET<TccIncomeStatistics> (`/tcc/statistics/income`,{params} );

        return res?.result; 
        }
    
   export interface GetTccOrders  extends HistorySearchDto,Paging {
        
      
      }
  /** 
   * @description:  历史停车-带分页
   * @param {GetTccOrders} params? 
   * @return {*}
   */
  export const get_tcc_orders = async(params?:GetTccOrders) => {
    
  const res = await server.GET<IPage<DztccOrderVo>> (`/tcc/orders`,{params} );

        return res?.result; 
        }
    
   export interface GetTccOrderId   {
        id?:string;
      
      }
  /** 
   * @description:  订单详情
   * @param {GetTccOrderId} params? 
   * @return {*}
   */
  export const get_tcc_order_id = async(params?:GetTccOrderId) => {
    
  const res = await server.GET<DztccOrderVo> (`/tcc/order/${params?.id}`,{params} );

        return res?.result; 
        }
    
   export interface GetTccOnline  extends OnlineSearchDto,Paging {
        
      
      }
  /** 
   * @description:  正在停车-带分页
   * @param {GetTccOnline} params? 
   * @return {*}
   */
  export const get_tcc_online = async(params?:GetTccOnline) => {
    
  const res = await server.GET<IPage<DztccParkingVo>> (`/tcc/online`,{params} );

        return res?.result; 
        }
    
   export interface GetTccOnlineChart  extends OnlineSearchDto {
        
      
      }
  /** 
   * @description:  当前停车-图表
   * @param {GetTccOnlineChart} params? 
   * @return {*}
   */
  export const get_tcc_online_chart = async(params?:GetTccOnlineChart) => {
    
  const res = await server.GET<OnlineChartVo> (`/tcc/online/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetTccMonthlyOpenCharge   {
        id?:string;
      
      }
  /** 
   * @description:  开通缴费
   * @param {GetTccMonthlyOpenCharge} params? 
   * @return {*}
   */
  export const get_tcc_monthly_open_charge = async(params?:GetTccMonthlyOpenCharge) => {
    
  const res = await server.GET (`/tcc/monthly/open-charge`,{params} );

        return res?.success; 
        }
    
   export interface GetTccMerchantsRecharge  extends LogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  充值记录-分页
   * @param {GetTccMerchantsRecharge} params? 
   * @return {*}
   */
  export const get_tcc_merchants_recharge = async(params?:GetTccMerchantsRecharge) => {
    
  const res = await server.GET<IPage<RechargeVo>> (`/tcc/merchants/recharge`,{params} );

        return res?.result; 
        }
    
   export interface GetTccMerchantsRechargeChart  extends LogSearchDto {
        
      
      }
  /** 
   * @description:  充值记录-图表
   * @param {GetTccMerchantsRechargeChart} params? 
   * @return {*}
   */
  export const get_tcc_merchants_recharge_chart = async(params?:GetTccMerchantsRechargeChart) => {
    
  const res = await server.GET<RechargeChartVo[]> (`/tcc/merchants/recharge/chart`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccMerchantsPayment  extends LogSearchDto,Paging {
        
      
      }
  /** 
   * @description:  缴费记录-分页
   * @param {GetTccMerchantsPayment} params? 
   * @return {*}
   */
  export const get_tcc_merchants_payment = async(params?:GetTccMerchantsPayment) => {
    
  const res = await server.GET<IPage<PaymentVo>> (`/tcc/merchants/payment`,{params} );

        return res?.result; 
        }
    
   export interface GetTccHistoryChart  extends HistorySearchDto {
        
      
      }
  /** 
   * @description:  历史数据-图表
   * @param {GetTccHistoryChart} params? 
   * @return {*}
   */
  export const get_tcc_history_chart = async(params?:GetTccHistoryChart) => {
    
  const res = await server.GET<TccHistoryChartVo> (`/tcc/history/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetTccFinancialTemporary  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  临停财务-带分页
   * @param {GetTccFinancialTemporary} params? 
   * @return {*}
   */
  export const get_tcc_financial_temporary = async(params?:GetTccFinancialTemporary) => {
    
  const res = await server.GET<IPage<TccTemporaryVo>> (`/tcc/financial/temporary`,{params} );

        return res?.result; 
        }
    
   export interface GetTccFinancialTemporaryChart  extends FinancialSearchDto {
        
      
      }
  /** 
   * @description:  临停财务-图表
   * @param {GetTccFinancialTemporaryChart} params? 
   * @return {*}
   */
  export const get_tcc_financial_temporary_chart = async(params?:GetTccFinancialTemporaryChart) => {
    
  const res = await server.GET<TccTemporaryChart> (`/tcc/financial/temporary/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetTccFinancialMonthRecharge  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  月卡充值数据-带分页
   * @param {GetTccFinancialMonthRecharge} params? 
   * @return {*}
   */
  export const get_tcc_financial_month_recharge = async(params?:GetTccFinancialMonthRecharge) => {
    
  const res = await server.GET<IPage<TccccMonthlyLogVo>> (`/tcc/financial/month-recharge`,{params} );

        return res?.result; 
        }
    
   export interface GetTccFinancialAll  extends FinancialSearchDto,Paging {
        
      
      }
  /** 
   * @description:  财务总计-带分页
   * @param {GetTccFinancialAll} params? 
   * @return {*}
   */
  export const get_tcc_financial_all = async(params?:GetTccFinancialAll) => {
    
  const res = await server.GET<IPage<TccFinancialVo>> (`/tcc/financial/all`,{params} );

        return res?.result; 
        }
    
   export interface GetTccFinancialAllChart  extends FinancialSearchDto {
        
      
      }
  /** 
   * @description:  财务总计-图表
   * @param {GetTccFinancialAllChart} params? 
   * @return {*}
   */
  export const get_tcc_financial_all_chart = async(params?:GetTccFinancialAllChart) => {
    
  const res = await server.GET<TccFinancialChart> (`/tcc/financial/all/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetTccDatacenterPlaceStatistics   {
        parkId?:string;
      
      }
  /** 
   * @description:  右上-泊位分析
   * @param {GetTccDatacenterPlaceStatistics} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_place_statistics = async(params?:GetTccDatacenterPlaceStatistics) => {
    
  const res = await server.GET<TccPlaceStatics> (`/tcc/dataCenter/place-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetTccDatacenterParkStatistics   {
        parkId?:string;
      
      }
  /** 
   * @description:  左上-车辆出入趋势图
   * @param {GetTccDatacenterParkStatistics} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_park_statistics = async(params?:GetTccDatacenterParkStatistics) => {
    
  const res = await server.GET<DataCenterInOutStatistics> (`/tcc/dataCenter/park-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetTccDatacenterOutStatistics   {
        parkId?:string;
      
      }
  /** 
   * @description:  左下-出车数据分析
   * @param {GetTccDatacenterOutStatistics} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_out_statistics = async(params?:GetTccDatacenterOutStatistics) => {
    
  const res = await server.GET<TccOutStatics> (`/tcc/dataCenter/out-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetTccDatacenterOrderRank   {
        parkId?:string;
      
      }
  /** 
   * @description:  停车场订单排行
   * @param {GetTccDatacenterOrderRank} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_order_rank = async(params?:GetTccDatacenterOrderRank) => {
    
  const res = await server.GET<TccOrderRank[]> (`/tcc/dataCenter/order-rank`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetTccDatacenterMoneyStatistics   {
        parkId?:string;
      
      }
  /** 
   * @description:  中间-金额/订单数据
   * @param {GetTccDatacenterMoneyStatistics} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_money_statistics = async(params?:GetTccDatacenterMoneyStatistics) => {
    
  const res = await server.GET<TccMoneyStatics> (`/tcc/dataCenter/money-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetTccDatacenterInStatistics   {
        parkId?:string;
      
      }
  /** 
   * @description:  右下-车辆入场分析
   * @param {GetTccDatacenterInStatistics} params? 
   * @return {*}
   */
  export const get_tcc_dataCenter_in_statistics = async(params?:GetTccDatacenterInStatistics) => {
    
  const res = await server.GET<TccInStatics> (`/tcc/dataCenter/in-statistics`,{params} );

        return res?.result; 
        }
    
   export interface GetTccCars  extends TccCarSearchDto,Paging {
        
      
      }
  /** 
   * @description:  车辆管理-带分页
   * @param {GetTccCars} params? 
   * @return {*}
   */
  export const get_tcc_cars = async(params?:GetTccCars) => {
    
  const res = await server.GET<IPage<TccCarVo>> (`/tcc/cars`,{params} );

        return res?.result; 
        }
    
   export interface GetTccCarsSpecials  extends SpecialCarSearchDto,Paging {
        
      
      }
  /** 
   * @description:  特殊车辆查询-分页
   * @param {GetTccCarsSpecials} params? 
   * @return {*}
   */
  export const get_tcc_cars_specials = async(params?:GetTccCarsSpecials) => {
    
  const res = await server.GET<IPage<SpecialCarVo>> (`/tcc/cars/specials`,{params} );

        return res?.result; 
        }
    
   export interface GetTccCarsSpecialId  extends Paging {
        id?:string;
      
      }
  /** 
   * @description:  特殊车辆-删除
   * @param {GetTccCarsSpecialId} params? 
   * @return {*}
   */
  export const get_tcc_cars_special_id = async(params?:GetTccCarsSpecialId) => {
    
  const res = await server.GET<IPage<SpecialCarVo>> (`/tcc/cars/special/${params?.id}`,{params} );

        return res?.result; 
        }
    
   
  /** 
   * @description:  停车场列表
     
   * @return {*}
   */
  export const get_tcc_basic_info_parks = async() => {
    
  const res = await server.GET<BasicInfoVo[]> (`/tcc/basic-info/parks`, );

        return res?.result??[]; 
        }
    
   export interface GetTccBasicInfoParkParkid   {
        parkId?:string;
      
      }
  /** 
   * @description:  停车场综合信息
   * @param {GetTccBasicInfoParkParkid} params? 
   * @return {*}
   */
  export const get_tcc_basic_info_park_parkId = async(params?:GetTccBasicInfoParkParkid) => {
    
  const res = await server.GET<ParkInfoVo> (`/tcc/basic-info/park/${params?.parkId}`,{params} );

        return res?.result; 
        }
    
   export interface GetTccBasicInfoMemberMonthId   {
        id?:string;month?:number;
      
      }
  /** 
   * @description:  会员信息-添加会员包月
   * @param {GetTccBasicInfoMemberMonthId} params? 
   * @return {*}
   */
  export const get_tcc_basic_info_member_month_id = async(params?:GetTccBasicInfoMemberMonthId) => {
    
  const res = await server.GET (`/tcc/basic-info/member/month/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface GetTccBasicInfoMemberChart  extends QueryMemberDto {
        
      
      }
  /** 
   * @description:  会员信息-图表
   * @param {GetTccBasicInfoMemberChart} params? 
   * @return {*}
   */
  export const get_tcc_basic_info_member_chart = async(params?:GetTccBasicInfoMemberChart) => {
    
  const res = await server.GET<MemberChart> (`/tcc/basic-info/member/chart`,{params} );

        return res?.result; 
        }
    
   export interface GetTccBasicInfoChannelsId   {
        id?:string;
      
      }
  /** 
   * @description:  通道信息
   * @param {GetTccBasicInfoChannelsId} params? 
   * @return {*}
   */
  export const get_tcc_basic_info_channels_id = async(params?:GetTccBasicInfoChannelsId) => {
    
  const res = await server.GET<ChannelVo[]> (`/tcc/basic-info/channels/${params?.id}`,{params} );

        return res?.result??[]; 
        }
    
   
  /** 
   * @description:  车辆类型
     
   * @return {*}
   */
  export const get_tcc_basic_info_car_types = async() => {
    
  const res = await server.GET<MsgType[]> (`/tcc/basic-info/car-types`, );

        return res?.result??[]; 
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
    
   export interface DeleteTccMerchantsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除停车场商户
   * @param {DeleteTccMerchantsId} params? 
   * @return {*}
   */
  export const delete_tcc_merchants_id = async(params?:DeleteTccMerchantsId) => {
    
  const res = await server.DELETE (`/tcc/merchants/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteTccBasicInfoChannelId   {
        id?:string;
      
      }
  /** 
   * @description:  删除通道
   * @param {DeleteTccBasicInfoChannelId} params? 
   * @return {*}
   */
  export const delete_tcc_basic_info_channel_id = async(params?:DeleteTccBasicInfoChannelId) => {
    
  const res = await server.DELETE (`/tcc/basic-info/channel/${params?.id}`,{params} );

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
 parkId?:string;
 /** 编号 */
 number?:string;
 /** 宽 */
 width?:number;
 /** 高 */
 height?:number;
 /** 类型 1 总车位 2 剩余车位 3总车位+剩余车位 */
 type?:number;

    } 
    export interface DztccVoiceText{
      id?:string;
  type?:MsgType;
  inText?:string;
  inVoice?:string;
  outText?:string;
  outVoice?:string;
  createdAt?:string;

    } 
    export interface DztccMerchantDto{
      id?:string;
 /** 商户名称 */
 name?:string;
 /** 联系人 */
 contactName?:string;
 /** 联系电话 */
 contactPhone?:string;
 /** 关联停车场 */
 parkId?:string;

    } 
    export interface SpecialCarDto{
      id?:string;
  parkId?:string;
  plateNo?:string;
  remark?:string;
 /** 车辆类型  0-白名单  1-黑名单 */
 carType?:number;

    } 
    export interface ChannelDto{
      id?:string;
  parkId?:string;
  exId?:string;
  name?:string;
  inlet?:boolean;
  voiceNo?:string;

    } 
    export interface HistorySearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车场id(必填) */
 parkId?:string;
 /** 车牌号码,右模糊 */
 plateNumber?:string;
 /** 订单号 */
 id?:string;

    } 
    export interface UpdMonthBatchDto{
     /** 停车场 */
 ids?:string[];
 /** 是否开启包月 */
 monthEnabled?:boolean;

    } 
    export interface RemoveApplyDto{
      id?:string;
 /** 原因 -1-其它，0-未支付，1-没有包月需求 */
 reason?:number;
 /** 备注 */
 remark?:string;

    } 
    export interface TccMonthlyMoney{
      month?:number;
  money?:number;
  discountMoney?:number;

    } 
    export interface UpdMonthDto{
     /** 停车场识别码 */
 id?:string;
 /** 包月名额数，为空不限制名额 */
 monthTotal?:number;
 /** 包月金额 */
 monthMoneyActual?:TccMonthlyMoney[];
 /** 折扣截止日期 */
 discountEndDate?:string;

    } 
    export interface QueryApplyDto{
     /** 停车场id */
 parkId?:string;
 /** 0-申请列表，1-移除列表 */
 status?:number;

    } 
    export interface ApplyVo{
      id?:string;
 /** 车场名字 */
 parkName?:string;
 /** 姓名 */
 ownerName?:string;
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

    } 
    export interface LogSearchDto{
     /** 起始月 yyyy-mm */
 from?:string;
 /** 结束月 yyyy-mm */
 to?:string;
  start?:string;
  end?:string;

    } 
    export interface DztccMerchantSearchDto{
     /** 商户名称 */
 name?:string;
 /** 联系人 */
 contactName?:string;
 /** 联系电话 */
 contactPhone?:string;
 /** 关联停车场 */
 parkId?:string;

    } 
    export interface FinancialSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车场id(非必填) */
 parkId?:string;

    } 
    export interface TccCarSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车场ID */
 parkId?:string;
 /** 手机号 */
 phone?:string;
 /** 车牌 */
 plateNo?:string;

    } 
    export interface Rule{
     /** 免费停车时长(单位:分钟) */
 freeMin?:number;
 /** 最大计费金额周期（单位：小时） */
 maxPriceHour?:number;
 /** 每计费周期最大金额（单位：分） */
 maxPrice?:number;
  computeBegin?:string;
  computeEnd?:string;
 /** 起步价时间 单位：小时 */
 startHour?:number;
 /** 起步价 单位：分 */
 startPrice?:number;
 /** 标准计费周期 单位：小时 */
 hour?:number;
 /** 标准计费价格  单位：分 */
 price?:number;

    } 
    export interface GeoPoint{
     /** 经度 */
 lon?:number;
 /** 纬度 */
 lat?:number;

    } 
    export interface UpdBasicInfoDto{
      id?:string;
  name?:string;
  total?:number;
  fixedTotal?:number;
  point?:GeoPoint;
  address?:string;
 /** 管理方 */
 manager?:string;
 /** 联系人 */
 contactMan?:string;
 /** 联系人电话 */
 contactPhone?:string;
 /** 收费规则文本描述 */
 ruleText?:string;
 /** 0-公开，1-私有 */
 type?:number;

    } 
    export interface ParkAddDto{
     /** 停车场id */
 parkId?:string;
 /** 厂商 */
 factory?:number;
  name?:string;
  total?:number;
  fixedTotal?:number;
  point?:GeoPoint;
  address?:string;
  manager?:string;
  contactMan?:string;
  contactPhone?:string;
  ruleText?:string;
 /** 0-公开，1-私有 */
 type?:number;

    } 
    export interface QueryMemberDto{
     /** 停车场ID */
 parkId?:string;
 /** 车主名 */
 ownerName?:string;
 /** 手机号码 */
 ownerPhone?:string;
 /** 车牌号码 */
 plateNo?:string;
 /** 卡片类型 */
 carType?:number;
 /** 是否过期 */
 overdue?:boolean;
  pageNum?:number;
  pageSize?:number;

    } 
    export interface MemberVo{
      id?:string;
 /** 车场名称 */
 parkName?:string;
 /** 卡片类型 */
 carType?:MsgType;
 /** 母车标识 */
 motherFlag?:boolean;
 /** 车牌号 */
 plateNo?:string;
 /** 车位类型 */
 spaceType?:MsgType;
 /** 建卡时间 */
 createTime?:string;
 /** 启用时间 */
 enableTime?:string;
 /** 到期时间 */
 expireTime?:string;
 /** 是否过期 */
 overdue?:boolean;
 /** 车辆是否被锁定 */
 lockFlag?:boolean;
 /** 锁定时间 */
 lockTime?:string;
 /** 黑名单标识 */
 blacklistFlag?:boolean;
 /** 会员名称 */
 ownerName?:string;
 /** 会员手机号码 */
 ownerPhone?:string;

    } 
    export interface DztccMemberDto{
      parkId?:string;
  plateNo?:string;
  name?:string;

    } 
    export interface YdpSearchDto{
      parkId?:string;
  ydpId?:string;
  level?:number;

    } 
    export interface YdpVo{
      id?:string;
  name?:string;
  rgpls?:string;
  level?:number;
  url?:string;

    } 
    export interface DztccYdp{
      id?:string;
  name?:string;
  level?:number;
  url?:string;
  createdAt?:string;
  updatedAt?:string;
  deleted?:boolean;

    } 
    export interface YdpCardRgplVo{
      parkId?:string;
  rgplName?:string;
  cards?:YdpCardVo[];

    } 
    export interface YdpCardVo{
      id?:string;
  ydpId?:string;
  parkId?:string;
  parkName?:string;
  number?:string;
  width?:number;
  height?:number;
  type?:number;

    } 
    export interface TccGraph{
     /** x轴坐标 */
 key?:string;
 /** y轴数据1 */
 value1?:number;
 /** y轴数据2 */
 value2?:number;

    } 
    export interface TccTimeStatistics{
     /** 0-15分钟 */
 zero?:number;
 /** 15-60分钟 */
 one?:number;
 /** 1-2小时 */
 two?:number;
 /** 2-4小时 */
 three?:number;
 /** 4小时以上 */
 four?:number;

    } 
    export interface TccPayStatistics{
     /** 支付占比-微信支付 */
 wechat?:number;
 /** 支付占比-支付宝支付 */
 ali?:number;
 /** 现金 */
 cash?:number;
 /** 收入类型-临停 */
 temp?:number;
 /** 收入类型-包月 */
 month?:number;
 /** 收入类型-商户 */
 merchant?:number;

    } 
    export interface TccIncomeInner{
      date?:string;
 /** 已收 */
 income?:number;
 /** 订单笔数 */
 orderNum?:number;
 /** 临停 */
 temp?:number;
 /** 包月 */
 month?:number;
 /** 上一天已收 */
 lastIncome?:number;
 /** 上一天订单笔数 */
 lastOrderNum?:number;
 /** 上一天临停 */
 lastTemp?:number;
 /** 上一天包月 */
 lastMonth?:number;

    } 
    export interface TccIncomeStatistics{
      left?:TccIncomeInner;
 /** 右侧曲线图 */
 right?:TccIncomeInner[];

    } 
    export interface DztccOrderVo{
      id?:string;
 /** 车牌号 */
 plateNo?:string;
 /** 停车场 */
 parkName?:string;
 /** 通行证类型 */
 carType?:MsgType;
 /** 入场时间 */
 enterTime?:string;
 /** 入场照片 */
 enterPic?:string;
 /** 车辆类型 1：小车，2：大车，3：超大车 */
 vehicleType?:MsgType;
 /** 出场时间 */
 exitTime?:string;
 /** 出场照片 */
 exitPic?:string;
 /** 总金额 */
 totalAmount?:number;
 /** 免费金额 */
 freeAmount?:number;
 /** 支付金额 */
 paidAmount?:number;
 /** 停车时长:秒 */
 parkingSeconds?:number;
 /**  支付方式 0：现金,1：场中支付（中央缴费、微信）,2：第三方代收,3：ATM,10 余额 */
 payType?:number;

    } 
    export interface OnlineSearchDto{
     /** 停车场id(必填) */
 parkId?:string;
 /** 车牌号码,右模糊 */
 plateNumber?:string;
 /** 订单号 */
 id?:string;
  from?:string;
  fromTime?:string;

    } 
    export interface DztccParkingVo{
      id?:string;
 /** 车牌号 */
 plateNo?:string;
  parkId?:string;
 /** 停车场 */
 parkName?:string;
 /** 通行证类型 */
 carType?:MsgType;
 /** 入场时间 */
 enterTime?:string;
 /** 入场照片 */
 enterPic?:string;
 /** 车辆类型 1：小车，2：大车，3：超大车 */
 vehicleType?:MsgType;
  createdAt?:string;

    } 
    export interface OnlineChartVo{
      total?:number;
  parkNameMap?:{[key:string]:string};
  sumMap?:{[key:string]:number};
  timeMap?:{[key:string]:number};

    } 
    export interface DztccMerchantVo{
      id?:string;
  createdAt?:string;
 /** 商户名称 */
 name?:string;
 /** 联系人 */
 contactName?:string;
 /** 联系电话 */
 contactPhone?:string;
 /** 关联停车场 */
 parkId?:string;
  parkName?:string;
 /** 商户余额 */
 amount?:number;

    } 
    export interface RechargeVo{
      id?:string;
 /** 商户名 */
 merchantName?:string;
 /** 原始金额 */
 originalMoney?:number;
 /** 支付金额 */
 realMoney?:number;
  createdAt?:string;
  tccName?:string;

    } 
    export interface RechargeChartVo{
     /** 日期/月份 */
 date?:string;
 /** 金额 */
 money?:number;

    } 
    export interface PaymentVo{
      id?:string;
 /** 商户名称 */
 merchantName?:string;
 /** 车牌 */
 plateNo?:string;
 /** 金额 分 */
 money?:number;
  tccName?:string;
  createdAt?:string;
 /** 关联订单id */
 linkId?:string;

    } 
    export interface TccHistoryChartVo{
     /** 总订单数 */
 total?:number;
 /** 总停车时长,分钟数 */
 parkTime?:number;
 /** 停车时长分析, 1. 0~15分钟 2. 15~60分钟 3. 1~2小时 4. 2~4 小时 5. 4小时以上 */
 timeMap?:{[key:string]:number};
 /** 收费分析, 1. 免费 2. 欠费 3. 付费 */
 payCountMap?:{[key:string]:number};
 /** 支付类型, 4：现金,1：场中支付（中央缴费、微信）,2：第三方代收,3：ATM,5 余额 */
 payTypeMap?:{[key:string]:number};
 /** 牌照类型, 1. 新能源车 2. 普通车 */
 plateTypeMap?:{[key:string]:number};
 /** 车牌统计 */
 plateCountMap?:{[key:string]:number};

    } 
    export interface TccTemporaryVo{
      date?:string;
 /** 应收 */
 income?:number;
 /** 已收 */
 received?:number;
 /** 欠费 */
 arrears?:number;
 /** 优惠 */
 discount?:number;
 /** 微信 */
 wechat?:number;
 /** 支付宝 */
 ali?:number;
 /** 余额 */
 wallet?:number;
 /** 现金 */
 cash?:number;

    } 
    export interface TccTemporaryChart{
     /** 收入类型 现金 */
 cash?:number;
 /** 收入类型 微信 */
 wechat?:number;
 /** 收入类型 支付宝 */
 ali?:number;
 /** 总收入柱状图 */
 right?:TccTemporaryVo[];

    } 
    export interface TccccMonthlyLogVo{
      date?:string;
 /** 停车场名字 */
 parkName?:string;
 /** 车牌号 */
 plateNo?:string;
 /** 充值金额分 */
 moneyNum?:number;
 /** 周期 0:天,1:周，2:月,3:年 */
 unit?:number;
 /** 数量 */
 period?:number;
 /** 有效时间 */
 validTime?:string;
 /** 退款金额 */
 refundMoney?:number;
 /** 退款时间 */
 refundTime?:string;

    } 
    export interface TccFinancialVo{
      date?:string;
 /** 总分 */
 total?:number;
 /** 临停财务分 */
 temporary?:number;
 /** 月租分 */
 recharge?:number;
 /** 商户充值分 */
 topUp?:number;
 /** 退款金额分 */
 refundMoney?:number;

    } 
    export interface TccFinancialChart{
     /** 收入类型 月租 */
 month?:number;
 /** 收入类型 临停 */
 temp?:number;
 /** 收入类型 充值 */
 topUp?:number;
 /** 总收入柱状图 */
 right?:TccFinancialVo[];

    } 
    export interface TccPlaceStatics{
     /** 总停车场 */
 totalTcc?:number;
 /** 周转率 */
 turnoverRate?:string;
 /** 占有率 */
 usedRate?:string;
 /** 总泊位数 */
 total?:number;

    } 
    export interface DataCenterInOutStatistics{
     /** 进车列表-前端直接用 */
 inCount?:number[];
 /** 出车列表-前端直接用 */
 outCount?:number[];
  xaxis?:string[];

    } 
    export interface TccOutStatics{
      normal?:TccOutStaticsInner;
  error?:TccOutStaticsInner;
  free?:TccOutStaticsInner;

    } 
    export interface TccOutStaticsInner{
      total?:number;
  money?:number;

    } 
    export interface TccOrderRank{
      parkName?:string;
  orderCount?:number;

    } 
    export interface TccMoneyStatics{
     /** 总车位数 */
 place?:number;
 /** 占用车位数 */
 usePlace?:number;
 /** 可用车位数 */
 validPlace?:number;
 /** 已产生的订单总数 */
 orderTotal?:number;
 /** 实收金额 单位：分 */
 real?:number;
 /** 未收金额 */
 not?:number;
 /** 折扣金额 */
 free?:number;
 /** 现金 */
 cash?:number;
 /** 手机支付 */
 mobile?:number;
 /** 月卡支付 */
 month?:number;

    } 
    export interface TccInStatics{
     /** 总数 */
 total?:number;
 /** 临时车 */
 temp?:number;
 /** 月租车 */
 month?:number;
 /** 免费车 */
 free?:number;
 /** 储值车 */
 value?:number;

    } 
    export interface TccCarVo{
     /** 车牌 */
 plateNo?:string;
 /** 手机号 */
 phone?:string;
  carType?:MsgType;
  parkTime?:number;
  paid?:number;

    } 
    export interface SpecialCarSearchDto{
      parkId?:string;
  plateNo?:string;
 /** 车辆类型  0-白名单  1-黑名单 */
 carType?:number;

    } 
    export interface SpecialCarVo{
      id?:string;
  parkId?:string;
  parkName?:string;
  plateNo?:string;
  carType?:MsgType;
  remark?:string;

    } 
    export interface BasicInfoVo{
     /** id */
 id?:string;
 /** 名称 */
 name?:string;
 /** 厂商 */
 factory?:MsgType;
 /** 停车场总车位数 */
 total?:number;
 /** 固定车位总数 */
 fixedTotal?:number;
  point?:GeoPoint;
 /** 地址 */
 address?:string;
 /** 管理方 */
 manager?:string;
 /** 联系人 */
 contactMan?:string;
 /** 联系人电话 */
 contactPhone?:string;
 /** 收费规则文本描述 */
 ruleText?:string;
 /** 剩余车位数 */
 available?:number;
 /** 剩余临时车位数 */
 tempAvailable?:number;
 /** 剩余固定车位数 */
 fixedAvailable?:number;
 /** 预定车位总数 */
 orderTotal?:number;
 /** 已使用预定车位数 */
 orderOccupy?:number;
 /** 最后更新时间 */
 updateTime?:string;
 /** 是否在线,true false */
 online?:boolean;
 /** 上线时间 */
 uptime?:string;
 /** 下线时间 */
 downtime?:string;
 /** 在线时长单位：秒 */
 onlineSeconds?:string;
 /** 现有包月车数量 */
 monthNum?:number;
 /** 包月上限 */
 monthTotal?:number;
 /** 包月价格 */
 monthMoney?:number;
 /** 包月价格-分月 */
 monthMoneyActual?:TccMonthlyMoney[];
 /** 优惠是否开启 */
 discountEnabled?:boolean;
 /** 优惠截至日期 */
 discountEndDate?:string;
 /** 包月状态 */
 monthEnabled?:boolean;
 /** 停车场类型 */
 type?:MsgType;
 /** 二维码 */
 qrCode?:string;

    } 
    export interface ChannelVo{
     /** 通道id */
 id?:string;
 /** 通道名称 */
 name?:string;
 /** 通行方向是否是入口 */
 inlet?:boolean;
 /** 二维码 */
 qrcode?:string;

    } 
    export interface ChargeRule{
      passportTypeName?:string;
  areaNames?:string[];
  carTypeName?:string;
  chargeType?:number;
  timesMoney?:number;
  timesFreeTime?:number;
  maxOneTimePay?:number;
  maxOneDayPay?:number;
  timeSegments?:TimeSegment[];

    } 
    export interface ParkInfoVo{
      basic?:BasicInfoVo;
 /** 通道信息 */
 channels?:ChannelVo[];
 /** 计费规则 */
 rules?:ChargeRule[];

    } 
    export interface TimeMoney{
      time?:number;
  money?:number;

    } 
    export interface TimeSegment{
      startTime?:string;
  endTime?:string;
  chargeStrategy?:number;
  freeTime?:number;
  firstTime?:number;
  firstMoney?:number;
  intervalTime?:number;
  intervalMoney?:number;
  oneTimeMoney?:number;
  oneSegmentMaxMoney?:number;
  timeMoneyList?:TimeMoney[];

    } 
    export interface MemberChart{
     /** 月卡车数量 */
 month?:number;
 /** 临时数量 */
 temp?:number;
 /** 贵宾车数量 */
 vip?:number;
 /** 已过期数量 */
 expire?:number;
 /** 未过期数量 */
 valid?:number;
 /** 月租排行 */
 rankList?:MemberChartInner[];

    } 
    export interface MemberChartInner{
      tccName?:string;
  count?:number;

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
    
   export interface PutStaffWorkTags  extends DeviceWorkTagDto {
        
      
      }
  /** 
   * @description:  undefined
   * @param {DeviceWorkTagDto} data?,  
   * @return {*}
   */
  export const put_staff_work_tags = async(data?:DeviceWorkTagDto,) => {
    
  const res = await server.PUT (`/staff/work-tags`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffWorkTags  extends DeviceWorkTagDto {
        
      
      }
  /** 
   * @description:  undefined
   * @param {DeviceWorkTagDto} data?,  
   * @return {*}
   */
  export const post_staff_work_tags = async(data?:DeviceWorkTagDto,) => {
    
  const res = await server.POST (`/staff/work-tags`,{data} );

        return res?.success; 
        }
    
   export interface GetStaffPdaUsers  extends PdaSearchDtoCore,Paging {
        
      
      }
  /** 
   * @description:  员工列表-带分页
   * @param {GetStaffPdaUsers} params? 
   * @return {*}
   */
  export const get_staff_pda_users = async(params?:GetStaffPdaUsers) => {
    
  const res = await server.GET<IPage<PdaUserVo>> (`/staff/pda-users`,{params} );

        return res?.result; 
        }
    
   export interface PutStaffPdaUsers  extends PdaUserDto {
        
      
      }
  /** 
   * @description:  修改员工信息
   * @param {PdaUserDto} data?,  
   * @return {*}
   */
  export const put_staff_pda_users = async(data?:PdaUserDto,) => {
    
  const res = await server.PUT<Boolean> (`/staff/pda-users`,{data} );

        return res?.result; 
        }
    
   export interface PostStaffPdaUsers  extends PdaUserDto {
        
      
      }
  /** 
   * @description:  添加员工
   * @param {PdaUserDto} data?,  
   * @return {*}
   */
  export const post_staff_pda_users = async(data?:PdaUserDto,) => {
    
  const res = await server.POST (`/staff/pda-users`,{data} );

        return res?.success; 
        }
    
   export interface PutStaffPdaUsersPassword  extends StaffResetPasswordDto {
        
      
      }
  /** 
   * @description:  修改员工密码
   * @param {StaffResetPasswordDto} data?,  
   * @return {*}
   */
  export const put_staff_pda_users_password = async(data?:StaffResetPasswordDto,) => {
    
  const res = await server.PUT<Boolean> (`/staff/pda-users/password`,{data} );

        return res?.result; 
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
    
   export interface PutStaffPatrolUsers  extends PatrolUserDto {
        
      
      }
  /** 
   * @description:  更新巡查人员
   * @param {PatrolUserDto} data?,  
   * @return {*}
   */
  export const put_staff_patrol_users = async(data?:PatrolUserDto,) => {
    
  const res = await server.PUT (`/staff/patrol-users`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolUsers  extends PatrolUserDto {
        
      
      }
  /** 
   * @description:  添加巡查人员
   * @param {PatrolUserDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users = async(data?:PatrolUserDto,) => {
    
  const res = await server.POST (`/staff/patrol-users`,{data} );

        return res?.success; 
        }
    
   export interface PutStaffPatrolUsersPassword  extends StaffResetPasswordDto {
        
      
      }
  /** 
   * @description:  修改员工密码
   * @param {StaffResetPasswordDto} data?,  
   * @return {*}
   */
  export const put_staff_patrol_users_password = async(data?:StaffResetPasswordDto,) => {
    
  const res = await server.PUT<Boolean> (`/staff/patrol-users/password`,{data} );

        return res?.result; 
        }
    
   export interface GetStaffPatrolRoles extends Paging{}
  /** 
   * @description:  巡查角色列表-带分页
   * @param {GetStaffPatrolRoles} params? 
   * @return {*}
   */
  export const get_staff_patrol_roles = async(params?:GetStaffPatrolRoles) => {
    
  const res = await server.GET<IPage<PatrolRole>> (`/staff/patrol-roles`, {params} );

        return res?.result; 
        }
    
   export interface PutStaffPatrolRoles  extends PatrolRoleDto {
        
      
      }
  /** 
   * @description:  更新巡查角色
   * @param {PatrolRoleDto} data?,  
   * @return {*}
   */
  export const put_staff_patrol_roles = async(data?:PatrolRoleDto,) => {
    
  const res = await server.PUT (`/staff/patrol-roles`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolRoles  extends PatrolRoleDto {
        
      
      }
  /** 
   * @description:  添加巡查角色
   * @param {PatrolRoleDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_roles = async(data?:PatrolRoleDto,) => {
    
  const res = await server.POST (`/staff/patrol-roles`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffWorkExport  extends StaffWorkSearchDto {
        
      
      }
  /** 
   * @description:  工作记录-导出
   * @param {StaffWorkSearchDto} data?,  
   * @return {*}
   */
  export const post_staff_work_export = async(data?:StaffWorkSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/work/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetStaffPerformanceScore  extends PdaPerformanceDetailSearchDto {
        
      
      }
  /** 
   * @description:  点位绩效扣分总数据
   * @param {GetStaffPerformanceScore} params? 
   * @return {*}
   */
  export const get_staff_performance_score = async(params?:GetStaffPerformanceScore) => {
    
  const res = await server.GET<PdaPerformanceScoreVo> (`/staff/performance/score`,{params} );

        return res?.result; 
        }
    
   export interface PostStaffPerformanceScore   {
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
    
   export interface PostStaffPerformanceScoreItemsExport  extends PdaPerformanceDetailSearchDto {
        
      
      }
  /** 
   * @description:  绩效扣分明细-导出
   * @param {PdaPerformanceDetailSearchDto} data?,  
   * @return {*}
   */
  export const post_staff_performance_score_items_export = async(data?:PdaPerformanceDetailSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/score/items/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStaffPerformanceRule  extends PdaPerformanceRuleDto {
        
      
      }
  /** 
   * @description:  设置绩效扣分规则
   * @param {PdaPerformanceRuleDto} data?,  
   * @return {*}
   */
  export const post_staff_performance_rule = async(data?:PdaPerformanceRuleDto,) => {
    
  const res = await server.POST (`/staff/performance/rule`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPerformanceItemsExport  extends PdaPerformanceDetailSearchDto {
        
      
      }
  /** 
   * @description:  点位绩效明细-导出
   * @param {PdaPerformanceDetailSearchDto} data?,  
   * @return {*}
   */
  export const post_staff_performance_items_export = async(data?:PdaPerformanceDetailSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/items/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStaffPerformanceExport  extends PdaPerformanceSearchDtoCore {
        
      
      }
  /** 
   * @description:  总体绩效列表-导出
   * @param {PdaPerformanceSearchDtoCore} data?,  
   * @return {*}
   */
  export const post_staff_performance_export = async(data?:PdaPerformanceSearchDtoCore,) => {
    
  const res = await server.POST<ArrayBuffer> (`/staff/performance/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostStaffPerformanceArchive  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  归档某日数据
   * @param {TimeLocalDate} data?,  
   * @return {*}
   */
  export const post_staff_performance_archive = async(data?:TimeLocalDate,) => {
    
  const res = await server.POST (`/staff/performance/archive`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPerformanceArchiveFromTo  extends TimeDateWithFromTo {
        
      
      }
  /** 
   * @description:  归档指定日期开始结束数据
   * @param {TimeDateWithFromTo} data?,  
   * @return {*}
   */
  export const post_staff_performance_archive_from_to = async(data?:TimeDateWithFromTo,) => {
    
  const res = await server.POST (`/staff/performance/archive-from-to`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPdaUsersIdUnbindlot   {
        id?:string;
      
      }
  /** 
   * @description:  员工解除绑定停车点
   * @param {PostStaffPdaUsersIdUnbindlot} params? 
   * @return {*}
   */
  export const post_staff_pda_users_id_unbindLot = async(params?:PostStaffPdaUsersIdUnbindlot) => {
    
  const res = await server.POST (`/staff/pda-users/${params?.id}/unbindLot`,{params} );

        return res?.success; 
        }
    
   export interface PostStaffPdaUsersBindlot  extends PdaBindLotDto {
        
      
      }
  /** 
   * @description:  员工绑定停车点
   * @param {PdaBindLotDto} data?,  
   * @return {*}
   */
  export const post_staff_pda_users_bindLot = async(data?:PdaBindLotDto,) => {
    
  const res = await server.POST (`/staff/pda-users/bindLot`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolUsersTrackMap  extends PatrolTrackMapDto {
        
      
      }
  /** 
   * @description:  查看地锁巡查的轨迹-地图模式
   * @param {PatrolTrackMapDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users_track_map = async(data?:PatrolTrackMapDto,) => {
    
  const res = await server.POST<PatrolTrackMapVo[]> (`/staff/patrol-users/track/map`,{data} );

        return res?.result??[]; 
        }
    
   export interface PostStaffPatrolUsersTrackList  extends PatrolTrackListDto {
        
      
      }
  /** 
   * @description:  查看地锁巡查的轨迹-列表模式
   * @param {PatrolTrackListDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users_track_list = async(data?:PatrolTrackListDto,) => {
    
  const res = await server.POST<PatrolTrackListVo[]> (`/staff/patrol-users/track/list`,{data} );

        return res?.result??[]; 
        }
    
   export interface PostStaffPatrolUsersBind  extends BindPatrolLot {
        
      
      }
  /** 
   * @description:  编辑修改巡查人员和停车点
   * @param {BindPatrolLot} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users_bind = async(data?:BindPatrolLot,) => {
    
  const res = await server.POST (`/staff/patrol-users/bind`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolUsersBindRole  extends PatrolRoleBindDto {
        
      
      }
  /** 
   * @description:  绑定角色
   * @param {PatrolRoleBindDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users_bind_role = async(data?:PatrolRoleBindDto,) => {
    
  const res = await server.POST (`/staff/patrol-users/bind-role`,{data} );

        return res?.success; 
        }
    
   export interface PostStaffPatrolUsersBindLotGroup  extends BindPatrolLotGroupDto {
        
      
      }
  /** 
   * @description:  绑定点位组
   * @param {BindPatrolLotGroupDto} data?,  
   * @return {*}
   */
  export const post_staff_patrol_users_bind_lot_group = async(data?:BindPatrolLotGroupDto,) => {
    
  const res = await server.POST (`/staff/patrol-users/bind-lot-group`,{data} );

        return res?.success; 
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
    
   export interface GetStaffWorkTop  extends StaffWorkSearchDto {
        
      
      }
  /** 
   * @description:  查看工作记录-上面标签数据
   * @param {GetStaffWorkTop} params? 
   * @return {*}
   */
  export const get_staff_work_top = async(params?:GetStaffWorkTop) => {
    
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
    
   export interface GetStaffPerformance  extends PdaPerformanceSearchDtoCore,Paging {
        
      
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
    
   export interface GetStaffPerformanceScoreItems  extends PdaPerformanceDetailSearchDto {
        
      
      }
  /** 
   * @description:  绩效扣分明细-无分页
   * @param {GetStaffPerformanceScoreItems} params? 
   * @return {*}
   */
  export const get_staff_performance_score_items = async(params?:GetStaffPerformanceScoreItems) => {
    
  const res = await server.GET<PdaPerformanceScoreItemVo[]> (`/staff/performance/score/items`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPerformanceItems  extends PdaPerformanceDetailSearchDto {
        
      
      }
  /** 
   * @description:  点位绩效明细-最多31条数据-无分页
   * @param {GetStaffPerformanceItems} params? 
   * @return {*}
   */
  export const get_staff_performance_items = async(params?:GetStaffPerformanceItems) => {
    
  const res = await server.GET<PdaPerformanceItemVo[]> (`/staff/performance/items`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPdaUsersIdMsg   {
        id?:string;
      
      }
  /** 
   * @description:  员工详情-管理信息
   * @param {GetStaffPdaUsersIdMsg} params? 
   * @return {*}
   */
  export const get_staff_pda_users_id_msg = async(params?:GetStaffPdaUsersIdMsg) => {
    
  const res = await server.GET<PdaUserAllDayInfo> (`/staff/pda-users/${params?.id}/msg`,{params} );

        return res?.result; 
        }
    
   export interface GetStaffPdaUsersRecords  extends StaffLoginRecordDto,Paging {
        
      
      }
  /** 
   * @description:  员工列表-登录记录-带分页
   * @param {GetStaffPdaUsersRecords} params? 
   * @return {*}
   */
  export const get_staff_pda_users_records = async(params?:GetStaffPdaUsersRecords) => {
    
  const res = await server.GET<IPage<StaffLoginRecord>> (`/staff/pda-users/records`,{params} );

        return res?.result; 
        }
    
   export interface GetStaffPdaUsersHistory  extends PdaHistorySearchDto {
        
      
      }
  /** 
   * @description:  员工详情-值守记录-没有分页,查询30天内的数据
   * @param {GetStaffPdaUsersHistory} params? 
   * @return {*}
   */
  export const get_staff_pda_users_history = async(params?:GetStaffPdaUsersHistory) => {
    
  const res = await server.GET<PdaUserAccountsRecordVo[]> (`/staff/pda-users/history`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPdaUsersChart  extends PdaSearchDtoCore {
        
      
      }
  /** 
   * @description:  图表
   * @param {GetStaffPdaUsersChart} params? 
   * @return {*}
   */
  export const get_staff_pda_users_chart = async(params?:GetStaffPdaUsersChart) => {
    
  const res = await server.GET<StaffChartVo> (`/staff/pda-users/chart`,{params} );

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
   * @description:  查询巡查人员所管辖的停车点Ids
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
    
   export interface GetStaffPatrolUsersList  extends PatrolUserSearchDto {
        
      
      }
  /** 
   * @description:  巡查人员列表-无分页
   * @param {GetStaffPatrolUsersList} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_list = async(params?:GetStaffPatrolUsersList) => {
    
  const res = await server.GET<PatrolUserResult[]> (`/staff/patrol-users/list`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetStaffPatrolUsersChart  extends PatrolUserSearchDto {
        
      
      }
  /** 
   * @description:  图表
   * @param {GetStaffPatrolUsersChart} params? 
   * @return {*}
   */
  export const get_staff_patrol_users_chart = async(params?:GetStaffPatrolUsersChart) => {
    
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
    
   export interface DeleteStaffPdaUsersId   {
        id?:string;
      
      }
  /** 
   * @description:  删除员工
   * @param {DeleteStaffPdaUsersId} params? 
   * @return {*}
   */
  export const delete_staff_pda_users_id = async(params?:DeleteStaffPdaUsersId) => {
    
  const res = await server.DELETE<Boolean> (`/staff/pda-users/${params?.id}`,{params} );

        return res?.result; 
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
     
    export interface DeviceWorkTagDto{
      id?:string;
  name?:string;
 /** 0-巡查工作，1-技术工作 */
 type?:number;

    } 
    export interface PdaUserDto{
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
 /** 是否是残疾人 */
 special?:boolean;

    } 
    export interface StaffResetPasswordDto{
     /** id */
 id?:string;
 /** 密码 */
 password?:string;

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
 /** 1 地磁 2地锁 10混合 */
 type?:number;

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
    export interface StaffWorkSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 标签ID */
 tagId?:string;
 /** 上报人姓名 */
 name?:string;
  areaId?:string;
  streetId?:string;
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
    export interface PdaPerformanceSearchDtoCore{
     /** 点位列表 */
 lotIds?:string[];
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
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
    export interface PdaBindLotDto{
     /** 值守人员ID */
 pdaUserId?:string;
 /** 停车点ID */
 lotId?:string;

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
    export interface BindPatrolLot{
     /** 巡查人员ID */
 patrolId?:string;
 /** 停车点ID列表 */
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
    export interface PdaSearchDtoCore{
     /** 点位列表 */
 lotIds?:string[];
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
 /** 姓名,模糊搜索 */
 name?:string;
 /** 电话,模糊搜索 */
 phone?:string;
 /** 是否是残疾人 */
 special?:boolean;
  version?:string;

    } 
    export interface PdaUserVo{
     /** ID */
 id?:string;
 /** 工号 */
 jobNum?:string;
 /** 姓名 */
 name?:string;
 /** 性别 1:男  2:女 */
 sex?:MsgType;
 /** 年龄 */
 age?:number;
 /** 联系方式 */
 phone?:string;
 /** 身份证号 */
 idCard?:string;
 /** 值守区域 */
 areaName?:string;
 /** 值守街道 */
 streetName?:string;
 /** 值守点名 */
 lotName?:string;
 /** 停车位总数 */
 total?:string;
 /** 头像 */
 avatar?:string;
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
  workStatus?:MsgType;

    } 
    export interface PdaUserAllDayInfo{
     /** 区域名称 */
 areaName?:string;
 /** 街道名称 */
 streetName?:string;
 /** 停车点名称 */
 lotName?:string;
 /** 总应收入 */
 generalIncome?:number;
 /** 总实收入 */
 received?:number;

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
 /** 区域名称 */
 areaName?:string;
 /** 街道名称 */
 streetName?:string;
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

    } 
    export interface PatrolLots{
      lotName?:string;
  pdaUserName?:string;
  pdaUserPhone?:string;
  total?:number;

    } 
    export interface PatrolRole{
      id?:string;
  name?:string;
  permissions?:string[];
  sort?:number;
  createdAt?:string;
  updatedAt?:string;

    }
   export interface GetFinancialCharge  extends ChargeUserSearchDto,Paging {
        
      
      }
  /** 
   * @description:  承包交账用户记录-带分页
   * @param {GetFinancialCharge} params? 
   * @return {*}
   */
  export const get_financial_charge = async(params?:GetFinancialCharge) => {
    
  const res = await server.GET<IPage<ChargeUserVo>> (`/financial/charge`,{params} );

        return res?.result; 
        }
    
   export interface PutFinancialCharge  extends ChargeUserUpdDto {
        
      
      }
  /** 
   * @description:  更新交账人
   * @param {ChargeUserUpdDto} data?,  
   * @return {*}
   */
  export const put_financial_charge = async(data?:ChargeUserUpdDto,) => {
    
  const res = await server.PUT (`/financial/charge`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialCharge  extends ChargeUserAddDto {
        
      
      }
  /** 
   * @description:  添加交账人
   * @param {ChargeUserAddDto} data?,  
   * @return {*}
   */
  export const post_financial_charge = async(data?:ChargeUserAddDto,) => {
    
  const res = await server.POST (`/financial/charge`,{data} );

        return res?.success; 
        }
    
   export interface PutFinancialChargeIdStatus   {
        id?:string;
      
      }
  /** 
   * @description:  切换用户状态
   * @param {PutFinancialChargeIdStatus} params? 
   * @return {*}
   */
  export const put_financial_charge_id_status = async(params?:PutFinancialChargeIdStatus) => {
    
  const res = await server.PUT (`/financial/charge/${params?.id}/status`,{params} );

        return res?.success; 
        }
    
   export interface PutFinancialAccountsV2Confirm  extends BaseIds {
        
      
      }
  /** 
   * @description:  核销
   * @param {BaseIds} data?,  
   * @return {*}
   */
  export const put_financial_accounts_v2_confirm = async(data?:BaseIds,) => {
    
  const res = await server.PUT (`/financial/accounts/v2/confirm`,{data} );

        return res?.success; 
        }
    
   export interface PutFinancialAccountsConfirm  extends BaseIds {
        
      
      }
  /** 
   * @description:  核销员工交账-新
   * @param {BaseIds} data?,  
   * @return {*}
   */
  export const put_financial_accounts_confirm = async(data?:BaseIds,) => {
    
  const res = await server.PUT (`/financial/accounts/confirm`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialTopUpExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  充值统计-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_financial_top_up_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/top-up/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialRefundStatisticsExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  电子退款按日-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_financial_refund_statistics_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/refund-statistics/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialPpl  extends OrderIncomeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地锁财务-带分页
   * @param {OrderIncomeSearchDto} data?,* @param {PostFinancialPpl} params? 
   * @return {*}
   */
  export const post_financial_ppl = async(data?:OrderIncomeSearchDto,params?:PostFinancialPpl) => {
    
  const res = await server.POST<IPage<PplIncomeVo>> (`/financial/ppl`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialPplExport  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  地锁财务-excel导出
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_ppl_export = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/ppl/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialPplChart  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  地锁财务-图表
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_ppl_chart = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<PplIncomeChartVo> (`/financial/ppl/chart`,{data} );

        return res?.result; 
        }
    
   export interface PostFinancialPplArrears  extends OrderIncomeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地锁财务（欠费）
   * @param {OrderIncomeSearchDto} data?,* @param {PostFinancialPplArrears} params? 
   * @return {*}
   */
  export const post_financial_ppl_arrears = async(data?:OrderIncomeSearchDto,params?:PostFinancialPplArrears) => {
    
  const res = await server.POST<IPage<PplArrearsVo>> (`/financial/ppl/arrears`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialPplArrearsReceived  extends PplTakeReceivedSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地锁财务（欠费）-收缴列表
   * @param {PplTakeReceivedSearchDto} data?,* @param {PostFinancialPplArrearsReceived} params? 
   * @return {*}
   */
  export const post_financial_ppl_arrears_received = async(data?:PplTakeReceivedSearchDto,params?:PostFinancialPplArrearsReceived) => {
    
  const res = await server.POST<IPage<PplArrearsReceivedVo>> (`/financial/ppl/arrears/received`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialPplArrearsExport  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  导出地锁财务（欠费）
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_ppl_arrears_export = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/ppl/arrears/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialOnline  extends FinanceSearch,Paging {
        
      
      }
  /** 
   * @description:  财务列表-带分页
   * @param {FinanceSearch} data?,* @param {PostFinancialOnline} params? 
   * @return {*}
   */
  export const post_financial_online = async(data?:FinanceSearch,params?:PostFinancialOnline) => {
    
  const res = await server.POST<IPage<FinanceResultVo>> (`/financial/online`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialOnlineExport  extends FinanceSearch {
        
      
      }
  /** 
   * @description:  财务列表-excel导出
   * @param {FinanceSearch} data?,  
   * @return {*}
   */
  export const post_financial_online_export = async(data?:FinanceSearch,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/online/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialOnlineChart  extends FinanceSearch {
        
      
      }
  /** 
   * @description:  财务列表-图表
   * @param {FinanceSearch} data?,  
   * @return {*}
   */
  export const post_financial_online_chart = async(data?:FinanceSearch,) => {
    
  const res = await server.POST<FinanceChartVo> (`/financial/online/chart`,{data} );

        return res?.result; 
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
    
   export interface PostFinancialInvoiceExport  extends InvoiceSearch {
        
      
      }
  /** 
   * @description:  电子发票-excel导出
   * @param {InvoiceSearch} data?,  
   * @return {*}
   */
  export const post_financial_invoice_export = async(data?:InvoiceSearch,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/invoice/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialGeom  extends OrderIncomeSearchDto,Paging {
        
      
      }
  /** 
   * @description:  地磁财务-带分页
   * @param {OrderIncomeSearchDto} data?,* @param {PostFinancialGeom} params? 
   * @return {*}
   */
  export const post_financial_geom = async(data?:OrderIncomeSearchDto,params?:PostFinancialGeom) => {
    
  const res = await server.POST<IPage<GeomIncomeVo>> (`/financial/geom`,{data,params} );

        return res?.result; 
        }
    
   export interface PostFinancialGeomExport  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  地磁财务-excel导出
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_geom_export = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/geom/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialGeomExportdetail  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  地磁财务列表明细-excel导出
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_geom_exportDetail = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/geom/exportDetail`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialGeomChart  extends OrderIncomeSearchDto {
        
      
      }
  /** 
   * @description:  地磁财务-图表
   * @param {OrderIncomeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_geom_chart = async(data?:OrderIncomeSearchDto,) => {
    
  const res = await server.POST<GeomIncomeChartVo> (`/financial/geom/chart`,{data} );

        return res?.result; 
        }
    
   export interface PostFinancialFinancesdayExport  extends CoreLotWithTimeRangeSearchDto {
        
      
      }
  /** 
   * @description:  财务分析-日期-excel导出
   * @param {CoreLotWithTimeRangeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_financesDay_export = async(data?:CoreLotWithTimeRangeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/financesDay/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetFinancialErrorPay extends Paging{}
  /** 
   * @description:  异常支付-分页
   * @param {GetFinancialErrorPay} params? 
   * @return {*}
   */
  export const get_financial_error_pay = async(params?:GetFinancialErrorPay) => {
    
  const res = await server.GET<IPage<PayAffirmErrorVo>> (`/financial/error-pay`, {params} );

        return res?.result; 
        }
    
   export interface PostFinancialErrorPay  extends ErrorPayProcessDto {
        
      
      }
  /** 
   * @description:  异常支付-处理
   * @param {ErrorPayProcessDto} data?,  
   * @return {*}
   */
  export const post_financial_error_pay = async(data?:ErrorPayProcessDto,) => {
    
  const res = await server.POST (`/financial/error-pay`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialErrorPayETopUpRefund  extends ErrorPayProcessDto {
        
      
      }
  /** 
   * @description:  充值-退款
   * @param {ErrorPayProcessDto} data?,  
   * @return {*}
   */
  export const post_financial_error_pay_e_top_up_refund = async(data?:ErrorPayProcessDto,) => {
    
  const res = await server.POST (`/financial/error-pay/e-top-up-refund`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialCouponsExport  extends TimeRangeDate {
        
      
      }
  /** 
   * @description:  优惠券分析-excel导出
   * @param {TimeRangeDate} data?,  
   * @return {*}
   */
  export const post_financial_coupons_export = async(data?:TimeRangeDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/coupons/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialChargeRecordsExport  extends ChargeRecordSearchDto {
        
      
      }
  /** 
   * @description:  承包交账用户明细-excel导出
   * @param {ChargeRecordSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_records_export = async(data?:ChargeRecordSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/charge/records/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialChargeGenerate  extends ChargeUserIdDto {
        
      
      }
  /** 
   * @description:  手动生成本期交账
   * @param {ChargeUserIdDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_generate = async(data?:ChargeUserIdDto,) => {
    
  const res = await server.POST (`/financial/charge/generate`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialChargeExport  extends ChargeUserSearchDto {
        
      
      }
  /** 
   * @description:  承包交账用户记录-excel导出
   * @param {ChargeUserSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_export = async(data?:ChargeUserSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/charge/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface GetFinancialChargeConfig   {
        userId?:string;
      
      }
  /** 
   * @description:  查看用户交账配置
   * @param {GetFinancialChargeConfig} params? 
   * @return {*}
   */
  export const get_financial_charge_config = async(params?:GetFinancialChargeConfig) => {
    
  const res = await server.GET<ChargeConfig> (`/financial/charge/config`,{params} );

        return res?.result; 
        }
    
   export interface PostFinancialChargeConfig  extends ChargeSingleConfigDto {
        
      
      }
  /** 
   * @description:  单独配置
   * @param {ChargeSingleConfigDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_config = async(data?:ChargeSingleConfigDto,) => {
    
  const res = await server.POST (`/financial/charge/config`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialChargeCash  extends ChargeCashDto {
        
      
      }
  /** 
   * @description:  现金交账
   * @param {ChargeCashDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_cash = async(data?:ChargeCashDto,) => {
    
  const res = await server.POST (`/financial/charge/cash`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialChargeBatchConfig  extends ChargeBatchConfigDto {
        
      
      }
  /** 
   * @description:  批量配置
   * @param {ChargeBatchConfigDto} data?,  
   * @return {*}
   */
  export const post_financial_charge_batch_config = async(data?:ChargeBatchConfigDto,) => {
    
  const res = await server.POST (`/financial/charge/batch-config`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialAccountsIdCollectionExport   {
        id?:string;
      
      }
  /** 
   * @description:  员工交账代收明细-excel导出
   * @param {PostFinancialAccountsIdCollectionExport} params? 
   * @return {*}
   */
  export const post_financial_accounts_id_collection_export = async(params?:PostFinancialAccountsIdCollectionExport) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/${params?.id}/collection/export`,{params,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialAccountsV2Export  extends CoreLotWithTimeRangeSearchDto {
        
      
      }
  /** 
   * @description:  交账数据-excel导出
   * @param {CoreLotWithTimeRangeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_accounts_v2_export = async(data?:CoreLotWithTimeRangeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/v2/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialAccountsV2Exportdetail  extends CoreLotWithTimeRangeSearchDto {
        
      
      }
  /** 
   * @description:  交账数据-excel明细导出
   * @param {CoreLotWithTimeRangeSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_accounts_v2_exportDetail = async(data?:CoreLotWithTimeRangeSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/v2/exportDetail`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialAccountsV2BatchConfirm  extends FinancialBatchConfimAccountsDto {
        
      
      }
  /** 
   * @description:  根据日期批量核心
   * @param {FinancialBatchConfimAccountsDto} data?,  
   * @return {*}
   */
  export const post_financial_accounts_v2_batch_confirm = async(data?:FinancialBatchConfimAccountsDto,) => {
    
  const res = await server.POST (`/financial/accounts/v2/batch-confirm`,{data} );

        return res?.success; 
        }
    
   export interface PostFinancialAccountsHisExport  extends PdaUserAccountsHisSearchDto {
        
      
      }
  /** 
   * @description:  员工交账明细-excel导出
   * @param {PdaUserAccountsHisSearchDto} data?,  
   * @return {*}
   */
  export const post_financial_accounts_his_export = async(data?:PdaUserAccountsHisSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/his/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialAccountsExport  extends PdaUserAccountsTodaySearchDtoCore {
        
      
      }
  /** 
   * @description:  交账数据-excel导出
   * @param {PdaUserAccountsTodaySearchDtoCore} data?,  
   * @return {*}
   */
  export const post_financial_accounts_export = async(data?:PdaUserAccountsTodaySearchDtoCore,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostFinancialAccountsExportbydate  extends TimeLocalDate {
        
      
      }
  /** 
   * @description:  交账根据日期导出-excel导出
   * @param {TimeLocalDate} data?,  
   * @return {*}
   */
  export const post_financial_accounts_exportByDate = async(data?:TimeLocalDate,) => {
    
  const res = await server.POST<ArrayBuffer> (`/financial/accounts/exportByDate`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
    
   
  /** 
   * @description:  充值统计-图表
     
   * @return {*}
   */
  export const get_financial_top_up_chart = async() => {
    
  const res = await server.GET<{[key:string]:any}> (`/financial/top-up/chart`, );

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
    
   export interface GetFinancialFinancesday  extends CoreLotWithTimeRangeSearchDto {
        
      
      }
  /** 
   * @description:  财务分析-日期
   * @param {GetFinancialFinancesday} params? 
   * @return {*}
   */
  export const get_financial_financesDay = async(params?:GetFinancialFinancesday) => {
    
  const res = await server.GET<FinanceResult[]> (`/financial/financesDay`,{params} );

        return res?.result??[]; 
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
    
   export interface GetFinancialChargeRecords  extends ChargeRecordSearchDto,Paging {
        
      
      }
  /** 
   * @description:  承包交账明细-带分页
   * @param {GetFinancialChargeRecords} params? 
   * @return {*}
   */
  export const get_financial_charge_records = async(params?:GetFinancialChargeRecords) => {
    
  const res = await server.GET<IPage<ChargeRecord>> (`/financial/charge/records`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccounts  extends PdaUserAccountsTodaySearchDtoCore,Paging {
        
      
      }
  /** 
   * @description:  交账数据-带分页
   * @param {GetFinancialAccounts} params? 
   * @return {*}
   */
  export const get_financial_accounts = async(params?:GetFinancialAccounts) => {
    
  const res = await server.GET<IPage<PdaUserAccountsTodayVo>> (`/financial/accounts`,{params} );

        return res?.result; 
        }
    
   export interface GetFinancialAccountsIdCollection  extends PdaAccountDto,Paging {
        id?:string;
      
      }
  /** 
   * @description:  员工交账代收明细-带分页
   * @param {GetFinancialAccountsIdCollection} params? 
   * @return {*}
   */
  export const get_financial_accounts_id_collection = async(params?:GetFinancialAccountsIdCollection) => {
    
  const res = await server.GET<IPage<CollectionOrderVo>> (`/financial/accounts/${params?.id}/collection`,{params} );

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
    
   export interface GetFinancialAccountsHis  extends PdaUserAccountsHisSearchDto,Paging {
        
      
      }
  /** 
   * @description:  员工交账明细-带分页
   * @param {GetFinancialAccountsHis} params? 
   * @return {*}
   */
  export const get_financial_accounts_his = async(params?:GetFinancialAccountsHis) => {
    
  const res = await server.GET<IPage<PdaUserAccountsVo>> (`/financial/accounts/his`,{params} );

        return res?.result; 
        }
    
   export interface DeleteFinancialChargeId   {
        id?:string;
      
      }
  /** 
   * @description:  删除交账人
   * @param {DeleteFinancialChargeId} params? 
   * @return {*}
   */
  export const delete_financial_charge_id = async(params?:DeleteFinancialChargeId) => {
    
  const res = await server.DELETE (`/financial/charge/${params?.id}`,{params} );

        return res?.success; 
        }
    
   export interface DeleteFinancialChargeRecordsId   {
        id?:string;
      
      }
  /** 
   * @description:  删除承包交账用户明细
   * @param {DeleteFinancialChargeRecordsId} params? 
   * @return {*}
   */
  export const delete_financial_charge_records_id = async(params?:DeleteFinancialChargeRecordsId) => {
    
  const res = await server.DELETE (`/financial/charge/records/${params?.id}`,{params} );

        return res?.success; 
        }
     
    export interface ChargeUserUpdDto{
      id?:string;
  name?:string;
  area?:string;
  lot?:string;
  totalPlace?:number;

    } 
    export interface BaseIds{
     /** id的数组 */
 ids?:string[];

    } 
    export interface TimeRangeDate{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;

    } 
    export interface OrderIncomeSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车点ID列表 */
 lotIds?:string[];
  laborType?:number;
 /** 期数 */
 periods?:string[];
  staffName?:string;

    } 
    export interface PplIncomeVo{
      id?:string;
  archivedDate?:string;
  areaId?:string;
  streetId?:string;
  lotId?:string;
  effectivePlaceCount?:number;
  orderTotal?:number;
  originalIncome?:number;
  generalIncome?:number;
  actualIncome?:number;
  arrears?:number;
  takeReceived?:number;
  received?:number;
  discountMoney?:number;
  discountNum?:number;
  freeTimeFrameNum?:number;
  wechatMpPay?:number;
  wechatMpPayNum?:number;
  wechatMpPayDiscount?:number;
  wechatMpPayDiscountNum?:number;
  aliPay?:number;
  aliPayNum?:number;
  aliPayDiscount?:number;
  aliPayDiscountNum?:number;
  balancePay?:number;
  balancePayNum?:number;
  balancePayDiscount?:number;
  balancePayDiscountNum?:number;
  specialCarMoney?:number;
  specialCarNum?:number;
  freeCarMoney?:number;
  freeCarNum?:number;
  exemptMoney?:number;
  exemptNum?:number;
  createdAt?:string;

    } 
    export interface IncomeChartPayInfoInner{
     /** 支付-支付宝金额 */
 aliMoney?:number;
 /** 支付-微信小程序 */
 wechatMpMoney?:number;
 /** 支付-微信 */
 wechatMoney?:number;
 /** 支付-现金 */
 cashMoney?:number;
 /** 笔数-已收 */
 receivedNum?:number;
 /** 笔数-欠费 */
 arrearsNum?:number;
 /** 笔数-免费 */
 freeNum?:number;
 /** 笔数-特殊车辆 */
 specialNum?:number;

    } 
    export interface PplIncomeChartVo{
      left?:IncomeChartPayInfoInner;
  right?:{[key:string]:PplIncomeVo};

    } 
    export interface PplArrearsVo{
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
    export interface PplTakeReceivedSearchDto{
     /** 日期 */
 date?:string;
  plateNumber?:string;
  staffName?:string;
 /** 点位列表 */
 lotIds?:string[];
 /** 订单id 模糊 */
 orderId?:string;

    } 
    export interface PplArrearsReceivedVo{
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
    export interface FinanceSearch{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车点ID列表 */
 lotIds?:string[];
 /** 0全部 1地磁 2地锁 */
 type?:number;

    } 
    export interface FinanceResultVo{
     /** 日期 */
 date?:string;
 /** 总收入 */
 generalIncome?:number;
 /** 欠费 */
 arrears?:number;
 /** 已收 */
 received?:number;
 /** 应收未拍照 */
 epIncome?:number;
 /** 现金支付 */
 cashPay?:number;
 /** 微信扫码 */
 wechatPay?:number;
 /** 微信小程序 */
 wechatMpPay?:number;
 /** 支付宝支付 */
 aliPay?:number;
 /** 余额支付 */
 balancePay?:number;
 /** 活动免费金额 */
 freeEventAmount?:number;
 /** 订单总数 */
 total?:number;
 /** 有效订单总数 */
 effectiveTotal?:number;
 /** 欠费笔数 */
 arrearsNum?:number;
 /** 已收笔数 */
 receivedNum?:number;
 /** 应收未拍照笔数 */
 epIncomeNum?:number;
 /** 现金支付笔数 */
 cashPayNum?:number;
 /** 微信扫码笔数 */
 wechatPayNum?:number;
 /** 微信小程序笔数 */
 wechatMpPayNum?:number;
 /** 支付宝支付笔数 */
 aliPayNum?:number;
 /** 余额支付笔数 */
 balancePayNum?:number;
 /** 免费时段笔数 */
 freeTimeNum?:number;
 /** 免费车辆笔数 */
 freeCarNum?:number;
 /** 特殊车辆笔数 */
 specialCarNum?:number;
 /** 车位数 */
 totalPlace?:number;
 /** 总共拍照数量 */
 photoCount?:number;
 /** 收费率 */
 chargeRate?:string;
 /** 拍照率 */
 photographRate?:string;
 /** 周转率 */
 turnoverRate?:string;

    } 
    export interface FinanceChartVo{
      left?:FinanceResultVo;
  right?:{[key:string]:FinanceResultVo};

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
    export interface GeomIncomeVo{
     /** 日期 */
 date?:string;
 /** 原始收入 */
 originalIncome?:number;
 /** 目标收入 */
 targetIncome?:number;
 /** 实际应收 */
 generalIncome?:number;
 /** 实际到账 */
 actualIncome?:number;
 /** 订单总数 */
 orderTotal?:number;
 /** 异常订单总金额 */
 errorIncome?:number;
 /** 异常订单总数据 */
 errorNum?:number;
 /** 欠费数据 */
 arrears?:number;
 /** 车位数 */
 effectivePlaceCount?:number;
 /** 已收到的(这一天) */
 received?:number;
 /** 主动优惠 */
 discountMoney?:number;
 /** 免费时段免费次数 */
 freeTimeFrameNum?:number;
 /** 微信支付 */
 wechatPay?:number;
 /** 微信支付,次数 */
 wechatPayNum?:number;
 /** 微信支付(优惠金额) */
 wechatPayDiscount?:number;
 /** 微信支付,优惠次数 */
 wechatPayDiscountNum?:number;
 /** 小程序微信支付 */
 wechatMpPay?:number;
 /** 小程序微信支付,次数 */
 wechatMpPayNum?:number;
 /** 小程序微信支付(优惠金额) */
 wechatMpPayDiscount?:number;
 /** 小程序微信支付,优惠次数 */
 wechatMpPayDiscountNum?:number;
 /** 支付宝支付 */
 aliPay?:number;
 /** 支付宝支付,次数 */
 aliPayNum?:number;
 /** 支付宝支付(优惠金额) */
 aliPayDiscount?:number;
 /** 支付宝支付,优惠次数 */
 aliPayDiscountNum?:number;
 /** 现金支付 */
 cashPay?:number;
 /** 现金支付,次数 */
 cashPayNum?:number;
 /** 余额支付 */
 balancePay?:number;
 /** 余额支付,次数 */
 balancePayNum?:number;
 /** 余额支付(优惠金额) */
 balancePayDiscount?:number;
 /** 余额支付,优惠次数 */
 balancePayDiscountNum?:number;
 /** 免费车辆,金额 */
 freeCarMoney?:number;
 /** 免费车辆,次数 */
 freeCarNum?:number;
 /** 特殊车辆,金额 */
 specialCarMoney?:number;
 /** 特殊车辆,次数 */
 specialCarNum?:number;
 /** 免单,金额 */
 exemptMoney?:number;
 /** 免单,次数 */
 exemptNum?:number;
 /** 已收到的(账单不是这一天的) */
 takeReceived?:number;
 /** 优惠金额(账单不是这一天的) */
 takeDiscountMoney?:number;
 /** 微信支付(账单不是这一天的) */
 takeWechatPay?:number;
 /** 微信支付,次数(账单不是这一天的) */
 takeWechatPayNum?:number;
 /** 微信支付(优惠金额)(账单不是这一天的) */
 takeWechatPayDiscount?:number;
 /** 微信支付,优惠次数(账单不是这一天的) */
 takeWechatPayDiscountNum?:number;
 /** 微信支付(账单不是这一天的) */
 takeWechatMpPay?:number;
 /** 微信支付,次数(账单不是这一天的) */
 takeWechatMpPayNum?:number;
 /** 小程序微信支付(优惠金额)(账单不是这一天的) */
 takeWechatMpPayDiscount?:number;
 /** 小程序微信支付,优惠次数(账单不是这一天的) */
 takeWechatMpPayDiscountNum?:number;
 /** 支付宝支付(账单不是这一天的) */
 takeAliPay?:number;
 /** 支付宝支付,次数(账单不是这一天的) */
 takeAliPayNum?:number;
 /** 支付宝支付(优惠金额)(账单不是这一天的) */
 takeAliPayDiscount?:number;
 /** 支付宝支付,优惠次数(账单不是这一天的) */
 takeAliPayDiscountNum?:number;
 /** 现金支付(账单不是这一天的) */
 takeCashPay?:number;
 /** 现金支付,次数(账单不是这一天的) */
 takeCashPayNum?:number;
 /** 余额支付(账单不是这一天的) */
 takeBalancePay?:number;
 /** 余额支付,次数(账单不是这一天的) */
 takeBalancePayNum?:number;
 /** 余额支付(优惠金额)(账单不是这一天的) */
 takeBalancePayDiscount?:number;
 /** 余额支付,优惠次数(账单不是这一天的) */
 takeBalancePayDiscountNum?:number;
 /** 免单,金额(账单不是这一天的) */
 takeExemptMoney?:number;
 /** 免单,次数(账单不是这一天的) */
 takeExemptNum?:number;
 /** 已收到的(本月非本天) */
 takeMonthReceived?:number;
 /** 优惠金额,(账单是统计当天之前但是不超过当月的) */
 takeMonthDiscountMoney?:number;
 /** 微信支付(本月非本天) */
 takeMonthWechatPay?:number;
 /** 微信支付,次数(本月非本天) */
 takeMonthWechatPayNum?:number;
 /** 微信支付(优惠金额)(账单是统计当天之前但是不超过当月的) */
 takeMonthWechatPayDiscount?:number;
 /** 微信支付,优惠次数(账单是统计当天之前但是不超过当月的) */
 takeMonthWechatPayDiscountNum?:number;
 /** 微信小程序支付(本月非本天) */
 takeMonthWechatMpPay?:number;
 /** 微信小程序支付,次数(本月非本天) */
 takeMonthWechatMpPayNum?:number;
 /** 微信小程序支付(优惠金额)(账单是统计当天之前但是不超过当月的) */
 takeMonthWechatMpPayDiscount?:number;
 /** 微信小程序支付,优惠次数(账单是统计当天之前但是不超过当月的) */
 takeMonthWechatMpPayDiscountNum?:number;
 /** 支付宝支付(本月非本天) */
 takeMonthAliPay?:number;
 /** 支付宝支付,次数(本月非本天) */
 takeMonthAliPayNum?:number;
 /** 支付宝支付(优惠金额)(账单是统计当天之前但是不超过当月的) */
 takeMonthAliPayDiscount?:number;
 /** 支付宝支付,优惠次数(账单是统计当天之前但是不超过当月的) */
 takeMonthAliPayDiscountNum?:number;
 /** 现金支付(本月非本天) */
 takeMonthCashPay?:number;
 /** 现金支付,次数(本月非本天) */
 takeMonthCashPayNum?:number;
 /** 余额支付(本月非本天) */
 takeMonthBalancePay?:number;
 /** 余额支付,次数(本月非本天) */
 takeMonthBalancePayNum?:number;
 /** 余额支付(优惠金额)(账单是统计当天之前但是不超过当月的) */
 takeMonthBalancePayDiscount?:number;
 /** 余额支付,优惠次数(账单是统计当天之前但是不超过当月的) */
 takeMonthBalancePayDiscountNum?:number;
 /** 免单,金额(本月非本天) */
 takeMonthExemptMoney?:number;
 /** 免单,次数(本月非本天) */
 takeMonthExemptNum?:number;
 /** omGzHp 总数 omGzHp = originalMoneyGtZeroHavePic = 预计应收>0的已拍照订单 */
 omGzHpTotal?:number;
 /** omGzNp 总金额 omGzNp = originalMoneyGtZeroNoPic = 预计应收>0的未拍照订单 */
 omGzNpMoney?:number;
 /** omGzNp 总数 omGzNp = originalMoneyGtZeroNoPic = 预计应收>0的未拍照订单 */
 omGzNpTotal?:number;

    } 
    export interface GeomIncomeChartVo{
      left?:IncomeChartPayInfoInner;
  right?:{[key:string]:GeomIncomeVo};

    } 
    export interface CoreLotWithTimeRangeSearchDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
 /** 点位列表 */
 lotIds?:string[];

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
    export interface ChargeUserAddDto{
      name?:string;
  phone?:string;
  area?:string;
  lot?:string;
  totalPlace?:number;

    } 
    export interface ChargeRecordSearchDto{
      userId?:string;

    } 
    export interface ChargeUserIdDto{
      userId?:string;

    } 
    export interface ChargeUserSearchDto{
      name?:string;
  phone?:string;
  area?:string;
  lot?:string;
  year?:number;
 /** 几月 */
 month?:number;
 /** 第几个周期 1-3 */
 round?:number;

    } 
    export interface ChargeSingleConfigDto{
      userId?:string;
  oneMoney?:number;
  oneFrom?:number;
  oneTo?:number;
  twoMoney?:number;
  twoFrom?:number;
  twoTo?:number;
  threeMoney?:number;
  threeFrom?:number;
  threeTo?:number;

    } 
    export interface ChargeCashDto{
     /** 交账ID */
 id?:string;

    } 
    export interface ChargeBatchConfigDto{
      userIds?:string[];
  oneMoney?:number;
  oneFrom?:number;
  oneTo?:number;
  twoMoney?:number;
  twoFrom?:number;
  twoTo?:number;
  threeMoney?:number;
  threeFrom?:number;
  threeTo?:number;

    } 
    export interface FinancialBatchConfimAccountsDto{
     /** 查询开始日期 */
 from?:string;
 /** 查询结束日期 */
 to?:string;
 /** 停车点ID列表 */
 lotIds?:string[];
  laborType?:number;
  dates?:string[];
  money?:number;

    } 
    export interface PdaUserAccountsHisSearchDto{
     /** pda用户ID */
 pdaUserId?:string;

    } 
    export interface PdaUserAccountsTodaySearchDtoCore{
     /** 点位列表 */
 lotIds?:string[];
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
 /** 员工编号 */
 jobNum?:string;
 /** 姓名 */
 name?:string;

    } 
    export interface TimeLocalDate{
      date?:string;

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

    } 
    export interface FinanceResult{
      id?:string;
  name?:string;
 /** 总收入 */
 generalIncome?:number;
 /** 欠费 */
 arrears?:number;
 /** 已收 */
 received?:number;
 /** 应收未拍照 */
 epIncome?:number;
 /** 现金支付 */
 cashPay?:number;
 /** 微信扫码 */
 wechatPay?:number;
 /** 微信小程序 */
 wechatMpPay?:number;
 /** 支付宝支付 */
 aliPay?:number;
 /** 余额支付 */
 balancePay?:number;
 /** 订单总数 */
 total?:number;
 /** 有效订单总数 */
 effectiveTotal?:number;
 /** 特殊车辆笔数 */
 specialCarNum?:number;
 /** 订单车位数 */
 totalPlace?:number;
 /** 总车位数 */
 totalPlaceNum?:number;
 /** 总共拍照数量 */
 photoCount?:number;
 /** 小于15分钟拍照数量 */
 freePhotoCount?:number;
 /** 大于15分钟订单总数 */
 chargeCount?:number;
 /** 收费率 */
 chargeRate?:string;
 /** 拍照率 */
 photographRate?:string;
 /** 周转率 */
 turnoverRate?:string;

    } 
    export interface PayAffirmErrorVo{
     /** id */
 id?:string;
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
    export interface CouponSearchDto{
      from?:string;
  to?:string;
  appUserId?:string;
 /** 1 未使用 2已使用 3已过期 */
 type?:number;
  searchDate?:string;

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
    export interface ChargeUserVo{
      id?:string;
  name?:string;
  phone?:string;
  area?:string;
  lot?:string;
  status?:boolean;
  totalPlace?:number;
  paidMoney?:number;
  unPaidMoney?:number;

    } 
    export interface ChargeRecord{
      id?:string;
  userId?:string;
  year?:number;
  month?:number;
  round?:number;
  money?:number;
  type?:number;
  status?:boolean;
  payAt?:string;
  remarks?:string;
  createdAt?:string;

    } 
    export interface ChargeConfig{
      id?:string;
  userId?:string;
  oneMoney?:number;
  oneFrom?:number;
  oneTo?:number;
  twoMoney?:number;
  twoFrom?:number;
  twoTo?:number;
  threeMoney?:number;
  threeFrom?:number;
  threeTo?:number;
  createdAt?:string;

    } 
    export interface PdaUserAccountsTodayVo{
     /** pda用户ID */
 pdaUserId?:string;
 /** 工号 */
 jobNum?:string;
 /** 姓名 */
 name?:string;
 /** 值守点 */
 position?:string;
 /** 联系方式 */
 phone?:string;
 /** 已缴金额 */
 delivered?:number;
 /** 欠缴金额 */
 unpaid?:number;
 /** 区域名 */
 areaName?:string;
 /** 街道名 */
 streetName?:string;
 /** 停车点名 */
 lotName?:string;

    } 
    export interface PdaAccountDto{
     /** 自首0 代收1,默认值1代收 */
 type?:number;

    } 
    export interface CollectionOrderVo{
     /** ID */
 id?:string;
 /** 开始时间 */
 startAt?:string;
 /** 结束时间 */
 endAt?:string;
 /** 欠费时长 */
 overdueTime?:string;
  areaName?:string;
  streetName?:string;
  lotName?:string;
  duringTime?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 实际金额(单位:分) */
 realMoney?:number;
  payAt?:string;
 /** 支付方式 0免费 1活动免费 5现金 6余额 7微信支付 8支付宝  */
 mode?:MsgType;

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
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
  fromTime?:string;
  toTime?:string;

    } 
    export interface AccountsItemVo{
     /** 交账ID */
 id?:string;
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
    export interface PdaUserAccountsVo{
     /** id */
 id?:string;
 /** 交账日期 */
 accountsDate?:string;
 /** 自己收费金额 */
 selfMoney?:number;
 /** 代收金额 */
 otherMoney?:number;
 /** 交账金额 */
 accountsMoney?:number;
 /** 核销时间 */
 confirmAt?:string;
 /** 交账状态,0:未交账,1:已交账,2:不需要交账 */
 status?:MsgType;
  statusStr?:string;
 /** 核销人 */
 confirmUserName?:string;

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
    
   export interface PutMiniEnterpriseUser  extends EnterpriseUserDto {
        
      
      }
  /** 
   * @description:  更新企业用户
   * @param {EnterpriseUserDto} data?,  
   * @return {*}
   */
  export const put_mini_enterprise_user = async(data?:EnterpriseUserDto,) => {
    
  const res = await server.PUT (`/mini/enterprise-user`,{data} );

        return res?.success; 
        }
    
   export interface PostMiniEnterpriseUser  extends EnterpriseUserDto {
        
      
      }
  /** 
   * @description:  添加企业用户
   * @param {EnterpriseUserDto} data?,  
   * @return {*}
   */
  export const post_mini_enterprise_user = async(data?:EnterpriseUserDto,) => {
    
  const res = await server.POST (`/mini/enterprise-user`,{data} );

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
   * @param {CreditsSearchDto} data?,* @param {PostMiniUsersUidCreditsExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_credits_export = async(data?:CreditsSearchDto,params?:PostMiniUsersUidCreditsExport) => {
    
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
   * @param {CouponSearchDto} data?,* @param {PostMiniUsersUidCouponsExport} params? 
   * @return {*}
   */
  export const post_mini_users_uId_coupons_export = async(data?:CouponSearchDto,params?:PostMiniUsersUidCouponsExport) => {
    
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
    
   export interface PostMiniUsersTopUp  extends UserTopUp {
        
      
      }
  /** 
   * @description:  充值
   * @param {UserTopUp} data?,  
   * @return {*}
   */
  export const post_mini_users_top_up = async(data?:UserTopUp,) => {
    
  const res = await server.POST (`/mini/users/top-up`,{data} );

        return res?.success; 
        }
    
   export interface PostMiniUsersExport  extends AppUsersSearchDto {
        
      
      }
  /** 
   * @description:  车主列表-excel导出
   * @param {AppUsersSearchDto} data?,  
   * @return {*}
   */
  export const post_mini_users_export = async(data?:AppUsersSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/users/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniFeedbackExport  extends FeedBackDto {
        
      
      }
  /** 
   * @description:  反馈-excel导出
   * @param {FeedBackDto} data?,  
   * @return {*}
   */
  export const post_mini_feedback_export = async(data?:FeedBackDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/feedback/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniEnterpriseUserExport  extends EnterpriseUsersSearchDto {
        
      
      }
  /** 
   * @description:  企业用户-excel导出
   * @param {EnterpriseUsersSearchDto} data?,  
   * @return {*}
   */
  export const post_mini_enterprise_user_export = async(data?:EnterpriseUsersSearchDto,) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/enterprise-user/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
        }
    
   export interface PostMiniCommentsExport  extends CommentRangeSearchDtoCore {
        
      
      }
  /** 
   * @description:  服务评价-导出
   * @param {CommentRangeSearchDtoCore} data?,  
   * @return {*}
   */
  export const post_mini_comments_export = async(data?:CommentRangeSearchDtoCore,) => {
    
  const res = await server.POST<ArrayBuffer> (`/mini/comments/export`,{data,responseType: 'arraybuffer'} );

        
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
        } else {
          return null;
        }
        
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
    
  const res = await server.GET<IPage<OrderVo>> (`/mini/users/${params?.uId}/orders`,{params} );

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
    
  const res = await server.GET<IPage<OrderVo>> (`/mini/users/${params?.uId}/driving-records`,{params} );

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
    
   export interface GetMiniStatisticWeeklyvisittrend  extends AnalysisDto {
        
      
      }
  /** 
   * @description:  获取周访问趋势
   * @param {GetMiniStatisticWeeklyvisittrend} params? 
   * @return {*}
   */
  export const get_mini_statistic_weeklyVisitTrend = async(params?:GetMiniStatisticWeeklyvisittrend) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/weeklyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniStatisticWeeklyretain  extends AnalysisDto {
        
      
      }
  /** 
   * @description:  周留存
   * @param {GetMiniStatisticWeeklyretain} params? 
   * @return {*}
   */
  export const get_mini_statistic_weeklyRetain = async(params?:GetMiniStatisticWeeklyretain) => {
    
  const res = await server.GET<WxMaRetainInfo> (`/mini/statistic/weeklyRetain`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniStatisticVisitpage  extends AnalysisSingleDto {
        
      
      }
  /** 
   * @description:  获取访问页面数据
   * @param {GetMiniStatisticVisitpage} params? 
   * @return {*}
   */
  export const get_mini_statistic_visitPage = async(params?:GetMiniStatisticVisitpage) => {
    
  const res = await server.GET<WxMaVisitPage[]> (`/mini/statistic/visitPage`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniStatisticVisitdistribution  extends AnalysisSingleDto {
        
      
      }
  /** 
   * @description:  获取访问分布
   * @param {GetMiniStatisticVisitdistribution} params? 
   * @return {*}
   */
  export const get_mini_statistic_visitDistribution = async(params?:GetMiniStatisticVisitdistribution) => {
    
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
    
   export interface GetMiniStatisticMonthlyvisittrend  extends AnalysisDto {
        
      
      }
  /** 
   * @description:  获取月访问趋势
   * @param {GetMiniStatisticMonthlyvisittrend} params? 
   * @return {*}
   */
  export const get_mini_statistic_monthlyVisitTrend = async(params?:GetMiniStatisticMonthlyvisittrend) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/monthlyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniStatisticMonthlyretain  extends AnalysisDto {
        
      
      }
  /** 
   * @description:  月留存
   * @param {GetMiniStatisticMonthlyretain} params? 
   * @return {*}
   */
  export const get_mini_statistic_monthlyRetain = async(params?:GetMiniStatisticMonthlyretain) => {
    
  const res = await server.GET<WxMaRetainInfo> (`/mini/statistic/monthlyRetain`,{params} );

        return res?.result; 
        }
    
   export interface GetMiniStatisticDailyvisittrend  extends AnalysisSingleDto {
        
      
      }
  /** 
   * @description:  获取日访问趋势
   * @param {GetMiniStatisticDailyvisittrend} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailyVisitTrend = async(params?:GetMiniStatisticDailyvisittrend) => {
    
  const res = await server.GET<WxMaVisitTrend[]> (`/mini/statistic/dailyVisitTrend`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniStatisticDailysummarytrend  extends AnalysisSingleDto {
        
      
      }
  /** 
   * @description:  查询概况趋势
   * @param {GetMiniStatisticDailysummarytrend} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailySummaryTrend = async(params?:GetMiniStatisticDailysummarytrend) => {
    
  const res = await server.GET<WxMaSummaryTrend[]> (`/mini/statistic/dailySummaryTrend`,{params} );

        return res?.result??[]; 
        }
    
   export interface GetMiniStatisticDailyretain  extends AnalysisDto {
        
      
      }
  /** 
   * @description:  日留存
   * @param {GetMiniStatisticDailyretain} params? 
   * @return {*}
   */
  export const get_mini_statistic_dailyRetain = async(params?:GetMiniStatisticDailyretain) => {
    
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
    
   export interface GetMiniCommentsChart  extends CommentRangeSearchDtoCore {
        
      
      }
  /** 
   * @description:  图表
   * @param {GetMiniCommentsChart} params? 
   * @return {*}
   */
  export const get_mini_comments_chart = async(params?:GetMiniCommentsChart) => {
    
  const res = await server.GET<CommentChartVo> (`/mini/comments/chart`,{params} );

        return res?.result; 
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
    export interface TopUpSearchDto{
      date?:string;
  appUserId?:string;
  orderBy?:string;

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
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
  id?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号-模糊查询-后台自动小写转大写 */
 plateNumber?:string;
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
 plateNumber?:string;
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
 /** 区域 */
 areaId?:string;
 /** 街道 */
 streetId?:string;
 /** 点位 */
 lotId?:string;
 /** 0全部 1地磁 2地锁 */
 type?:number;
 /** 人员类型 */
 laborType?:number;
 /** 点位期数 */
 periods?:string[];
 /** 点位列表 */
 lotIds?:string[];
  status?:boolean;
  pdaUser?:string;

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
    export interface OrderVo{
      id?:string;
 /** 微信用户ID */
 appUserId?:string;
 /** 开始停车时间 */
 startAt?:string;
 /** 结束停车时间 */
 endAt?:string;
  position?:string;
 /** 车位号 */
 placeNum?:string;
 /** 车牌号 */
 plateNumber?:string;
 /** 停车图片 */
 picture?:string;
 /** 区域 */
 areaName?:string;
 /** 街道 */
 streetName?:string;
 /** 停车点名字 */
 lotName?:string;
 /** 原始金额(单位:分) */
 originalMoney?:number;
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
 /** 使用优惠券名称 */
 couponName?:string;
 /** 开始信息来源 */
 beginType?:MsgType;
 /** 结束信息来源 */
 endType?:MsgType;
 /** 子订单数量 */
 itemCount?:number;
 /** 优惠数量 */
 discountCount?:number;
 /** 缴费类型 */
 chargeType?:MsgType;

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