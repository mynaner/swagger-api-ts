import { IPage, Paging, MsgType } from "@/types/index";
import { server } from "@/utils/axios/request";

export interface PutCtTopUpDiscountsId extends CtTopUpDiscountsDto {
  id?: string;
}
/**
 * @description:  修改一个优惠活动
 * @param {CtTopUpDiscountsDto} data,* @param {PutCtTopUpDiscountsId} params
 * @return {*}
 */
export const put_ct_top_up_discounts_id = async (
  data: CtTopUpDiscountsDto,
  params: PutCtTopUpDiscountsId
) => {
  const res = await server.PUT(`/ct/top-up/discounts/${params.id}`, {
    data,
    params,
  });

  return res?.success;
};

export interface DeleteCtTopUpDiscountsId {
  id?: string;
}
/**
 * @description:  删除一个优惠活动
 * @param {DeleteCtTopUpDiscountsId} params
 * @return {*}
 */
export const delete_ct_top_up_discounts_id = async (
  params: DeleteCtTopUpDiscountsId
) => {
  const res = await server.DELETE(`/ct/top-up/discounts/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface PutCtTopUpDiscountsItem extends TopUpDiscountsItemSaveDto {}
/**
 * @description:  该活动修改一个子项目
 * @param {TopUpDiscountsItemSaveDto} data,
 * @return {*}
 */
export const put_ct_top_up_discounts_item = async (
  data: TopUpDiscountsItemSaveDto
) => {
  const res = await server.PUT(`/ct/top-up/discounts-item`, { data });

  return res?.success;
};

export interface PostCtTopUpDiscountsItem extends TopUpDiscountsItemSaveDto {}
/**
 * @description:  该活动新增一个子项目
 * @param {TopUpDiscountsItemSaveDto} data,
 * @return {*}
 */
export const post_ct_top_up_discounts_item = async (
  data: TopUpDiscountsItemSaveDto
) => {
  const res = await server.POST(`/ct/top-up/discounts-item`, { data });

  return res?.success;
};

export interface GetCtProperty extends SearchPropertyDto, Paging {}
/**
 * @description:  分页列表
 * @param {GetCtProperty} params
 * @return {*}
 */
export const get_ct_property = async (params: GetCtProperty) => {
  const res = await server.GET<IPage<PropertyVo>>(`/ct/property`, { params });

  return res?.result;
};

export interface PutCtProperty extends TenantDto {}
/**
 * @description:  修改物业方
 * @param {TenantDto} data,
 * @return {*}
 */
export const put_ct_property = async (data: TenantDto) => {
  const res = await server.PUT(`/ct/property`, { data });

  return res?.success;
};

export interface PostCtProperty extends TenantDto {}
/**
 * @description:  新增物业方
 * @param {TenantDto} data,
 * @return {*}
 */
export const post_ct_property = async (data: TenantDto) => {
  const res = await server.POST(`/ct/property`, { data });

  return res?.success;
};

export interface PostCtWithdrawalAudit extends AuditDto {}
/**
 * @description:  提现审核
 * @param {AuditDto} data,
 * @return {*}
 */
export const post_ct_withdrawal_audit = async (data: AuditDto) => {
  const res = await server.POST(`/ct/withdrawal/audit`, { data });

  return res?.success;
};

export interface GetCtTopUpDiscounts extends Paging {}
/**
 * @description:  充值活动列表-分页
 * @param {GetCtTopUpDiscounts} params
 * @return {*}
 */
export const get_ct_top_up_discounts = async (params: GetCtTopUpDiscounts) => {
  const res = await server.GET<IPage<CtTopUpDiscounts>>(
    `/ct/top-up/discounts`,
    { params }
  );

  return res?.result;
};

export interface PostCtTopUpDiscounts extends CtTopUpDiscountsDto {}
/**
 * @description:  新增一个优惠活动
 * @param {CtTopUpDiscountsDto} data,
 * @return {*}
 */
export const post_ct_top_up_discounts = async (data: CtTopUpDiscountsDto) => {
  const res = await server.POST(`/ct/top-up/discounts`, { data });

  return res?.success;
};

export interface GetCtTcc extends LibSearchDto, Paging {}
/**
 * @description:  分页
 * @param {GetCtTcc} params
 * @return {*}
 */
export const get_ct_tcc = async (params: GetCtTcc) => {
  const res = await server.GET<IPage<ShareTccInfoVo>>(`/ct/tcc`, { params });

  return res?.result;
};

export interface PostCtTcc extends LibReverseDto {}
/**
 * @description:  添加编辑共享车库
 * @param {LibReverseDto} data,
 * @return {*}
 */
export const post_ct_tcc = async (data: LibReverseDto) => {
  const res = await server.POST(`/ct/tcc`, { data });

  return res?.success;
};

export interface PostCtTccStatusId {
  id?: string;
}
/**
 * @description:  启用禁用共享
 * @param {PostCtTccStatusId} params
 * @return {*}
 */
export const post_ct_tcc_status_id = async (params: PostCtTccStatusId) => {
  const res = await server.POST(`/ct/tcc/status/${params.id}`, { params });

  return res?.success;
};

export interface PostCtTccApplyId {
  id?: string;
}
/**
 * @description:  启用禁用可申请状态
 * @param {PostCtTccApplyId} params
 * @return {*}
 */
export const post_ct_tcc_apply_id = async (params: PostCtTccApplyId) => {
  const res = await server.POST(`/ct/tcc/apply/${params.id}`, { params });

  return res?.success;
};

export interface PostCtTccAllocateRate extends AllocateRateDto {}
/**
 * @description:  指定分配比例
 * @param {AllocateRateDto} data,
 * @return {*}
 */
export const post_ct_tcc_allocate_rate = async (data: AllocateRateDto) => {
  const res = await server.POST(`/ct/tcc/allocate-rate`, { data });

  return res?.success;
};

export interface PostCtSettleIdVerify {
  id?: string;
}
/**
 * @description:  确认
 * @param {PostCtSettleIdVerify} params
 * @return {*}
 */
export const post_ct_settle_id_verify = async (
  params: PostCtSettleIdVerify
) => {
  const res = await server.POST(`/ct/settle/${params.id}/verify`, { params });

  return res?.success;
};

export interface PostCtSettleIdRemit extends SettleRemitDto {
  id?: string;
}
/**
 * @description:  打款
 * @param {SettleRemitDto} data,* @param {PostCtSettleIdRemit} params
 * @return {*}
 */
export const post_ct_settle_id_remit = async (
  data: SettleRemitDto,
  params: PostCtSettleIdRemit
) => {
  const res = await server.POST(`/ct/settle/${params.id}/remit`, {
    data,
    params,
  });

  return res?.success;
};

export interface PostCtPropertyPropertyidTcc {
  propertyId?: string;
}
/**
 * @description:  获取车场和分配比例
 * @param {PostCtPropertyPropertyidTcc} params
 * @return {*}
 */
export const post_ct_property_propertyId_tcc = async (
  params: PostCtPropertyPropertyidTcc
) => {
  const res = await server.POST<PropertyTccVo[]>(
    `/ct/property/${params.propertyId}/tcc`,
    { params }
  );

  return res?.result ?? [];
};

export interface PostCtPropertyId extends UpdateSettleDto {
  id?: string;
}
/**
 * @description:  修改结算规则
 * @param {UpdateSettleDto} data,* @param {PostCtPropertyId} params
 * @return {*}
 */
export const post_ct_property_id = async (
  data: UpdateSettleDto,
  params: PostCtPropertyId
) => {
  const res = await server.POST(`/ct/property/${params.id}`, { data, params });

  return res?.success;
};

export interface PostCtPropertyUpdatemenu extends UpdatePermissionDto {}
/**
 * @description:  更新物业权限
 * @param {UpdatePermissionDto} data,
 * @return {*}
 */
export const post_ct_property_updateMenu = async (
  data: UpdatePermissionDto
) => {
  const res = await server.POST(`/ct/property/updateMenu`, { data });

  return res?.success;
};

export interface GetCtPlace extends SearchPlaceDto, Paging {}
/**
 * @description:  车位列表-分页
 * @param {GetCtPlace} params
 * @return {*}
 */
export const get_ct_place = async (params: GetCtPlace) => {
  const res = await server.GET<IPage<CtPlaceVo>>(`/ct/place`, { params });

  return res?.result;
};

export interface PostCtPlace extends CtPlaceDto {}
/**
 * @description:  添加车位
 * @param {CtPlaceDto} data,
 * @return {*}
 */
export const post_ct_place = async (data: CtPlaceDto) => {
  const res = await server.POST(`/ct/place`, { data });

  return res?.success;
};

export interface GetCtPlaceShare extends SearchSharePlaceDto, Paging {}
/**
 * @description:  车位审核列表-分页
 * @param {GetCtPlaceShare} params
 * @return {*}
 */
export const get_ct_place_share = async (params: GetCtPlaceShare) => {
  const res = await server.GET<IPage<CtPlaceShareVo>>(`/ct/place/share`, {
    params,
  });

  return res?.result;
};

export interface PostCtPlaceShare extends UpdStatusDto {}
/**
 * @description:  车位共享状态修改-批量
 * @param {UpdStatusDto} data,
 * @return {*}
 */
export const post_ct_place_share = async (data: UpdStatusDto) => {
  const res = await server.POST(`/ct/place/share`, { data });

  return res?.success;
};

export interface PostCtPlaceImport {
  tccId?: string;
  libId?: string;
  file?: File;
  [key: string]: any;
}
/**
 * @description:  车位导入
 * @param {PostCtPlaceImport} params
 * @return {*}
 */
export const post_ct_place_import = async (params: PostCtPlaceImport) => {
  const formdata = new FormData();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      formdata.set(key, element);
    }
  }

  const res = await server.POST<ImportResult>(`/ct/place/import`, {
    data: formdata,
  });

  return res?.result;
};

export interface PostCtPlaceAudit extends PlaceAuditDto {}
/**
 * @description:  审核车位
 * @param {PlaceAuditDto} data,
 * @return {*}
 */
export const post_ct_place_audit = async (data: PlaceAuditDto) => {
  const res = await server.POST(`/ct/place/audit`, { data });

  return res?.success;
};

export interface GetCtDeviceLock extends SearchLockDto {}
/**
 * @description:  锁列表
 * @param {GetCtDeviceLock} params
 * @return {*}
 */
export const get_ct_device_lock = async (params: GetCtDeviceLock) => {
  const res = await server.GET<IPage<LockVo>>(`/ct/device/lock`, { params });

  return res?.result;
};

export interface PostCtDeviceLock extends LockDto {}
/**
 * @description:  添加锁
 * @param {LockDto} data,
 * @return {*}
 */
export const post_ct_device_lock = async (data: LockDto) => {
  const res = await server.POST(`/ct/device/lock`, { data });

  return res?.success;
};

export interface PostCtDeviceLockUnbindLockid {
  lockId?: string;
}
/**
 * @description:  解绑车位
 * @param {PostCtDeviceLockUnbindLockid} params
 * @return {*}
 */
export const post_ct_device_lock_unbind_lockId = async (
  params: PostCtDeviceLockUnbindLockid
) => {
  const res = await server.POST(`/ct/device/lock/unbind/${params.lockId}`, {
    params,
  });

  return res?.success;
};

export interface PostCtDeviceLockBind extends BindPlaceDto {}
/**
 * @description:  绑定车位
 * @param {BindPlaceDto} data,
 * @return {*}
 */
export const post_ct_device_lock_bind = async (data: BindPlaceDto) => {
  const res = await server.POST(`/ct/device/lock/bind`, { data });

  return res?.success;
};

export interface GetCtWithdrawalRecord extends SearchWithdrawlDto {}
/**
 * @description:  提现记录
 * @param {GetCtWithdrawalRecord} params
 * @return {*}
 */
export const get_ct_withdrawal_record = async (
  params: GetCtWithdrawalRecord
) => {
  const res = await server.GET<IPage<WithdrawalRecordVo>>(
    `/ct/withdrawal/record`,
    { params }
  );

  return res?.result;
};

export interface GetCtWithdrawalChart extends TimeRangeDate {}
/**
 * @description:  提现图表
 * @param {GetCtWithdrawalChart} params
 * @return {*}
 */
export const get_ct_withdrawal_chart = async (params: GetCtWithdrawalChart) => {
  const res = await server.GET<WithdrawalStatisticsVo[]>(
    `/ct/withdrawal/chart`,
    { params }
  );

  return res?.result ?? [];
};

export interface GetCtUser extends SearchUserDto, Paging {}
/**
 * @description:  用户列表-分页
 * @param {GetCtUser} params
 * @return {*}
 */
export const get_ct_user = async (params: GetCtUser) => {
  const res = await server.GET<IPage<UserVo>>(`/ct/user`, { params });

  return res?.result;
};

export interface GetCtTopUp extends SearchTopUpDto, Paging {}
/**
 * @description:  充值统计-分页
 * @param {GetCtTopUp} params
 * @return {*}
 */
export const get_ct_top_up = async (params: GetCtTopUp) => {
  const res = await server.GET<IPage<CtTopUpLogVo>>(`/ct/top-up`, { params });

  return res?.result;
};

export interface GetCtTopUpDiscountsItemsId {
  id?: string;
}
/**
 * @description:  该优惠活动详情
 * @param {GetCtTopUpDiscountsItemsId} params
 * @return {*}
 */
export const get_ct_top_up_discounts_items_id = async (
  params: GetCtTopUpDiscountsItemsId
) => {
  const res = await server.GET<CtTopUpDiscountsItem[]>(
    `/ct/top-up/discounts-items/${params.id}`,
    { params }
  );

  return res?.result ?? [];
};

/** 
   * @description:  列表
     
   * @return {*}
   */
export const get_ct_tcc_list = async () => {
  const res = await server.GET<SimpleShareTccInfoVo[]>(`/ct/tcc/list`);

  return res?.result ?? [];
};

export interface GetCtSettleRecord extends SearchPropertySettleDto {}
/**
 * @description:  结算记录
 * @param {GetCtSettleRecord} params
 * @return {*}
 */
export const get_ct_settle_record = async (params: GetCtSettleRecord) => {
  const res = await server.GET<SettleRecordVo[]>(`/ct/settle/record`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetCtSettleProperty extends Paging {
  propertyId?: string;
}
/**
 * @description:  物业结算-分页
 * @param {GetCtSettleProperty} params
 * @return {*}
 */
export const get_ct_settle_property = async (params: GetCtSettleProperty) => {
  const res = await server.GET<IPage<PropertySettleVo>>(`/ct/settle/property`, {
    params,
  });

  return res?.result;
};

export interface GetCtSettleApproval extends SearchSettleApprovalDto, Paging {}
/**
 * @description:  结算审批-分页
 * @param {GetCtSettleApproval} params
 * @return {*}
 */
export const get_ct_settle_approval = async (params: GetCtSettleApproval) => {
  const res = await server.GET<IPage<SettleApprovalVo>>(`/ct/settle/approval`, {
    params,
  });

  return res?.result;
};

export interface GetCtPropertyIdMenuids {
  id?: string;
}
/**
 * @description:  物业方已选菜单权限Ids
 * @param {GetCtPropertyIdMenuids} params
 * @return {*}
 */
export const get_ct_property_id_menuIds = async (
  params: GetCtPropertyIdMenuids
) => {
  const res = await server.GET<string[]>(`/ct/property/${params.id}/menuIds`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetCtPropertyList extends SearchPropertyDto {}
/**
 * @description:  列表
 * @param {GetCtPropertyList} params
 * @return {*}
 */
export const get_ct_property_list = async (params: GetCtPropertyList) => {
  const res = await server.GET<PropertyVo[]>(`/ct/property/list`, { params });

  return res?.result ?? [];
};

export interface GetCtPlaceSearch extends SearchPlaceDto {}
/**
 * @description:  车位列表-搜索
 * @param {GetCtPlaceSearch} params
 * @return {*}
 */
export const get_ct_place_search = async (params: GetCtPlaceSearch) => {
  const res = await server.GET<CtPlaceVo[]>(`/ct/place/search`, { params });

  return res?.result ?? [];
};

export interface GetCtOrder extends SearchShareDto, Paging {}
/**
 * @description:  分页查询
 * @param {GetCtOrder} params
 * @return {*}
 */
export const get_ct_order = async (params: GetCtOrder) => {
  const res = await server.GET<IPage<ShareOrderVo>>(`/ct/order`, { params });

  return res?.result;
};

export interface GetCtFinanceTcc extends TccFinanceDto, Paging {}
/**
 * @description:  财务按车场-分页
 * @param {GetCtFinanceTcc} params
 * @return {*}
 */
export const get_ct_finance_tcc = async (params: GetCtFinanceTcc) => {
  const res = await server.GET<IPage<FinanceByTcc>>(`/ct/finance/tcc`, {
    params,
  });

  return res?.result;
};

export interface GetCtFinanceDay extends TccFinanceDto, Paging {}
/**
 * @description:  财务按天-分页
 * @param {GetCtFinanceDay} params
 * @return {*}
 */
export const get_ct_finance_day = async (params: GetCtFinanceDay) => {
  const res = await server.GET<IPage<FinanceByDay>>(`/ct/finance/day`, {
    params,
  });

  return res?.result;
};

export interface GetCtDeviceLockLog {
  lockId?: string;
}
/**
 * @description:  锁日志
 * @param {GetCtDeviceLockLog} params
 * @return {*}
 */
export const get_ct_device_lock_log = async (params: GetCtDeviceLockLog) => {
  const res = await server.GET<IPage<LockLogVo>>(`/ct/device/lock/log`, {
    params,
  });

  return res?.result;
};

export interface DeleteCtTopUpDiscountsItemId {
  id?: string;
}
/**
 * @description:  该活动删除一个子项目
 * @param {DeleteCtTopUpDiscountsItemId} params
 * @return {*}
 */
export const delete_ct_top_up_discounts_item_id = async (
  params: DeleteCtTopUpDiscountsItemId
) => {
  const res = await server.DELETE(`/ct/top-up/discounts-item/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface DeleteCtTccId {
  id?: string;
}
/**
 * @description:  删除共享车库
 * @param {DeleteCtTccId} params
 * @return {*}
 */
export const delete_ct_tcc_id = async (params: DeleteCtTccId) => {
  const res = await server.DELETE(`/ct/tcc/${params.id}`, { params });

  return res?.success;
};

export interface DeleteCtDeviceLockId {
  id?: string;
}
/**
 * @description:  删除锁
 * @param {DeleteCtDeviceLockId} params
 * @return {*}
 */
export const delete_ct_device_lock_id = async (
  params: DeleteCtDeviceLockId
) => {
  const res = await server.DELETE(`/ct/device/lock/${params.id}`, { params });

  return res?.success;
};

export interface CtTopUpDiscountsDto {
  /** 优惠名 */
  name?: string;
  /** 开始优惠时间 */
  beginTime?: string;
  /** 结束优惠时间 */
  endTime?: string;
  /** 单一用户享受的最大优惠金额 超过这个就不送了(充值金额) 分 */
  maxGainMoney?: number;
  /** 单一用户享受的最大优惠次数 */
  maxGainCount?: number;
  /** 优先级 */
  sort?: number;
}
export interface TopUpDiscountsItemSaveDto {
  /** id,在新增时是主表id,修改时是自己的id */
  id?: string;
  /** 充值的金额,单位元 */
  amount?: number;
  /** 实际到账金额,单位元 */
  actualAmount?: number;
}
export interface TenantDto {
  id?: string;
  name?: string;
  sysUsername?: string;
  password?: string;
  contactName?: string;
  contactPhone?: string;
  status?: boolean;
  tccIds?: string[];
  permissionIds?: string[];
  remark?: string;
}
export interface AuditDto {
  id?: string;
  /** 是否通过 */
  pass?: boolean;
  /** 手续费 */
  commission?: number;
  picUrls?: string[];
  remark?: string;
}
export interface LibReverse {
  /** 是否开启共享 */
  enable?: boolean;
  /** 免费分钟数 */
  freeMinutes?: number;
  holdBeginTime?: string;
  holdEndTime?: string;
  /** 白天每小时占位费用 */
  perHourDayHoldMoney?: number;
  /** 晚上每小时占位费用 */
  perHourNightHoldMoney?: number;
  /** 每小时停车费用 */
  perHourMoney?: number;
  /** 每小时罚款费用 */
  perHourFineMoney?: number;
  /** 共享申请 */
  apply?: boolean;
}
export interface LibReverseDto {
  libId?: string;
  libReverse?: LibReverse;
}
export interface AllocateRateDto {
  libId?: string;
  /** 平台比例 */
  platform?: number;
  /** 物业 */
  property?: number;
  /** 租方 */
  rent?: number;
  /** 政府 */
  gov?: number;
}
export interface SettleRemitDto {
  certUrl?: string[];
}
export interface PropertyTccVo {
  tccName?: string;
  tccAddress?: string;
  allocateRate?: number;
}
export interface UpdateSettleDto {
  type?: number;
  day?: number;
}
export interface UpdatePermissionDto {
  menuIds?: string[];
  propertyId?: string;
}
export interface CtPlaceDto {
  tccId?: string;
  libId?: string;
  address?: string;
  placeNum?: string;
  urls?: string[];
}
export interface UpdStatusDto {
  enabled?: boolean;
  placeIds?: string[];
  /** 每小时单价-分 */
  perHourMoney?: number;
  /** 类型 1全天 2自定义时段 */
  type?: number;
  /** 共享开始日期 */
  startDate?: string;
  /** 共享结束日期-可为同一天 */
  endDate?: string;
  startTime?: string;
  endTime?: string;
}
export interface ImportResult {
  success?: number;
  error?: number;
}
export interface PlaceAuditDto {
  placeId?: string;
  /** -1拒绝申请 1 通过申请 */
  status?: number;
  rejectReason?: string;
}
export interface LockDto {
  /** 锁类型330 */
  lockType?: number;
  lockNo?: string;
  placeId?: string;
}
export interface BindPlaceDto {
  placeId?: string;
  lockId?: string;
}
export interface SearchWithdrawlDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  /** 提现渠道 0-微信 1-支付宝 2-银行卡 */
  channel?: number;
  nickname?: string;
  phone?: string;
  /** -1失败 0提现中 1成功 */
  status?: number;
}
export interface WithdrawalRecordVo {
  id?: string;
  /** 提现用户 */
  nickName?: string;
  /** 提现手机号 */
  phone?: string;
  /** 提现时间 */
  createdAt?: string;
  /** 提现金额 分 */
  money?: number;
  /** 提现渠道 */
  channel?: MsgType;
  /** 提现状态 */
  status?: MsgType;
  /** 手续费 */
  commission?: number;
  /** 图片 */
  picUrls?: string[];
  /** 备注 */
  remark?: string;
  /** 银行卡持有人名称 */
  bankUserName?: string;
  /** 银行名 */
  bankName?: string;
  /** 银行卡号 */
  bankCardNum?: string;
  /** 支行名 */
  bankBranchName?: string;
  /** 银行预留手机号 */
  bankPhone?: string;
}
export interface TimeRangeDate {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
}
export interface WithdrawalStatisticsVo {
  date?: string;
  /** 金额 元 */
  money?: number;
  count?: number;
  /** 银行卡提现金额 元 */
  bankMoney?: number;
  /** 支付宝提现金额 元 */
  aliMoney?: number;
}
export interface SearchUserDto {
  phone?: string;
  plateNumber?: string;
  /** 注册日期 */
  date?: string;
}
export interface UserVo {
  id?: string;
  phone?: string;
  plateNumber?: string;
  /** 充值金额 */
  topUpRealMoney?: number;
  /** 到账金额 */
  topUpMoney?: number;
  /** 余额 */
  remainingSum?: number;
  /** 共享次数 */
  orderCount?: number;
  createdAt?: string;
}
export interface SearchTopUpDto {
  date?: string;
}
export interface CtTopUpLogVo {
  date?: string;
  /** 系统到账/使用金额 */
  money?: number;
  /** 实际支付金额 */
  realMoney?: number;
  orderCount?: number;
  userCount?: number;
}
export interface CtTopUpDiscounts {
  id?: string;
  name?: string;
  beginTime?: string;
  endTime?: string;
  maxGainMoney?: number;
  maxGainCount?: number;
  sort?: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface CtTopUpDiscountsItem {
  id?: string;
  linkId?: string;
  amount?: number;
  actualAmount?: number;
}
export interface LibSearchDto {
  tccId?: string;
  libId?: string;
  /** 物业方 */
  tenantId?: string;
  /** 物业名称 */
  tenantName?: string;
  /** 共享状态 */
  reverse?: boolean;
}
export interface ShareTccInfoVo {
  libId?: string;
  createdAt?: string;
  tccId?: string;
  tccName?: string;
  libName?: string;
  /** 是否支持共享 */
  reverse?: boolean;
  /** 共享车位数 */
  placeNum?: number;
  /** 物业方 */
  propertyName?: string;
  /** 物业分配比例 */
  propertyRate?: number;
  /** 平台分配比例 */
  platformRate?: number;
  /** 租方分配比例 */
  rentRate?: number;
  /** 政府分配比�� */
  govRate?: number;
  libReverse?: LibReverse;
}
export interface SimpleShareTccInfoVo {
  libId?: string;
  tccId?: string;
  tccName?: string;
  libName?: string;
}
export interface SearchPropertySettleDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  propertyId?: string;
}
export interface SettleRecordVo {
  settleDate?: string;
  money?: number;
  surplusMoney?: number;
}
export interface PropertySettleVo {
  propertyId?: string;
  propertyName?: string;
  contactName?: string;
  contactPhone?: string;
  income?: number;
  /** 结算金额 */
  settleMoney?: number;
  /** 未结算金额 */
  surplusMoney?: number;
  settleEnable?: boolean;
  settleType?: number;
  settleDay?: number;
  maxDate?: string;
}
export interface SearchSettleApprovalDto {
  settleDate?: string;
  propertyId?: string;
  status?: number;
  remit?: boolean;
}
export interface SettleApprovalVo {
  id?: string;
  /** 结算日期 */
  settleDate?: string;
  propertyName?: string;
  /** 结算金额 */
  money?: number;
  /** 未结算金额 */
  surplusMoney?: number;
  /** 结算规则类型 0-T,1-每月固定日期 */
  settleType?: number;
  /** 结算规则 天 */
  settleDay?: number;
  /** 状态 0-待确认 1-已确认 */
  status?: number;
  /** 打款状态 */
  remit?: boolean;
  certUrls?: string[];
}
export interface SearchPropertyDto {
  propertyName?: string;
  contactPhone?: string;
  contactName?: string;
}
export interface PropertyVo {
  id?: string;
  /** 物业方名称 */
  propertyName?: string;
  /** 车场数量 */
  tccNum?: number;
  contactName?: string;
  /** 系统账号 */
  sysUsername?: string;
  /** 系统用户id */
  sysUserId?: string;
  contactPhone?: string;
  createdAt?: string;
  /** 结算规则类型，0-T,1-每月固定日期 */
  settleType?: number;
  /** 结算规则天数/日期 */
  settleDay?: number;
}
export interface SearchPlaceDto {
  tccId?: string;
  libId?: string;
  /** 停车场性质 1自有 2租赁 */
  type?: number;
  /** 承租人姓名 */
  name1?: string;
  /** 权利人姓名 */
  name2?: string;
  phone?: string;
  lockNo?: string;
}
export interface CtPlaceVo {
  id?: string;
  /** 手机号 */
  phone?: string;
  /** 车位地址 */
  address?: string;
  /** 车位号 */
  placeNum?: string;
  /** 停车场 */
  tccName?: string;
  libName?: string;
  /** 车位类型 1自有 2租赁 3物业产权 */
  type?: number;
  /** 承租人姓名 */
  name1?: string;
  /** 权利人姓名 */
  name2?: string;
  /** 充电桩有无 */
  chargingPort?: boolean;
  /** 收益 */
  realMoney?: number;
  /** 身份证 */
  sfzUrl?: string[];
  sfzUrl2?: string[];
  /** 租赁合同 */
  htUrl?: string[];
  /** 产权证 */
  cqzUrl?: string;
  /** 车位图片 */
  urls?: string[];
  /** 共享开启状态 */
  enabled?: boolean;
  /** u形锁类型 */
  lockType?: MsgType;
  /** u形锁编号 */
  lockNo?: string;
  shareRuleType?: MsgType;
  shareRuleStartDate?: string;
  shareRuleEndDate?: string;
  shareRuleStartTime?: string;
  shareRuleEndTime?: string;
}
export interface SearchSharePlaceDto {
  /** 停车场 */
  tccId?: string;
  /** 车库 */
  libId?: string;
  /** 停车场性质 1自有 2租赁 */
  type?: number;
  /** 手机号码 */
  phone?: string;
  /** 0-未审核，1-已审核 */
  audit?: number;
  /** 审核结果 -1-失败，1-成功 */
  status?: number;
}
export interface CtPlaceShareVo {
  id?: string;
  /** 手机号 */
  phone?: string;
  /** 停车场 */
  tccName?: string;
  /** 车库名称 */
  libName?: string;
  /** 车位类型 1自有 2租赁 */
  type?: number;
  /** 车位地址 */
  address?: string;
  /** 车位号 */
  placeNum?: string;
  /** 充电桩有无 */
  chargingPort?: boolean;
  /** 承租人姓名 */
  name1?: string;
  /** 权利人姓名 */
  name2?: string;
  /** 身份证 */
  sfzUrl?: string[];
  sfzUrl2?: string[];
  /** 租赁合同 */
  htUrl?: string[];
  /** 产权合同 */
  cqzUrl?: string;
  /** 车位图片 */
  urls?: string[];
  /** 审核被拒绝原因 */
  rejectReason?: string;
  /** 共享状态 */
  enabled?: boolean;
  /** 当前是否有共享订单 */
  sharing?: boolean;
  /** 审核状态 */
  status?: MsgType;
}
export interface SearchShareDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  /** 0-正在共享  1-历史共享 */
  type?: number;
  tccId?: string;
  libId?: string;
  /** 车牌 */
  plateNumber?: string;
}
export interface ShareOrderVo {
  id?: string;
  tccName?: string;
  libName?: string;
  plateNumber?: string;
  placeNum?: string;
  status?: MsgType;
  /** 预约时间 */
  createdAt?: string;
  updatedAt?: string;
  /** 进场时间 */
  inAt?: string;
  /** 出场时间 */
  outAt?: string;
  inPic?: string;
  outPic?: string;
  holdMoney?: number;
  parkMoney?: number;
  fineMoney?: number;
  /** 平台收益 */
  platformMoney?: number;
  /** 物业收益 */
  propertyMoney?: number;
  /** 租方收益 */
  rentMoney?: number;
  /** 最大出场时间 */
  maxOutTime?: string;
  /** 占位时长 秒 */
  holdSecond?: number;
  /** 停车时长 秒 */
  parkSecond?: number;
  /** 累计时长 秒 */
  totalSecond?: number;
  /** 预约占位小时数 */
  holdHour?: number;
}
export interface TccFinanceDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccIds?: string[];
}
export interface FinanceByTcc {
  tccId?: string;
  tccName?: string;
  libId?: string;
  libName?: string;
  /** 总收入 */
  income?: number;
  /** 平台收入 */
  platformIncome?: number;
  /** 物业收入 */
  propertyIncome?: number;
  /** 租方收入 */
  rentIncome?: number;
  /** 政府收入 */
  govIncome?: number;
  /** 订单笔数 */
  orderCount?: number;
  /** 微信支付金额 */
  wechatPay?: number;
  /** 支付宝支付金额 */
  aliPay?: number;
  /** 余额支付金额 */
  balancePay?: number;
}
export interface FinanceByDay {
  /** 归档日期 */
  archivedDate?: string;
  /** 总收入 */
  income?: number;
  /** 平台收入 */
  platformIncome?: number;
  /** 物业收入 */
  propertyIncome?: number;
  govIncome?: number;
  /** 租方收入 */
  rentIncome?: number;
  /** 订单笔数 */
  orderCount?: number;
  /** 微信支付金额 */
  wechatPay?: number;
  /** 支付宝支付金额 */
  aliPay?: number;
  /** 余额支付金额 */
  balancePay?: number;
}
export interface SearchLockDto {
  lockType?: number;
  lockNo?: string;
  placeNum?: string;
  tccId?: string;
  libId?: string;
}
export interface LockVo {
  id?: string;
  createdAt?: string;
  lockType?: MsgType;
  lockNo?: string;
  address?: string;
  placeNum?: string;
}
export interface LockLogVo {
  createdAt?: string;
  content?: string;
}

export interface GetVoiceText extends Paging {
  tenantId?: string;
}
/**
 * @description:  查询-分页
 * @param {GetVoiceText} params
 * @return {*}
 */
export const get_voice_text = async (params: GetVoiceText) => {
  const res = await server.GET<IPage<VoiceTextVo>>(`/voice-text`, { params });

  return res?.result;
};

export interface PutVoiceText extends TccVoiceTextDto {}
/**
 * @description:  编辑
 * @param {TccVoiceTextDto} data,
 * @return {*}
 */
export const put_voice_text = async (data: TccVoiceTextDto) => {
  const res = await server.PUT(`/voice-text`, { data });

  return res?.success;
};

export interface GetTccYdp extends TccYdpSearchDto, Paging {}
/**
 * @description:  诱导屏-带分页
 * @param {GetTccYdp} params
 * @return {*}
 */
export const get_tcc_ydp = async (params: GetTccYdp) => {
  const res = await server.GET<IPage<YdpVo>>(`/tcc/ydp`, { params });

  return res?.result;
};

export interface PutTccYdp extends TccYdpDto {}
/**
 * @description:  更新诱导屏
 * @param {TccYdpDto} data,
 * @return {*}
 */
export const put_tcc_ydp = async (data: TccYdpDto) => {
  const res = await server.PUT(`/tcc/ydp`, { data });

  return res?.success;
};

export interface PostTccYdp extends TccYdpDto {}
/**
 * @description:  添加诱导屏
 * @param {TccYdpDto} data,
 * @return {*}
 */
export const post_tcc_ydp = async (data: TccYdpDto) => {
  const res = await server.POST(`/tcc/ydp`, { data });

  return res?.success;
};

export interface GetTccYdpCards {
  id?: string;
}
/**
 * @description:  诱导屏下已有卡
 * @param {GetTccYdpCards} params
 * @return {*}
 */
export const get_tcc_ydp_cards = async (params: GetTccYdpCards) => {
  const res = await server.GET<YdpCardTccVo[]>(`/tcc/ydp/cards`, { params });

  return res?.result ?? [];
};

export interface PutTccYdpCards extends TccYdpCardDto {}
/**
 * @description:  编辑卡号
 * @param {TccYdpCardDto} data,
 * @return {*}
 */
export const put_tcc_ydp_cards = async (data: TccYdpCardDto) => {
  const res = await server.PUT(`/tcc/ydp/cards`, { data });

  return res?.success;
};

export interface PostTccYdpCards extends TccYdpCardDto {}
/**
 * @description:  添加卡号
 * @param {TccYdpCardDto} data,
 * @return {*}
 */
export const post_tcc_ydp_cards = async (data: TccYdpCardDto) => {
  const res = await server.POST(`/tcc/ydp/cards`, { data });

  return res?.success;
};

export interface GetTccRentPlace extends TccRentPlaceSearchDto, Paging {}
/**
 * @description:  分页查询
 * @param {GetTccRentPlace} params
 * @return {*}
 */
export const get_tcc_rent_place = async (params: GetTccRentPlace) => {
  const res = await server.GET<IPage<RentPlaceVo>>(`/tcc/rent-place`, {
    params,
  });

  return res?.result;
};

export interface PutTccRentPlace extends TccRentPlaceDto {}
/**
 * @description:  编辑
 * @param {TccRentPlaceDto} data,
 * @return {*}
 */
export const put_tcc_rent_place = async (data: TccRentPlaceDto) => {
  const res = await server.PUT(`/tcc/rent-place`, { data });

  return res?.success;
};

export interface PostTccRentPlace extends TccRentPlaceDto {}
/**
 * @description:  添加
 * @param {TccRentPlaceDto} data,
 * @return {*}
 */
export const post_tcc_rent_place = async (data: TccRentPlaceDto) => {
  const res = await server.POST(`/tcc/rent-place`, { data });

  return res?.success;
};

export interface GetTccPassCard extends SearchPassCardDto {}
/**
 * @description:  查询-列表
 * @param {GetTccPassCard} params
 * @return {*}
 */
export const get_tcc_pass_card = async (params: GetTccPassCard) => {
  const res = await server.GET<TccPassCardVo[]>(`/tcc/pass-card`, { params });

  return res?.result ?? [];
};

export interface PutTccPassCard extends TccPassCardDto {}
/**
 * @description:  修改
 * @param {TccPassCardDto} data,
 * @return {*}
 */
export const put_tcc_pass_card = async (data: TccPassCardDto) => {
  const res = await server.PUT(`/tcc/pass-card`, { data });

  return res?.success;
};

export interface PostTccPassCard extends TccPassCardDto {}
/**
 * @description:  新增
 * @param {TccPassCardDto} data,
 * @return {*}
 */
export const post_tcc_pass_card = async (data: TccPassCardDto) => {
  const res = await server.POST(`/tcc/pass-card`, { data });

  return res?.success;
};

export interface PutTccLib extends TccLib {}
/**
 * @description:  编辑车库
 * @param {TccLib} data,
 * @return {*}
 */
export const put_tcc_lib = async (data: TccLib) => {
  const res = await server.PUT(`/tcc/lib`, { data });

  return res?.success;
};

export interface PostTccLib extends TccLib {}
/**
 * @description:  添加车库
 * @param {TccLib} data,
 * @return {*}
 */
export const post_tcc_lib = async (data: TccLib) => {
  const res = await server.POST(`/tcc/lib`, { data });

  return res?.success;
};

export interface GetTccInfo extends TccInfoSearchDto, Paging {}
/**
 * @description:  分页查询
 * @param {GetTccInfo} params
 * @return {*}
 */
export const get_tcc_info = async (params: GetTccInfo) => {
  const res = await server.GET<IPage<TccInfo>>(`/tcc/info`, { params });

  return res?.result;
};

export interface PutTccInfo extends TccInfoDto {}
/**
 * @description:  编辑停车场
 * @param {TccInfoDto} data,
 * @return {*}
 */
export const put_tcc_info = async (data: TccInfoDto) => {
  const res = await server.PUT(`/tcc/info`, { data });

  return res?.success;
};

export interface PostTccInfo extends TccInfoDto {}
/**
 * @description:  添加停车场
 * @param {TccInfoDto} data,
 * @return {*}
 */
export const post_tcc_info = async (data: TccInfoDto) => {
  const res = await server.POST(`/tcc/info`, { data });

  return res?.success;
};

/** 
   * @description:  停车场组列表
     
   * @return {*}
   */
export const get_tcc_info_group = async () => {
  const res = await server.GET<TccGroupVo[]>(`/tcc/info/group`);

  return res?.result ?? [];
};

export interface PutTccInfoGroup extends TccGroupDto {}
/**
 * @description:  编辑停车场组
 * @param {TccGroupDto} data,
 * @return {*}
 */
export const put_tcc_info_group = async (data: TccGroupDto) => {
  const res = await server.PUT(`/tcc/info/group`, { data });

  return res?.success;
};

export interface PostTccInfoGroup extends TccGroupDto {}
/**
 * @description:  添加停车场组
 * @param {TccGroupDto} data,
 * @return {*}
 */
export const post_tcc_info_group = async (data: TccGroupDto) => {
  const res = await server.POST(`/tcc/info/group`, { data });

  return res?.success;
};

export interface GetTccChannel extends TccChannelSearchDto, Paging {}
/**
 * @description:  通道列表-分页
 * @param {GetTccChannel} params
 * @return {*}
 */
export const get_tcc_channel = async (params: GetTccChannel) => {
  const res = await server.GET<IPage<ChannelVo>>(`/tcc/channel`, { params });

  return res?.result;
};

export interface PutTccChannel extends TccChannelDto {}
/**
 * @description:  编辑通道
 * @param {TccChannelDto} data,
 * @return {*}
 */
export const put_tcc_channel = async (data: TccChannelDto) => {
  const res = await server.PUT(`/tcc/channel`, { data });

  return res?.success;
};

export interface PostTccChannel extends TccChannelDto {}
/**
 * @description:  添加通道
 * @param {TccChannelDto} data,
 * @return {*}
 */
export const post_tcc_channel = async (data: TccChannelDto) => {
  const res = await server.POST(`/tcc/channel`, { data });

  return res?.success;
};

export interface PutTccChannelVolumeIdVal {
  id?: string;
  val?: number;
}
/**
 * @description:  通道显示屏音量重置
 * @param {PutTccChannelVolumeIdVal} params
 * @return {*}
 */
export const put_tcc_channel_volume_id_val = async (
  params: PutTccChannelVolumeIdVal
) => {
  const res = await server.PUT(
    `/tcc/channel/volume/${params.id}/${params.val}`,
    { params }
  );

  return res?.success;
};

export interface PutTccChannelNtpId {
  id?: string;
}
/**
 * @description:  通道显示屏时间同步
 * @param {PutTccChannelNtpId} params
 * @return {*}
 */
export const put_tcc_channel_ntp_id = async (params: PutTccChannelNtpId) => {
  const res = await server.PUT(`/tcc/channel/ntp/${params.id}`, { params });

  return res?.success;
};

export interface GetSystemUsers extends UserSearchDto, Paging {}
/**
 * @description:  用户列表-带分页
 * @param {GetSystemUsers} params
 * @return {*}
 */
export const get_system_users = async (params: GetSystemUsers) => {
  const res = await server.GET<IPage<UserVo>>(`/system/users`, { params });

  return res?.result;
};

export interface PutSystemUsers extends UserDto {}
/**
 * @description:  更新用户
 * @param {UserDto} data,
 * @return {*}
 */
export const put_system_users = async (data: UserDto) => {
  const res = await server.PUT(`/system/users`, { data });

  return res?.success;
};

export interface PostSystemUsers extends UserDto {}
/**
 * @description:  添加用户
 * @param {UserDto} data,
 * @return {*}
 */
export const post_system_users = async (data: UserDto) => {
  const res = await server.POST(`/system/users`, { data });

  return res?.success;
};

export interface PutSystemUsersIdResetStatus {
  id?: string;
}
/**
 * @description:  更新用户状态
 * @param {PutSystemUsersIdResetStatus} params
 * @return {*}
 */
export const put_system_users_id_reset_status = async (
  params: PutSystemUsersIdResetStatus
) => {
  const res = await server.PUT(`/system/users/${params.id}/reset-status`, {
    params,
  });

  return res?.success;
};

export interface PutSystemUsersResetPass extends ResetPassDto {}
/**
 * @description:  更新用户密码
 * @param {ResetPassDto} data,
 * @return {*}
 */
export const put_system_users_reset_pass = async (data: ResetPassDto) => {
  const res = await server.PUT(`/system/users/reset-pass`, { data });

  return res?.success;
};

export interface GetSystemTenant extends SearchTenantDto, Paging {}
/**
 * @description:  分页
 * @param {GetSystemTenant} params
 * @return {*}
 */
export const get_system_tenant = async (params: GetSystemTenant) => {
  const res = await server.GET<IPage<TenantVo>>(`/system/tenant`, { params });

  return res?.result;
};

export interface PutSystemTenant extends TenantDto {}
/**
 * @description:  修改
 * @param {TenantDto} data,
 * @return {*}
 */
export const put_system_tenant = async (data: TenantDto) => {
  const res = await server.PUT(`/system/tenant`, { data });

  return res?.success;
};

export interface PostSystemTenant extends TenantDto {}
/**
 * @description:  新增
 * @param {TenantDto} data,
 * @return {*}
 */
export const post_system_tenant = async (data: TenantDto) => {
  const res = await server.POST(`/system/tenant`, { data });

  return res?.success;
};

export interface GetSystemRoles extends Paging {}
/**
 * @description:  角色列表-带分页
 * @param {GetSystemRoles} params
 * @return {*}
 */
export const get_system_roles = async (params: GetSystemRoles) => {
  const res = await server.GET<IPage<SysRole>>(`/system/roles`, { params });

  return res?.result;
};

export interface PutSystemRoles extends RoleDto {}
/**
 * @description:  更新角色
 * @param {RoleDto} data,
 * @return {*}
 */
export const put_system_roles = async (data: RoleDto) => {
  const res = await server.PUT(`/system/roles`, { data });

  return res?.success;
};

export interface PostSystemRoles extends RoleDto {}
/**
 * @description:  添加角色
 * @param {RoleDto} data,
 * @return {*}
 */
export const post_system_roles = async (data: RoleDto) => {
  const res = await server.POST(`/system/roles`, { data });

  return res?.success;
};

export interface PutSystemRolesIdStatus {
  id?: string;
}
/**
 * @description:  角色启用禁用
 * @param {PutSystemRolesIdStatus} params
 * @return {*}
 */
export const put_system_roles_id_status = async (
  params: PutSystemRolesIdStatus
) => {
  const res = await server.PUT(`/system/roles/${params.id}/status`, { params });

  return res?.success;
};

export interface PutSystemProfileResetpass extends UserPasswordDto {}
/**
 * @description:  用户更新密码
 * @param {UserPasswordDto} data,
 * @return {*}
 */
export const put_system_profile_resetPass = async (data: UserPasswordDto) => {
  const res = await server.PUT(`/system/profile/resetPass`, { data });

  return res?.success;
};

export interface PutSystemMenus extends MenuDto {}
/**
 * @description:  修改菜单
 * @param {MenuDto} data,
 * @return {*}
 */
export const put_system_menus = async (data: MenuDto) => {
  const res = await server.PUT(`/system/menus`, { data });

  return res?.success;
};

export interface PostSystemMenus extends MenuDto {}
/**
 * @description:  添加菜单
 * @param {MenuDto} data,
 * @return {*}
 */
export const post_system_menus = async (data: MenuDto) => {
  const res = await server.POST(`/system/menus`, { data });

  return res?.success;
};

export interface GetStaffPatrol extends PatrolUserSearchDto {}
/**
 * @description:  巡查人员列表
 * @param {GetStaffPatrol} params
 * @return {*}
 */
export const get_staff_patrol = async (params: GetStaffPatrol) => {
  const res = await server.GET<IPage<PatrolUserResult>>(`/staff/patrol`, {
    params,
  });

  return res?.result;
};

export interface PutStaffPatrol extends PatrolUserDto {}
/**
 * @description:  更新巡查人员
 * @param {PatrolUserDto} data,
 * @return {*}
 */
export const put_staff_patrol = async (data: PatrolUserDto) => {
  const res = await server.PUT(`/staff/patrol`, { data });

  return res?.success;
};

export interface PostStaffPatrol extends PatrolUserDto {}
/**
 * @description:  添加巡查人员
 * @param {PatrolUserDto} data,
 * @return {*}
 */
export const post_staff_patrol = async (data: PatrolUserDto) => {
  const res = await server.POST(`/staff/patrol`, { data });

  return res?.success;
};

export interface PutStaffPatrolPassword extends StaffResetPasswordDto {}
/**
 * @description:  修改员工密码
 * @param {StaffResetPasswordDto} data,
 * @return {*}
 */
export const put_staff_patrol_password = async (
  data: StaffResetPasswordDto
) => {
  const res = await server.PUT<Boolean>(`/staff/patrol/password`, { data });

  return res?.result;
};

export interface GetStaffPatrolRoles extends Paging {}
/**
 * @description:  巡查角色列表-带分页
 * @param {GetStaffPatrolRoles} params
 * @return {*}
 */
export const get_staff_patrol_roles = async (params: GetStaffPatrolRoles) => {
  const res = await server.GET<IPage<TccPatrolRole>>(`/staff/patrol-roles`, {
    params,
  });

  return res?.result;
};

export interface PutStaffPatrolRoles extends PatrolRoleDto {}
/**
 * @description:  更新巡查角色
 * @param {PatrolRoleDto} data,
 * @return {*}
 */
export const put_staff_patrol_roles = async (data: PatrolRoleDto) => {
  const res = await server.PUT(`/staff/patrol-roles`, { data });

  return res?.success;
};

export interface PostStaffPatrolRoles extends PatrolRoleDto {}
/**
 * @description:  添加巡查角色
 * @param {PatrolRoleDto} data,
 * @return {*}
 */
export const post_staff_patrol_roles = async (data: PatrolRoleDto) => {
  const res = await server.POST(`/staff/patrol-roles`, { data });

  return res?.success;
};

export interface PutOrderManualOnline extends ManualOnlineDto {}
/**
 * @description:  编辑手动录入订单
 * @param {ManualOnlineDto} data,
 * @return {*}
 */
export const put_order_manual_online = async (data: ManualOnlineDto) => {
  const res = await server.PUT(`/order/manual-online`, { data });

  return res?.success;
};

export interface PostOrderManualOnline extends ManualOnlineDto {}
/**
 * @description:  手动录入订单
 * @param {ManualOnlineDto} data,
 * @return {*}
 */
export const post_order_manual_online = async (data: ManualOnlineDto) => {
  const res = await server.POST(`/order/manual-online`, { data });

  return res?.success;
};

export interface GetMonthlyEvent extends SearchMonthlyEventDto, Paging {}
/**
 * @description:  查询-分页
 * @param {GetMonthlyEvent} params
 * @return {*}
 */
export const get_monthly_event = async (params: GetMonthlyEvent) => {
  const res = await server.GET<IPage<MonthlyEventVo>>(`/monthly/event`, {
    params,
  });

  return res?.result;
};

export interface PutMonthlyEvent extends MonthlyEventDto {}
/**
 * @description:  编辑活动
 * @param {MonthlyEventDto} data,
 * @return {*}
 */
export const put_monthly_event = async (data: MonthlyEventDto) => {
  const res = await server.PUT(`/monthly/event`, { data });

  return res?.success;
};

export interface PostMonthlyEvent extends MonthlyEventDto {}
/**
 * @description:  添加活动
 * @param {MonthlyEventDto} data,
 * @return {*}
 */
export const post_monthly_event = async (data: MonthlyEventDto) => {
  const res = await server.POST(`/monthly/event`, { data });

  return res?.success;
};

export interface GetMerchant extends MerchantSearchDto, Paging {}
/**
 * @description:  分页查询
 * @param {GetMerchant} params
 * @return {*}
 */
export const get_merchant = async (params: GetMerchant) => {
  const res = await server.GET<IPage<MerchantVo>>(`/merchant`, { params });

  return res?.result;
};

export interface PutMerchant extends MerchantDto {}
/**
 * @description:  编辑商户
 * @param {MerchantDto} data,
 * @return {*}
 */
export const put_merchant = async (data: MerchantDto) => {
  const res = await server.PUT(`/merchant`, { data });

  return res?.success;
};

export interface PostMerchant extends MerchantDto {}
/**
 * @description:  添加商户
 * @param {MerchantDto} data,
 * @return {*}
 */
export const post_merchant = async (data: MerchantDto) => {
  const res = await server.POST(`/merchant`, { data });

  return res?.success;
};

export interface GetFreeCar extends FreeCarSearchDto, Paging {}
/**
 * @description:  查询-分页
 * @param {GetFreeCar} params
 * @return {*}
 */
export const get_free_car = async (params: GetFreeCar) => {
  const res = await server.GET<IPage<FreeCarVo>>(`/free-car`, { params });

  return res?.result;
};

export interface PutFreeCar extends FreeCarDto {}
/**
 * @description:  更新
 * @param {FreeCarDto} data,
 * @return {*}
 */
export const put_free_car = async (data: FreeCarDto) => {
  const res = await server.PUT(`/free-car`, { data });

  return res?.success;
};

export interface PostFreeCar extends FreeCarDto {}
/**
 * @description:  新增
 * @param {FreeCarDto} data,
 * @return {*}
 */
export const post_free_car = async (data: FreeCarDto) => {
  const res = await server.POST(`/free-car`, { data });

  return res?.success;
};

export interface GetBlacklist extends BlacklistSearchDto, Paging {}
/**
 * @description:  黑名单查询-分页
 * @param {GetBlacklist} params
 * @return {*}
 */
export const get_blacklist = async (params: GetBlacklist) => {
  const res = await server.GET<IPage<BlacklistVo>>(`/blacklist`, { params });

  return res?.result;
};

export interface PutBlacklist extends BlacklistDto {}
/**
 * @description:  更新
 * @param {BlacklistDto} data,
 * @return {*}
 */
export const put_blacklist = async (data: BlacklistDto) => {
  const res = await server.PUT(`/blacklist`, { data });

  return res?.success;
};

export interface PostBlacklist extends BlacklistDto {}
/**
 * @description:  新增
 * @param {BlacklistDto} data,
 * @return {*}
 */
export const post_blacklist = async (data: BlacklistDto) => {
  const res = await server.POST(`/blacklist`, { data });

  return res?.success;
};

export interface PostWorkerOnlineOnlineMove extends OnlineArrDto {}
/**
 * @description:  在场车辆信息转移,欠费列表或者订单列表
 * @param {OnlineArrDto} data,
 * @return {*}
 */
export const post_worker_online_online_move = async (data: OnlineArrDto) => {
  const res = await server.POST<OnlineMoveVo>(`/worker/online/online-move`, {
    data,
  });

  return res?.result;
};

export interface PostWorkerOnlineDel extends DelOnlineDto {}
/**
 * @description:  删除在场车辆信息
 * @param {DelOnlineDto} data,
 * @return {*}
 */
export const post_worker_online_del = async (data: DelOnlineDto) => {
  const res = await server.POST(`/worker/online/del`, { data });

  return res?.success;
};

export interface PostWorkerOnlineChangeOnline extends ChangeOnlineDto {}
/**
 * @description:  修改在场车辆信息
 * @param {ChangeOnlineDto} data,
 * @return {*}
 */
export const post_worker_online_change_online = async (
  data: ChangeOnlineDto
) => {
  const res = await server.POST(`/worker/online/change-online`, { data });

  return res?.success;
};

export interface PostWorkerChannelSsChannelid {
  channelId?: string;
}
/**
 * @description:  拍个通道快照
 * @param {PostWorkerChannelSsChannelid} params
 * @return {*}
 */
export const post_worker_channel_ss_channelId = async (
  params: PostWorkerChannelSsChannelid
) => {
  const res = await server.POST(`/worker/channel/ss/${params.channelId}`, {
    params,
  });

  return res?.success;
};

export interface PostWorkerChannelOpenAlways extends OpenChannelDto {}
/**
 * @description:  开闸-会记录进日志
 * @param {OpenChannelDto} data,
 * @return {*}
 */
export const post_worker_channel_open_always = async (data: OpenChannelDto) => {
  const res = await server.POST(`/worker/channel/open-always`, { data });

  return res?.success;
};

export interface PostWorkerChannelInletOpenWait extends InletOpenWaitDto {}
/**
 * @description:  入口-对通道等待车辆进行入场放行,会记录操作日志
 * @param {InletOpenWaitDto} data,
 * @return {*}
 */
export const post_worker_channel_inlet_open_wait = async (
  data: InletOpenWaitDto
) => {
  const res = await server.POST(`/worker/channel/inlet-open-wait`, { data });

  return res?.success;
};

export interface PostWorkerChannelExitOnlineWait extends ExitOnlineWaitDto {}
/**
 * @description:  出口-把场内车辆人工指定到一个出口进行出场操作
 * @param {ExitOnlineWaitDto} data,
 * @return {*}
 */
export const post_worker_channel_exit_online_wait = async (
  data: ExitOnlineWaitDto
) => {
  const res = await server.POST(`/worker/channel/exit-online-wait`, { data });

  return res?.success;
};

export interface PostWorkerChannelExitChangeWait extends ExitChangeWaitDto {}
/**
 * @description:  出口-修改通道等待的车辆信息,会自动根据条件结果重新构建等待信息(会放行或者等待支付),主要针对的是出口车牌识别错误的
 * @param {ExitChangeWaitDto} data,
 * @return {*}
 */
export const post_worker_channel_exit_change_wait = async (
  data: ExitChangeWaitDto
) => {
  const res = await server.POST(`/worker/channel/exit-change-wait`, { data });

  return res?.success;
};

export interface PostWorkerChannelCloseAlways extends OpenChannelDto {}
/**
 * @description:  降杆-会记录进日志
 * @param {OpenChannelDto} data,
 * @return {*}
 */
export const post_worker_channel_close_always = async (
  data: OpenChannelDto
) => {
  const res = await server.POST(`/worker/channel/close-always`, { data });

  return res?.success;
};

export interface PostTccRentPlaceImport {
  tccId?: string;
  libId?: string;
  file?: File;
  [key: string]: any;
}
/**
 * @description:  导入
 * @param {PostTccRentPlaceImport} params
 * @return {*}
 */
export const post_tcc_rent_place_import = async (
  params: PostTccRentPlaceImport
) => {
  const formdata = new FormData();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      formdata.set(key, element);
    }
  }

  const res = await server.POST<ImportResult>(`/tcc/rent-place/import`, {
    data: formdata,
  });

  return res?.result;
};

export interface PostTccRentPlaceExport extends TccRentPlaceSearchDto {}
/**
 * @description:  excel导出
 * @param {TccRentPlaceSearchDto} data,
 * @return {*}
 */
export const post_tcc_rent_place_export = async (
  data: TccRentPlaceSearchDto
) => {
  const res = await server.POST<ArrayBuffer>(`/tcc/rent-place/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostTccPayWxSave extends TccWxPay {}
/**
 * @description:  微信-添加或者修改一个
 * @param {TccWxPay} data,
 * @return {*}
 */
export const post_tcc_pay_wx_save = async (data: TccWxPay) => {
  const res = await server.POST(`/tcc/pay/wx-save`, { data });

  return res?.success;
};

export interface PostTccLibRate extends TccLibRateDto {}
/**
 * @description:  添加更新收费规则
 * @param {TccLibRateDto} data,
 * @return {*}
 */
export const post_tcc_lib_rate = async (data: TccLibRateDto) => {
  const res = await server.POST(`/tcc/lib/rate`, { data });

  return res?.success;
};

export interface PostSystemTenantIdStatus {
  id?: string;
}
/**
 * @description:  租户状态修改
 * @param {PostSystemTenantIdStatus} params
 * @return {*}
 */
export const post_system_tenant_id_status = async (
  params: PostSystemTenantIdStatus
) => {
  const res = await server.POST(`/system/tenant/${params.id}/status`, {
    params,
  });

  return res?.success;
};

export interface PostSystemResetloginpass extends ResetLoginPassDto {}
/**
 * @description:  修改登录密码
 * @param {ResetLoginPassDto} data,
 * @return {*}
 */
export const post_system_resetLoginPass = async (data: ResetLoginPassDto) => {
  const res = await server.POST(`/system/resetLoginPass`, { data });

  return res?.success;
};

export interface PostSystemLogin extends AdminLoginDto {}
/**
 * @description:  登录
 * @param {AdminLoginDto} data,
 * @return {*}
 */
export const post_system_login = async (data: AdminLoginDto) => {
  const res = await server.POST<LoginResult>(`/system/login`, { data });

  return res?.result;
};

export interface PostStaffPatrolBindTccGroup extends BindPatrolLotGroupDto {}
/**
 * @description:  绑定停车场组
 * @param {BindPatrolLotGroupDto} data,
 * @return {*}
 */
export const post_staff_patrol_bind_tcc_group = async (
  data: BindPatrolLotGroupDto
) => {
  const res = await server.POST(`/staff/patrol/bind-tcc-group`, { data });

  return res?.success;
};

export interface PostStaffPatrolBindRole extends PatrolRoleBindDto {}
/**
 * @description:  绑定角色
 * @param {PatrolRoleBindDto} data,
 * @return {*}
 */
export const post_staff_patrol_bind_role = async (data: PatrolRoleBindDto) => {
  const res = await server.POST(`/staff/patrol/bind-role`, { data });

  return res?.success;
};

export interface PostOrderOnlineExport extends SearchOnlineDto {}
/**
 * @description:  正在停车-excel导出
 * @param {SearchOnlineDto} data,
 * @return {*}
 */
export const post_order_online_export = async (data: SearchOnlineDto) => {
  const res = await server.POST<ArrayBuffer>(`/order/online/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostOrderImport {
  tccId?: string;
  libId?: string;
  file?: File;
  [key: string]: any;
}
/**
 * @description:  导入
 * @param {PostOrderImport} params
 * @return {*}
 */
export const post_order_import = async (params: PostOrderImport) => {
  const formdata = new FormData();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      formdata.set(key, element);
    }
  }

  const res = await server.POST<ImportResult>(`/order/import`, {
    data: formdata,
  });

  return res?.result;
};

export interface PostOrderHistoryExport extends SearchOrderDto {}
/**
 * @description:  历史停车-excel导出
 * @param {SearchOrderDto} data,
 * @return {*}
 */
export const post_order_history_export = async (data: SearchOrderDto) => {
  const res = await server.POST<ArrayBuffer>(`/order/history/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostMonthlyStatisticsExport extends LibDtoStatisticsDto {}
/**
 * @description:  包月统计-excel导出
 * @param {LibDtoStatisticsDto} data,
 * @return {*}
 */
export const post_monthly_statistics_export = async (
  data: LibDtoStatisticsDto
) => {
  const res = await server.POST<ArrayBuffer>(`/monthly/statistics/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostMonthlyRemoveApply extends RemoveApplyDto {}
/**
 * @description:  移除申请
 * @param {RemoveApplyDto} data,
 * @return {*}
 */
export const post_monthly_remove_apply = async (data: RemoveApplyDto) => {
  const res = await server.POST(`/monthly/remove-apply`, { data });

  return res?.success;
};

export interface PostMonthlyLib extends TccLibMonthlyDto {}
/**
 * @description:  新增更新车库包月
 * @param {TccLibMonthlyDto} data,
 * @return {*}
 */
export const post_monthly_lib = async (data: TccLibMonthlyDto) => {
  const res = await server.POST(`/monthly/lib`, { data });

  return res?.success;
};

export interface PostMonthlyEventStatusId {
  id?: string;
}
/**
 * @description:  修改状态
 * @param {PostMonthlyEventStatusId} params
 * @return {*}
 */
export const post_monthly_event_status_id = async (
  params: PostMonthlyEventStatusId
) => {
  const res = await server.POST(`/monthly/event/status/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface PostMiniUsersExport extends AppUsersSearchDto {}
/**
 * @description:  excel导出
 * @param {AppUsersSearchDto} data,
 * @return {*}
 */
export const post_mini_users_export = async (data: AppUsersSearchDto) => {
  const res = await server.POST<ArrayBuffer>(`/mini/users/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostMerchantLogRechargeExport extends LogSearchDto {}
/**
 * @description:  充值记录-excel导出
 * @param {LogSearchDto} data,
 * @return {*}
 */
export const post_merchant_log_recharge_export = async (data: LogSearchDto) => {
  const res = await server.POST<ArrayBuffer>(`/merchant/log/recharge/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostMerchantLogPaymentExport extends LogSearchDto {}
/**
 * @description:  缴费记录-excel导出
 * @param {LogSearchDto} data,
 * @return {*}
 */
export const post_merchant_log_payment_export = async (data: LogSearchDto) => {
  const res = await server.POST<ArrayBuffer>(`/merchant/log/payment/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostFreeCarImport {
  tccId?: string;
  libId?: string;
  specialType?: string;
  passCardId?: string;
  file?: File;
  [key: string]: any;
}
/**
 * @description:  导入
 * @param {PostFreeCarImport} params
 * @return {*}
 */
export const post_free_car_import = async (params: PostFreeCarImport) => {
  const formdata = new FormData();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      formdata.set(key, element);
    }
  }

  const res = await server.POST<ImportResult>(`/free-car/import`, {
    data: formdata,
  });

  return res?.result;
};

export interface PostFinancialTempExport extends TempFinancialDto {}
/**
 * @description:  临停-excel导出
 * @param {TempFinancialDto} data,
 * @return {*}
 */
export const post_financial_temp_export = async (data: TempFinancialDto) => {
  const res = await server.POST<ArrayBuffer>(`/financial/temp/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostFinancialExport extends FinancialDto {}
/**
 * @description:  财务列表-excel导出
 * @param {FinancialDto} data,
 * @return {*}
 */
export const post_financial_export = async (data: FinancialDto) => {
  const res = await server.POST<ArrayBuffer>(`/financial/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface PostFinancialCouponExport extends TimeRangeDate {}
/**
 * @description:  优惠券-excel导出
 * @param {TimeRangeDate} data,
 * @return {*}
 */
export const post_financial_coupon_export = async (data: TimeRangeDate) => {
  const res = await server.POST<ArrayBuffer>(`/financial/coupon/export`, {
    data,
    responseType: "arraybuffer",
  });

  if (res instanceof ArrayBuffer) {
    return res as ArrayBuffer;
  } else {
    return null;
  }
};

export interface GetCouponModel extends SearchCouponModelDto, Paging {}
/**
 * @description:  查询-分页
 * @param {GetCouponModel} params
 * @return {*}
 */
export const get_coupon_model = async (params: GetCouponModel) => {
  const res = await server.GET<IPage<CouponModelVo>>(`/coupon/model`, {
    params,
  });

  return res?.result;
};

export interface PostCouponModel extends CouponModelDto {}
/**
 * @description:  新增
 * @param {CouponModelDto} data,
 * @return {*}
 */
export const post_coupon_model = async (data: CouponModelDto) => {
  const res = await server.POST(`/coupon/model`, { data });

  return res?.success;
};

export interface PostCouponModelStatusId {
  id?: string;
}
/**
 * @description:  上架/下架
 * @param {PostCouponModelStatusId} params
 * @return {*}
 */
export const post_coupon_model_status_id = async (
  params: PostCouponModelStatusId
) => {
  const res = await server.POST(`/coupon/model/status/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface PostCommonOssAli {
  file?: string;
  path?: string;
}
/**
 * @description:  阿里云
 * @param {PostCommonOssAli} params
 * @return {*}
 */
export const post_common_oss_ali = async (params: PostCommonOssAli) => {
  const res = await server.POST<String>(`/common/oss/ali`, { params });

  return res?.result;
};

export interface PostBlacklistImport {
  tccId?: string;
  libId?: string;
  file?: File;
  [key: string]: any;
}
/**
 * @description:  导入
 * @param {PostBlacklistImport} params
 * @return {*}
 */
export const post_blacklist_import = async (params: PostBlacklistImport) => {
  const formdata = new FormData();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      formdata.set(key, element);
    }
  }

  const res = await server.POST<ImportResult>(`/blacklist/import`, {
    data: formdata,
  });

  return res?.result;
};

export interface GetWorkerChannelOnline extends ChannelOnlineDto {}
/**
 * @description:  通道实时信息
 * @param {GetWorkerChannelOnline} params
 * @return {*}
 */
export const get_worker_channel_online = async (
  params: GetWorkerChannelOnline
) => {
  const res = await server.GET<ChannelOnlineVo[]>(`/worker/channel/online`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetWorkerChannelLastSs extends LastSsDto {}
/**
 * @description:  获取最后一张通道快照
 * @param {GetWorkerChannelLastSs} params
 * @return {*}
 */
export const get_worker_channel_last_ss = async (
  params: GetWorkerChannelLastSs
) => {
  const res = await server.GET<TccChannelSs>(`/worker/channel/last-ss`, {
    params,
  });

  return res?.result;
};

export interface GetTccYdpList extends Paging {
  name?: string;
}
/**
 * @description:  诱导屏无分页
 * @param {GetTccYdpList} params
 * @return {*}
 */
export const get_tcc_ydp_list = async (params: GetTccYdpList) => {
  const res = await server.GET<TccYdp[]>(`/tcc/ydp/list`, { params });

  return res?.result ?? [];
};

export interface GetTccRentPlaceId {
  id?: string;
}
/**
 * @description:  ID查询
 * @param {GetTccRentPlaceId} params
 * @return {*}
 */
export const get_tcc_rent_place_id = async (params: GetTccRentPlaceId) => {
  const res = await server.GET<TccRentPlace>(`/tcc/rent-place/${params.id}`, {
    params,
  });

  return res?.result;
};

export interface DeleteTccRentPlaceId {
  id?: string;
}
/**
 * @description:  删除
 * @param {DeleteTccRentPlaceId} params
 * @return {*}
 */
export const delete_tcc_rent_place_id = async (
  params: DeleteTccRentPlaceId
) => {
  const res = await server.DELETE(`/tcc/rent-place/${params.id}`, { params });

  return res?.success;
};

export interface GetTccPayWx extends Paging {
  name?: string;
}
/**
 * @description:  微信分页列表
 * @param {GetTccPayWx} params
 * @return {*}
 */
export const get_tcc_pay_wx = async (params: GetTccPayWx) => {
  const res = await server.GET<IPage<TccWxPay>>(`/tcc/pay/wx`, { params });

  return res?.result;
};

export interface GetTccPayWxList {
  name?: string;
}
/**
 * @description:  微信列表
 * @param {GetTccPayWxList} params
 * @return {*}
 */
export const get_tcc_pay_wx_list = async (params: GetTccPayWxList) => {
  const res = await server.GET<TccWxPay[]>(`/tcc/pay/wx-list`, { params });

  return res?.result ?? [];
};

export interface GetTccLibId {
  id?: string;
}
/**
 * @description:  ID查询
 * @param {GetTccLibId} params
 * @return {*}
 */
export const get_tcc_lib_id = async (params: GetTccLibId) => {
  const res = await server.GET<TccLib>(`/tcc/lib/${params.id}`, { params });

  return res?.result;
};

export interface DeleteTccLibId {
  id?: string;
}
/**
 * @description:  删除车库
 * @param {DeleteTccLibId} params
 * @return {*}
 */
export const delete_tcc_lib_id = async (params: DeleteTccLibId) => {
  const res = await server.DELETE(`/tcc/lib/${params.id}`, { params });

  return res?.success;
};

export interface GetTccLibRateMonthTccid {
  tccId?: string;
}
/**
 * @description:  车库收费信息
 * @param {GetTccLibRateMonthTccid} params
 * @return {*}
 */
export const get_tcc_lib_rate_month_tccId = async (
  params: GetTccLibRateMonthTccid
) => {
  const res = await server.GET<LibPriceAndMonthVo[]>(
    `/tcc/lib/rate-month/${params.tccId}`,
    { params }
  );

  return res?.result ?? [];
};

export interface GetTccInfoId {
  id?: string;
}
/**
 * @description:  ID查询
 * @param {GetTccInfoId} params
 * @return {*}
 */
export const get_tcc_info_id = async (params: GetTccInfoId) => {
  const res = await server.GET<TccInfo>(`/tcc/info/${params.id}`, { params });

  return res?.result;
};

export interface DeleteTccInfoId {
  id?: string;
}
/**
 * @description:  删除停车场
 * @param {DeleteTccInfoId} params
 * @return {*}
 */
export const delete_tcc_info_id = async (params: DeleteTccInfoId) => {
  const res = await server.DELETE(`/tcc/info/${params.id}`, { params });

  return res?.success;
};

export interface GetTccInfoIdTree {
  id?: string;
}
/**
 * @description:  停车场树-单个停车场
 * @param {GetTccInfoIdTree} params
 * @return {*}
 */
export const get_tcc_info_id_tree = async (params: GetTccInfoIdTree) => {
  const res = await server.GET<TccTree>(`/tcc/info/${params.id}/tree`, {
    params,
  });

  return res?.result;
};

export interface GetTccInfoTrees {
  hasChannel?: boolean;
}
/**
 * @description:  停车场树-所有停车场
 * @param {GetTccInfoTrees} params
 * @return {*}
 */
export const get_tcc_info_trees = async (params: GetTccInfoTrees) => {
  const res = await server.GET<TccTree[]>(`/tcc/info/trees`, { params });

  return res?.result ?? [];
};

export interface GetTccInfoSearch extends TccInfoSearchDto {}
/**
 * @description:  模糊查询
 * @param {GetTccInfoSearch} params
 * @return {*}
 */
export const get_tcc_info_search = async (params: GetTccInfoSearch) => {
  const res = await server.GET<TccInfoVo[]>(`/tcc/info/search`, { params });

  return res?.result ?? [];
};

/** 
   * @description:  停车场统计信息
     
   * @return {*}
   */
export const get_tcc_dc_tcc_statistics = async () => {
  const res = await server.GET<TccInfoStatistics>(`/tcc/dc/tcc-statistics`);

  return res?.result;
};

export interface GetTccDcOrderStatistics extends TimeRangeDate {}
/**
 * @description:  收入、收费汇总、时长分析、停车场排行
 * @param {GetTccDcOrderStatistics} params
 * @return {*}
 */
export const get_tcc_dc_order_statistics = async (
  params: GetTccDcOrderStatistics
) => {
  const res = await server.GET<TccIncomeStatistics>(
    `/tcc/dc/order-statistics`,
    { params }
  );

  return res?.result;
};

export interface GetTccDcInOutStatistics extends TimeRangeDate {}
/**
 * @description:  车辆出入趋势
 * @param {GetTccDcInOutStatistics} params
 * @return {*}
 */
export const get_tcc_dc_in_out_statistics = async (
  params: GetTccDcInOutStatistics
) => {
  const res = await server.GET<TccInOutStatistics[]>(
    `/tcc/dc/in-out-statistics`,
    { params }
  );

  return res?.result ?? [];
};

export interface GetTccDcInOutLatest {
  num?: number;
}
/**
 * @description:  最新出入场车辆
 * @param {GetTccDcInOutLatest} params
 * @return {*}
 */
export const get_tcc_dc_in_out_latest = async (params: GetTccDcInOutLatest) => {
  const res = await server.GET<TccInOutLatest>(`/tcc/dc/in-out-latest`, {
    params,
  });

  return res?.result;
};

export interface GetTccChannelId {
  id?: string;
}
/**
 * @description:  ID查询
 * @param {GetTccChannelId} params
 * @return {*}
 */
export const get_tcc_channel_id = async (params: GetTccChannelId) => {
  const res = await server.GET<TccChannel>(`/tcc/channel/${params.id}`, {
    params,
  });

  return res?.result;
};

export interface DeleteTccChannelId {
  id?: string;
}
/**
 * @description:  删除通道
 * @param {DeleteTccChannelId} params
 * @return {*}
 */
export const delete_tcc_channel_id = async (params: DeleteTccChannelId) => {
  const res = await server.DELETE(`/tcc/channel/${params.id}`, { params });

  return res?.success;
};

export interface GetTccChannelIdWaitcar {
  id?: string;
}
/**
 * @description:  查询等待车辆
 * @param {GetTccChannelIdWaitcar} params
 * @return {*}
 */
export const get_tcc_channel_id_waitCar = async (
  params: GetTccChannelIdWaitcar
) => {
  const res = await server.GET<WaitCarVo>(`/tcc/channel/${params.id}/waitCar`, {
    params,
  });

  return res?.result;
};

export interface GetTccChannelList extends TccChannelSearchDto {}
/**
 * @description:  通道列表集合
 * @param {GetTccChannelList} params
 * @return {*}
 */
export const get_tcc_channel_list = async (params: GetTccChannelList) => {
  const res = await server.GET<ChannelVo[]>(`/tcc/channel/list`, { params });

  return res?.result ?? [];
};

export interface GetSystemUsersIdRoles {
  id?: string;
}
/**
 * @description:  用户已有角色
 * @param {GetSystemUsersIdRoles} params
 * @return {*}
 */
export const get_system_users_id_roles = async (
  params: GetSystemUsersIdRoles
) => {
  const res = await server.GET<string[]>(`/system/users/${params.id}/roles`, {
    params,
  });

  return res?.result ?? [];
};

/** 
   * @description:  可用角色列表
     
   * @return {*}
   */
export const get_system_users_roles = async () => {
  const res = await server.GET<SysRole[]>(`/system/users/roles`);

  return res?.result ?? [];
};

export interface GetSystemTenantId {
  id?: string;
}
/**
 * @description:  详情
 * @param {GetSystemTenantId} params
 * @return {*}
 */
export const get_system_tenant_id = async (params: GetSystemTenantId) => {
  const res = await server.GET<TenantInfoVo>(`/system/tenant/${params.id}`, {
    params,
  });

  return res?.result;
};

export interface DeleteSystemTenantId {
  id?: string;
}
/**
 * @description:  删除租户
 * @param {DeleteSystemTenantId} params
 * @return {*}
 */
export const delete_system_tenant_id = async (params: DeleteSystemTenantId) => {
  const res = await server.DELETE(`/system/tenant/${params.id}`, { params });

  return res?.success;
};

export interface GetSystemRolesIdMenuids {
  id?: string;
}
/**
 * @description:  角色已选菜单��限Ids
 * @param {GetSystemRolesIdMenuids} params
 * @return {*}
 */
export const get_system_roles_id_menuIds = async (
  params: GetSystemRolesIdMenuids
) => {
  const res = await server.GET<string[]>(`/system/roles/${params.id}/menuIds`, {
    params,
  });

  return res?.result ?? [];
};

/** 
   * @description:  角色菜单权限树
     
   * @return {*}
   */
export const get_system_roles_menus = async () => {
  const res = await server.GET<PermissionTree[]>(`/system/roles/menus`);

  return res?.result ?? [];
};

/** 
   * @description:  用户菜单和权限
     
   * @return {*}
   */
export const get_system_profile_menus = async () => {
  const res = await server.GET<MenuButtons>(`/system/profile/menus`);

  return res?.result;
};

/** 
   * @description:  菜单权限树
     
   * @return {*}
   */
export const get_system_menus_tree = async () => {
  const res = await server.GET<PermissionTree[]>(`/system/menus/tree`);

  return res?.result ?? [];
};

export interface GetSystemLogs extends OperationLogDto, Paging {}
/**
 * @description:  分页查询
 * @param {GetSystemLogs} params
 * @return {*}
 */
export const get_system_logs = async (params: GetSystemLogs) => {
  const res = await server.GET<IPage<OperationLogVo>>(`/system/logs`, {
    params,
  });

  return res?.result;
};

export interface GetSystemConfig extends SearchConfigDto {}
/**
 * @description:  查询
 * @param {GetSystemConfig} params
 * @return {*}
 */
export const get_system_config = async (params: GetSystemConfig) => {
  const res = await server.GET<SysConfig>(`/system/config`, { params });

  return res?.result;
};

export interface GetStatisticsTcc extends TccStatisticsDto, Paging {}
/**
 * @description:  车厂统计/我的车场-分页
 * @param {GetStatisticsTcc} params
 * @return {*}
 */
export const get_statistics_tcc = async (params: GetStatisticsTcc) => {
  const res = await server.GET<IPage<TccStatisticsVo>>(`/statistics/tcc`, {
    params,
  });

  return res?.result;
};

export interface GetStaffPatrolIdLotids {
  id?: string;
}
/**
 * @description:  查询巡查人员所管辖的停车场Ids
 * @param {GetStaffPatrolIdLotids} params
 * @return {*}
 */
export const get_staff_patrol_id_lotIds = async (
  params: GetStaffPatrolIdLotids
) => {
  const res = await server.GET<string[]>(`/staff/patrol/${params.id}/lotIds`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetStaffPatrolRecords extends StaffLoginRecordDto, Paging {}
/**
 * @description:  登录记录-带分页
 * @param {GetStaffPatrolRecords} params
 * @return {*}
 */
export const get_staff_patrol_records = async (
  params: GetStaffPatrolRecords
) => {
  const res = await server.GET<IPage<StaffLoginRecord>>(
    `/staff/patrol/records`,
    { params }
  );

  return res?.result;
};

export interface GetStaffPatrolList extends PatrolUserSearchDto, Paging {}
/**
 * @description:  巡查人员列表-无分页
 * @param {GetStaffPatrolList} params
 * @return {*}
 */
export const get_staff_patrol_list = async (params: GetStaffPatrolList) => {
  const res = await server.GET<PatrolUserResult[]>(`/staff/patrol/list`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetStaffPatrolRolesList extends Paging {}
/**
 * @description:  巡查角色列表-无分页
 * @param {GetStaffPatrolRolesList} params
 * @return {*}
 */
export const get_staff_patrol_roles_list = async (
  params: GetStaffPatrolRolesList
) => {
  const res = await server.GET<TccPatrolRole[]>(`/staff/patrol-roles/list`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetOrderId {
  id?: string;
}
/**
 * @description:  查订单
 * @param {GetOrderId} params
 * @return {*}
 */
export const get_order_id = async (params: GetOrderId) => {
  const res = await server.GET<TccOrder>(`/order/${params.id}`, { params });

  return res?.result;
};

export interface GetOrderOnline extends SearchOnlineDto, Paging {}
/**
 * @description:  正在停车-分页
 * @param {GetOrderOnline} params
 * @return {*}
 */
export const get_order_online = async (params: GetOrderOnline) => {
  const res = await server.GET<IPage<OnlineVo>>(`/order/online`, { params });

  return res?.result;
};

export interface GetOrderOnlineChart extends SearchOnlineDto {}
/**
 * @description:  正在停车图表
 * @param {GetOrderOnlineChart} params
 * @return {*}
 */
export const get_order_online_chart = async (params: GetOrderOnlineChart) => {
  const res = await server.GET<OnlineChartVo>(`/order/online/chart`, {
    params,
  });

  return res?.result;
};

export interface GetOrderHistory extends SearchOrderDto, Paging {}
/**
 * @description:  历史停车-分页
 * @param {GetOrderHistory} params
 * @return {*}
 */
export const get_order_history = async (params: GetOrderHistory) => {
  const res = await server.GET<IPage<OrderVo>>(`/order/history`, { params });

  return res?.result;
};

export interface GetOrderHistoryChart extends SearchOrderDto {}
/**
 * @description:  历史停车图表
 * @param {GetOrderHistoryChart} params
 * @return {*}
 */
export const get_order_history_chart = async (params: GetOrderHistoryChart) => {
  const res = await server.GET<HistoryChartVo>(`/order/history/chart`, {
    params,
  });

  return res?.result;
};

export interface GetOrderErrArr extends SearchOrderArrDto, Paging {}
/**
 * @description:  欠费订单-分页
 * @param {GetOrderErrArr} params
 * @return {*}
 */
export const get_order_err_arr = async (params: GetOrderErrArr) => {
  const res = await server.GET<IPage<OrderArrVo>>(`/order-err/arr`, { params });

  return res?.result;
};

export interface GetMonthlyStatistics extends LibDtoStatisticsDto, Paging {}
/**
 * @description:  包月统计-分页
 * @param {GetMonthlyStatistics} params
 * @return {*}
 */
export const get_monthly_statistics = async (params: GetMonthlyStatistics) => {
  const res = await server.GET<IPage<MonthlyStatisticsVo>>(
    `/monthly/statistics`,
    { params }
  );

  return res?.result;
};

export interface GetMonthlyStatisticsChart extends LibDtoStatisticsDto {}
/**
 * @description:  包月统计-图表
 * @param {GetMonthlyStatisticsChart} params
 * @return {*}
 */
export const get_monthly_statistics_chart = async (
  params: GetMonthlyStatisticsChart
) => {
  const res = await server.GET<MonthlyStatisticsChart[]>(
    `/monthly/statistics/chart`,
    { params }
  );

  return res?.result ?? [];
};

export interface GetMonthlyOpenCharge {
  id?: string;
}
/**
 * @description:  开通缴费
 * @param {GetMonthlyOpenCharge} params
 * @return {*}
 */
export const get_monthly_open_charge = async (params: GetMonthlyOpenCharge) => {
  const res = await server.GET(`/monthly/open-charge`, { params });

  return res?.success;
};

export interface GetMonthlyMembers extends LibDtoMonthlyMemberDto, Paging {}
/**
 * @description:  包月车列表-分页
 * @param {GetMonthlyMembers} params
 * @return {*}
 */
export const get_monthly_members = async (params: GetMonthlyMembers) => {
  const res = await server.GET<IPage<MonthlyMemberVo>>(`/monthly/members`, {
    params,
  });

  return res?.result;
};

export interface GetMonthlyLibs extends LibDtoMonthlyLibDto, Paging {}
/**
 * @description:  包月车库-分页
 * @param {GetMonthlyLibs} params
 * @return {*}
 */
export const get_monthly_libs = async (params: GetMonthlyLibs) => {
  const res = await server.GET<IPage<MonthlyLibVo>>(`/monthly/libs`, {
    params,
  });

  return res?.result;
};

export interface GetMonthlyApplys extends LibDtoMonthlyApplyDto, Paging {}
/**
 * @description:  申请列表-分页
 * @param {GetMonthlyApplys} params
 * @return {*}
 */
export const get_monthly_applys = async (params: GetMonthlyApplys) => {
  const res = await server.GET<IPage<MonthlyApplyVo>>(`/monthly/applys`, {
    params,
  });

  return res?.result;
};

export interface GetMiniUsers extends AppUsersSearchDto, Paging {}
/**
 * @description:  车主列表-带分页
 * @param {GetMiniUsers} params
 * @return {*}
 */
export const get_mini_users = async (params: GetMiniUsers) => {
  const res = await server.GET<IPage<AppUserInfo>>(`/mini/users`, { params });

  return res?.result;
};

export interface GetMiniUsersUidOrders extends SearchOrderDto, Paging {
  uId?: string;
}
/**
 * @description:  支付记录-分页
 * @param {GetMiniUsersUidOrders} params
 * @return {*}
 */
export const get_mini_users_uId_orders = async (
  params: GetMiniUsersUidOrders
) => {
  const res = await server.GET<IPage<OrderVo>>(
    `/mini/users/${params.uId}/orders`,
    { params }
  );

  return res?.result;
};

export interface GetMiniUsersUidDrivingRecords extends SearchOrderDto, Paging {
  uId?: string;
}
/**
 * @description:  行驶记录-分页
 * @param {GetMiniUsersUidDrivingRecords} params
 * @return {*}
 */
export const get_mini_users_uId_driving_records = async (
  params: GetMiniUsersUidDrivingRecords
) => {
  const res = await server.GET<IPage<OrderVo>>(
    `/mini/users/${params.uId}/driving-records`,
    { params }
  );

  return res?.result;
};

export interface GetMiniUsersUidCars {
  uId?: string;
}
/**
 * @description:  车辆列表
 * @param {GetMiniUsersUidCars} params
 * @return {*}
 */
export const get_mini_users_uId_cars = async (params: GetMiniUsersUidCars) => {
  const res = await server.GET<UserVehicleLicenseVO[]>(
    `/mini/users/${params.uId}/cars`,
    { params }
  );

  return res?.result ?? [];
};

/** 
   * @description:  车主图表
     
   * @return {*}
   */
export const get_mini_users_chart = async () => {
  const res = await server.GET<UserChartVo>(`/mini/users/chart`);

  return res?.result;
};

export interface GetMiniComment extends OrderCommentSearchDto, Paging {}
/**
 * @description:  车主评价-分页
 * @param {GetMiniComment} params
 * @return {*}
 */
export const get_mini_comment = async (params: GetMiniComment) => {
  const res = await server.GET<IPage<OrderCommentVo>>(`/mini/comment`, {
    params,
  });

  return res?.result;
};

export interface GetMiniCommentChart extends OrderCommentSearchDto {}
/**
 * @description:  车主评价-图表
 * @param {GetMiniCommentChart} params
 * @return {*}
 */
export const get_mini_comment_chart = async (params: GetMiniCommentChart) => {
  const res = await server.GET<CommentChartVo>(`/mini/comment/chart`, {
    params,
  });

  return res?.result;
};

export interface GetMerchantId {
  id?: string;
}
/**
 * @description:  ID查询
 * @param {GetMerchantId} params
 * @return {*}
 */
export const get_merchant_id = async (params: GetMerchantId) => {
  const res = await server.GET<TccMerchant>(`/merchant/${params.id}`, {
    params,
  });

  return res?.result;
};

export interface DeleteMerchantId {
  id?: string;
}
/**
 * @description:  删除商户
 * @param {DeleteMerchantId} params
 * @return {*}
 */
export const delete_merchant_id = async (params: DeleteMerchantId) => {
  const res = await server.DELETE(`/merchant/${params.id}`, { params });

  return res?.success;
};

export interface GetMerchantLogRecharge extends LogSearchDto, Paging {}
/**
 * @description:  充值记录-分页
 * @param {GetMerchantLogRecharge} params
 * @return {*}
 */
export const get_merchant_log_recharge = async (
  params: GetMerchantLogRecharge
) => {
  const res = await server.GET<IPage<RechargeVo>>(`/merchant/log/recharge`, {
    params,
  });

  return res?.result;
};

export interface GetMerchantLogRechargeChart extends LogSearchDto {}
/**
 * @description:  充值记录-图表
 * @param {GetMerchantLogRechargeChart} params
 * @return {*}
 */
export const get_merchant_log_recharge_chart = async (
  params: GetMerchantLogRechargeChart
) => {
  const res = await server.GET<RechargeChartVo[]>(
    `/merchant/log/recharge/chart`,
    { params }
  );

  return res?.result ?? [];
};

export interface GetMerchantLogPayment extends LogSearchDto, Paging {}
/**
 * @description:  缴费记录-分页
 * @param {GetMerchantLogPayment} params
 * @return {*}
 */
export const get_merchant_log_payment = async (
  params: GetMerchantLogPayment
) => {
  const res = await server.GET<IPage<PaymentVo>>(`/merchant/log/payment`, {
    params,
  });

  return res?.result;
};

export interface GetMerchantCoupon extends CouponSearchDto, Paging {}
/**
 * @description:  商户优惠券统计列表-分页
 * @param {GetMerchantCoupon} params
 * @return {*}
 */
export const get_merchant_coupon = async (params: GetMerchantCoupon) => {
  const res = await server.GET<IPage<CouponVo>>(`/merchant/coupon`, { params });

  return res?.result;
};

export interface GetMerchantCouponUsed extends CouponUseSearchDto, Paging {}
/**
 * @description:  商户优惠券使用列表-分页
 * @param {GetMerchantCouponUsed} params
 * @return {*}
 */
export const get_merchant_coupon_used = async (
  params: GetMerchantCouponUsed
) => {
  const res = await server.GET<IPage<CouponUseVo>>(`/merchant/coupon/used`, {
    params,
  });

  return res?.result;
};

export interface GetMerchantCouponChart extends CouponSearchDto {}
/**
 * @description:  商户优惠券使用图表
 * @param {GetMerchantCouponChart} params
 * @return {*}
 */
export const get_merchant_coupon_chart = async (
  params: GetMerchantCouponChart
) => {
  const res = await server.GET<CouponChartVo[]>(`/merchant/coupon/chart`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetLogsPsystem extends SystemLogSearchDto, Paging {}
/**
 * @description:  系统日志-分页
 * @param {GetLogsPsystem} params
 * @return {*}
 */
export const get_logs_psystem = async (params: GetLogsPsystem) => {
  const res = await server.GET<IPage<SysLogVo>>(`/logs/psystem`, { params });

  return res?.result;
};

export interface GetLogsPatrol extends SearchPatrolLogDto, Paging {}
/**
 * @description:  巡检日志-分页
 * @param {GetLogsPatrol} params
 * @return {*}
 */
export const get_logs_patrol = async (params: GetLogsPatrol) => {
  const res = await server.GET<IPage<PatrolLogVo>>(`/logs/patrol`, { params });

  return res?.result;
};

export interface GetLogsImport extends SearchImportLogDto, Paging {}
/**
 * @description:  导入记录-分页
 * @param {GetLogsImport} params
 * @return {*}
 */
export const get_logs_import = async (params: GetLogsImport) => {
  const res = await server.GET<IPage<TccImportReport>>(`/logs/import`, {
    params,
  });

  return res?.result;
};

export interface GetLogsChannelOpen extends SearchChannelOpenDto, Paging {}
/**
 * @description:  抬杆日志-分页
 * @param {GetLogsChannelOpen} params
 * @return {*}
 */
export const get_logs_channel_open = async (params: GetLogsChannelOpen) => {
  const res = await server.GET<IPage<ChannelOpenLogVo>>(`/logs/channel-open`, {
    params,
  });

  return res?.result;
};

export interface GetFreeCarId {
  id?: string;
}
/**
 * @description:  详情
 * @param {GetFreeCarId} params
 * @return {*}
 */
export const get_free_car_id = async (params: GetFreeCarId) => {
  const res = await server.GET<TccPlateManage>(`/free-car/${params.id}`, {
    params,
  });

  return res?.result;
};

export interface DeleteFreeCarId {
  id?: string;
}
/**
 * @description:  删除
 * @param {DeleteFreeCarId} params
 * @return {*}
 */
export const delete_free_car_id = async (params: DeleteFreeCarId) => {
  const res = await server.DELETE(`/free-car/${params.id}`, { params });

  return res?.success;
};

export interface GetFinancial extends FinancialDto, Paging {}
/**
 * @description:  财务列表-分页
 * @param {GetFinancial} params
 * @return {*}
 */
export const get_financial = async (params: GetFinancial) => {
  const res = await server.GET<IPage<FinancialVo>>(`/financial`, { params });

  return res?.result;
};

export interface GetFinancialTemp extends TempFinancialDto, Paging {}
/**
 * @description:  临停-分页
 * @param {GetFinancialTemp} params
 * @return {*}
 */
export const get_financial_temp = async (params: GetFinancialTemp) => {
  const res = await server.GET<IPage<TempFinancialVo>>(`/financial/temp`, {
    params,
  });

  return res?.result;
};

export interface GetFinancialTempChart extends TempFinancialDto {}
/**
 * @description:  临停-图表
 * @param {GetFinancialTempChart} params
 * @return {*}
 */
export const get_financial_temp_chart = async (
  params: GetFinancialTempChart
) => {
  const res = await server.GET<TempFinancialChart>(`/financial/temp/chart`, {
    params,
  });

  return res?.result;
};

export interface GetFinancialCoupon extends TimeRangeDate, Paging {}
/**
 * @description:  优惠券-分页
 * @param {GetFinancialCoupon} params
 * @return {*}
 */
export const get_financial_coupon = async (params: GetFinancialCoupon) => {
  const res = await server.GET<IPage<CouponFinancialVo>>(`/financial/coupon`, {
    params,
  });

  return res?.result;
};

/** 
   * @description:  优惠券-图表
     
   * @return {*}
   */
export const get_financial_coupon_chart = async () => {
  const res = await server.GET<CouponFinancialVo[]>(`/financial/coupon/chart`);

  return res?.result ?? [];
};

export interface GetFinancialChart extends FinancialDto {}
/**
 * @description:  财务-图表
 * @param {GetFinancialChart} params
 * @return {*}
 */
export const get_financial_chart = async (params: GetFinancialChart) => {
  const res = await server.GET<FinancialChart>(`/financial/chart`, { params });

  return res?.result;
};

/** 
   * @description:  右中下-车辆状况
     
   * @return {*}
   */
export const get_dc_tcc = async () => {
  const res = await server.GET<TccInfoStatistics>(`/dc/tcc`);

  return res?.result;
};

/** 
   * @description:  左中下-停车场排行
     
   * @return {*}
   */
export const get_dc_tcc_rank = async () => {
  const res = await server.GET<NameCountVo[]>(`/dc/tcc-rank`);

  return res?.result ?? [];
};

/** 
   * @description:  中间/左上/右上/下面-收入信息
     
   * @return {*}
   */
export const get_dc_income = async () => {
  const res = await server.GET<IncomeStatistics>(`/dc/income`);

  return res?.result;
};

/** 
   * @description:  左中上-入场分析
     
   * @return {*}
   */
export const get_dc_in = async () => {
  const res = await server.GET<InAnalyseVo>(`/dc/in`);

  return res?.result;
};

/** 
   * @description:  右中上-出入趋势图
     
   * @return {*}
   */
export const get_dc_in_out = async () => {
  const res = await server.GET<TccInOutStatistics[]>(`/dc/in-out`);

  return res?.result ?? [];
};

export interface GetCouponModelList extends SearchCouponModelDto {}
/**
 * @description:  查询-列表
 * @param {GetCouponModelList} params
 * @return {*}
 */
export const get_coupon_model_list = async (params: GetCouponModelList) => {
  const res = await server.GET<CouponModelVo[]>(`/coupon/model/list`, {
    params,
  });

  return res?.result ?? [];
};

export interface GetCars extends CarSearchDto, Paging {}
/**
 * @description:  车辆查询/我的车场-分页
 * @param {GetCars} params
 * @return {*}
 */
export const get_cars = async (params: GetCars) => {
  const res = await server.GET<IPage<CarVo>>(`/cars`, { params });

  return res?.result;
};

export interface DeleteTccYdpId {
  id?: string;
}
/**
 * @description:  删除诱导屏
 * @param {DeleteTccYdpId} params
 * @return {*}
 */
export const delete_tcc_ydp_id = async (params: DeleteTccYdpId) => {
  const res = await server.DELETE(`/tcc/ydp/${params.id}`, { params });

  return res?.success;
};

export interface DeleteTccYdpCardsId {
  id?: string;
}
/**
 * @description:  删除卡号
 * @param {DeleteTccYdpCardsId} params
 * @return {*}
 */
export const delete_tcc_ydp_cards_id = async (params: DeleteTccYdpCardsId) => {
  const res = await server.DELETE(`/tcc/ydp/cards/${params.id}`, { params });

  return res?.success;
};

export interface DeleteTccPassCardId {
  id?: string;
}
/**
 * @description:  删除
 * @param {DeleteTccPassCardId} params
 * @return {*}
 */
export const delete_tcc_pass_card_id = async (params: DeleteTccPassCardId) => {
  const res = await server.DELETE(`/tcc/pass-card/${params.id}`, { params });

  return res?.success;
};

export interface DeleteTccInfoGroupId {
  id?: string;
}
/**
 * @description:  删除停车场组
 * @param {DeleteTccInfoGroupId} params
 * @return {*}
 */
export const delete_tcc_info_group_id = async (
  params: DeleteTccInfoGroupId
) => {
  const res = await server.DELETE(`/tcc/info/group/${params.id}`, { params });

  return res?.success;
};

export interface DeleteSystemUsersId {
  id?: string;
}
/**
 * @description:  删除用户
 * @param {DeleteSystemUsersId} params
 * @return {*}
 */
export const delete_system_users_id = async (params: DeleteSystemUsersId) => {
  const res = await server.DELETE(`/system/users/${params.id}`, { params });

  return res?.success;
};

export interface DeleteSystemRolesId {
  id?: string;
}
/**
 * @description:  删除角色
 * @param {DeleteSystemRolesId} params
 * @return {*}
 */
export const delete_system_roles_id = async (params: DeleteSystemRolesId) => {
  const res = await server.DELETE(`/system/roles/${params.id}`, { params });

  return res?.success;
};

export interface DeleteSystemMenusId {
  id?: string;
}
/**
 * @description:  删除菜单
 * @param {DeleteSystemMenusId} params
 * @return {*}
 */
export const delete_system_menus_id = async (params: DeleteSystemMenusId) => {
  const res = await server.DELETE(`/system/menus/${params.id}`, { params });

  return res?.success;
};

export interface DeleteStaffPatrolId {
  id?: string;
}
/**
 * @description:  退休巡查人员
 * @param {DeleteStaffPatrolId} params
 * @return {*}
 */
export const delete_staff_patrol_id = async (params: DeleteStaffPatrolId) => {
  const res = await server.DELETE(`/staff/patrol/${params.id}`, { params });

  return res?.success;
};

export interface DeleteStaffPatrolRolesId {
  id?: string;
}
/**
 * @description:  删除巡查角色
 * @param {DeleteStaffPatrolRolesId} params
 * @return {*}
 */
export const delete_staff_patrol_roles_id = async (
  params: DeleteStaffPatrolRolesId
) => {
  const res = await server.DELETE(`/staff/patrol-roles/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface DeleteOrderErrArrDelId {
  id?: string;
}
/**
 * @description:  删除一个欠费订单
 * @param {DeleteOrderErrArrDelId} params
 * @return {*}
 */
export const delete_order_err_arr_del_id = async (
  params: DeleteOrderErrArrDelId
) => {
  const res = await server.DELETE(`/order-err/arr-del/${params.id}`, {
    params,
  });

  return res?.success;
};

export interface DeleteMonthlyLibId {
  id?: string;
}
/**
 * @description:  删除车库包月
 * @param {DeleteMonthlyLibId} params
 * @return {*}
 */
export const delete_monthly_lib_id = async (params: DeleteMonthlyLibId) => {
  const res = await server.DELETE(`/monthly/lib/${params.id}`, { params });

  return res?.success;
};

export interface DeleteMonthlyEventId {
  id?: string;
}
/**
 * @description:  删除活动
 * @param {DeleteMonthlyEventId} params
 * @return {*}
 */
export const delete_monthly_event_id = async (params: DeleteMonthlyEventId) => {
  const res = await server.DELETE(`/monthly/event/${params.id}`, { params });

  return res?.success;
};

export interface DeleteCouponModelId {
  id?: string;
}
/**
 * @description:  删除
 * @param {DeleteCouponModelId} params
 * @return {*}
 */
export const delete_coupon_model_id = async (params: DeleteCouponModelId) => {
  const res = await server.DELETE(`/coupon/model/${params.id}`, { params });

  return res?.success;
};

export interface DeleteBlacklistId {
  id?: string;
}
/**
 * @description:  删除
 * @param {DeleteBlacklistId} params
 * @return {*}
 */
export const delete_blacklist_id = async (params: DeleteBlacklistId) => {
  const res = await server.DELETE(`/blacklist/${params.id}`, { params });

  return res?.success;
};

export interface TccVoiceTextDto {
  id?: string;
  /** 进场语音 */
  inVoice?: string;
  /** 进场提示 */
  inText?: string;
  /** 出场语音 */
  outVoice?: string;
  /** 出场提示 */
  outText?: string;
}
export interface TccYdpDto {
  id?: string;
  name?: string;
  level?: number;
  url?: string;
}
export interface TccYdpCardDto {
  id?: string;
  /** 诱导屏ID */
  ydpId?: string;
  /** 停车场ID */
  tccId?: string;
  /** 编号 */
  number?: string;
  /** 宽 */
  width?: number;
  /** 高 */
  height?: number;
  /** 类型 1 总车位 2 剩余车位 3总车位+剩余车位 */
  type?: number;
}
export interface TccRentPlaceDto {
  id?: string;
  tccId?: string;
  libId?: string;
  /** 车位号 */
  placeNum?: string;
  /** 车牌 */
  plateNumber?: string;
  /** 联系人 */
  contactUser?: string;
  /** 联系电话 */
  contactPhone?: string;
  /** 租赁人 */
  rentUser?: string;
  /** 租赁人联系方式 */
  rentPhone?: string;
  /** 租赁开始时间 */
  rentStartTime?: string;
  /** 租赁结束时间 */
  rentEndTime?: string;
}
export interface TccPassCardDto {
  id?: string;
  name?: string;
  libId?: string;
  /** 匹配类型 0-车牌类型 1-车牌号码 */
  matchType?: number;
  /** 匹配的车牌类型 0-小型蓝牌 1-小型黄牌 2-小型新能源 3-大型新能源 20-小型新能源-纯电 21-小型新能源-混动 121-大型新能源-纯电 121-大型新能源-混动 */
  matchPlateTypes?: string[];
  /** 收费类型 0-临停车 100-产权车位车 101-月租车 1000-特殊车 1001-白名单车 */
  chargeType?: number;
  /** 最大进场数量，默认为空不限制 */
  maxIn?: number;
  /** 超出最大数量后是否禁止进入 */
  overLimitIn?: boolean;
  sort?: number;
}
export interface ConfigRange {
  /** 开始时间 */
  begin?: string;
  rate1?: Rate1;
  rate2?: Rate2;
}
export interface CycleItem {
  /** 优先级,越小优先级越高 */
  sort?: number;
  /** 单位时长 */
  unitMin?: number;
  /** 单位金额,单位:分 */
  unitPrice?: number;
  /** 等级时长 */
  levelMin?: number;
}
export interface CycleRoll {
  /** 优先级,越小优先级越高 */
  sort?: number;
  /** 单位时长 */
  unitMin?: number;
  /** 单位金额,单位:分 */
  unitPrice?: number;
}
export interface LibExtraInfo {
  reverse?: LibReverse;
  /** 车库车位数 */
  total?: number;
  /** 放行类型, 1. 开放式, 2. 不对外 */
  passType?: number;
  /** 支付完成后多少分钟内驶离 */
  paidOutMin?: number;
  /** 微信支付id */
  wxPayId?: string;
  /** 支付宝支付id */
  aliPayId?: string;
  parkRate?: ParkRate;
  monthly?: LibMonthly;
}
export interface LibMonthly {
  /** 是否开放购买 */
  enable?: boolean;
  /** 包月名额 */
  total?: number;
  /** 金额 */
  money?: LibMonthlyMoney[];
}
export interface LibMonthlyMoney {
  /** 几个月 */
  month?: number;
  /** 金额 */
  money?: number;
}
export interface LibReverse {
  /** 是否开启共享 */
  enable?: boolean;
  /** 免费分钟数 */
  freeMinutes?: number;
  holdBeginTime?: string;
  holdEndTime?: string;
  /** 白天每小时占位费用 */
  perHourDayHoldMoney?: number;
  /** 晚上每小时占位费用 */
  perHourNightHoldMoney?: number;
  /** 每小时停车费用 */
  perHourMoney?: number;
  /** 每小时罚款费用 */
  perHourFineMoney?: number;
  /** 共享申请 */
  apply?: boolean;
}
export interface ParkRate {
  /** 具体收费 */
  ranges?: ConfigRange[];
  /** 费用描述 */
  describe?: string;
}
export interface Rate1 {
  normal?: Rate1Rule;
  cycleType?: number;
}
export interface Rate1Rule {
  daytime?: Rate1RuleItem;
  night?: Rate1RuleItem;
  maxPrice?: number;
}
export interface Rate1RuleCycle {
  freeMin?: number;
  cycleItems?: CycleItem[];
}
export interface Rate1RuleItem {
  computeBegin?: string;
  computeEnd?: string;
  firstCycle?: Rate1RuleCycle;
  thenCycle?: Rate1RuleCycle;
  maxPrice?: number;
  freeMinJoin?: boolean;
}
export interface Rate2 {
  /** 不按周期计费,则没有周期概念 */
  noCycle?: boolean;
  /** 固免,表示超过免费停车时间后免费时间是否参与计费 */
  freeMinJoin?: boolean;
  /** 普通车规则 */
  normalCycles?: Rate2RuleCycle[];
  /** 新能源规则-不分大小和混动还是纯电 */
  newEnergyCycles?: Rate2RuleCycle[];
}
export interface Rate2RuleCycle {
  /** 优先级,越小优先级越高 */
  sort?: number;
  /** 免费停车时长(单位:分钟)大于0才有效 */
  freeMin?: number;
  /** 计费周期封顶金额(单位:分)大于0才有效 */
  maxPrice?: number;
  /** 滚动计费 */
  cycleRolls?: CycleRoll[];
}
export interface TccLib {
  id?: string;
  tccId?: string;
  pid?: string;
  name?: string;
  lft?: number;
  rgt?: number;
  level?: number;
  extraInfo?: LibExtraInfo;
  child?: TccLib[];
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface GeoPoint {
  /** 经度 */
  lon?: number;
  /** 纬度 */
  lat?: number;
}
export interface TccExtraInfo {
  /** 是否模拟运行 */
  mockRun?: boolean;
  /** appId */
  appId?: string;
  /** appSecret */
  appSecret?: string;
  /** 0地下 1露天 */
  type?: number;
  /** 总车位数 */
  total?: number;
  /** 入口数量 */
  inChannel?: number;
  /** 出口数量 */
  outChannel?: number;
  /** 联系人姓名 */
  contactName?: string;
  /** 联系人电话 */
  contactPhone?: string;
  /** 详细地址 */
  address?: string;
  point?: GeoPoint;
  /** 停车场图片 */
  urls?: string[];
  /** 备注 */
  remark?: string;
  /** 共享停车-微信支付id */
  reverseWxPayId?: string;
  /** 共享停车-支付宝支付id */
  reverseAliPayId?: string;
  /** 共享停车-银联支付id */
  reverseUnionPayId?: string;
}
export interface TccInfoDto {
  id?: string;
  name?: string;
  extraInfo?: TccExtraInfo;
}
export interface TccGroupDto {
  id?: string;
  name?: string;
  tccIds?: string[];
}
export interface CameraExtraInfo {
  /** 内网ip地址 */
  ip?: string;
  /** 音量(10~100) */
  volume?: number;
}
export interface ChannelExtraInfo {
  /** 是否是入口 */
  inlet?: boolean;
}
export interface TccChannelDto {
  id?: string;
  libId?: string;
  name?: string;
  extraInfo?: ChannelExtraInfo;
  /** 摄像头类型 */
  cameraType?: number;
  cameraNo?: string;
  cameraInfo?: CameraExtraInfo;
}
export interface UserDto {
  /** 用户ID */
  id?: string;
  /** 用户账号 */
  username?: string;
  /** 用户密码 */
  password?: string;
  /** 用户真实姓名 */
  name?: string;
  /** 性别 1男 2女 */
  sex?: number;
  /** 电话号码 */
  phone?: string;
  /** 身份证号 */
  idCard?: string;
  /** 邮箱 */
  email?: string;
  /** 部门ID */
  depId?: string;
  /** 状态 true正常false停用  默认正常 */
  status?: boolean;
  /** 角色ID数组(非必须) */
  roleIds?: string[];
  /** 用户权限 */
  permissionIds?: string[];
}
export interface ResetPassDto {
  /** 用户ID */
  id?: string;
  /** 用户密码 */
  password?: string;
}
export interface TenantDto {
  id?: string;
  name?: string;
  sysUsername?: string;
  password?: string;
  contactName?: string;
  contactPhone?: string;
  status?: boolean;
  tccIds?: string[];
  permissionIds?: string[];
  remark?: string;
}
export interface RoleDto {
  /** 角色ID */
  id?: string;
  /** 角色名称 */
  roleName?: string;
  /** 权限编码 */
  code?: string;
  /** 状态 true正常 false停用  默认正常 */
  status?: boolean;
  /** 排序 */
  sort?: number;
  /** 所选菜单权限ID集合 */
  menuIds?: string[];
}
export interface UserPasswordDto {
  /** 原始密码 */
  oldPassword?: string;
  /** 新密码 */
  password?: string;
  /** 确认的新密码 */
  confirmPassword?: string;
}
export interface MenuDto {
  /** 权限ID */
  id?: string;
  /** 父级目录或菜单ID */
  parentId?: string;
  /** 权限名称 */
  permissionName?: string;
  /** 图标 */
  icon?: string;
  /** 权限编码 */
  code?: string;
  /** 排序 */
  sort?: number;
  /** 资源类型 1目录 2菜单 3按钮 */
  resourceType?: number;
  /** 路由或跳转连接 */
  url?: string;
  /** 是否可见 默认可见 */
  visible?: boolean;
  /** 是否可用 默认可用 */
  status?: boolean;
}
export interface PatrolUserDto {
  /** id */
  id?: string;
  /** 员工编号 */
  jobNum?: string;
  /** 用户真实姓名 */
  name?: string;
  /** 电话号码 */
  phone?: string;
  /** 身份证号 */
  idCard?: string;
  /** 照片文件 */
  file?: string;
}
export interface StaffResetPasswordDto {
  /** id */
  id?: string;
  /** 密码 */
  password?: string;
}
export interface PatrolRoleDto {
  id?: string;
  /** 角色名称 */
  name?: string;
  /** 角色权限字符串 */
  permissions?: string[];
  /** 序号 */
  sort?: number;
}
export interface ManualOnlineDto {
  id?: string;
  tccId?: string;
  libId?: string;
  inChannelId?: string;
  plateNo?: string;
  plateType?: number;
  inAt?: string;
}
export interface MonthlyEventDiscount {
  /** 匹配的月份数 */
  month?: number;
  /** 折扣后金额 */
  discountMoney?: number;
}
export interface MonthlyEventDto {
  id?: string;
  tccId?: string;
  libId?: string;
  /** 活动名称 */
  title?: string;
  /** 活动说明 */
  remark?: string;
  /** 优先级 */
  sort?: number;
  /** 活动名额 */
  total?: number;
  /** 限购次数 */
  limitBuy?: number;
  /** 开始日期 */
  beginDate?: string;
  /** 结束日期 */
  endDate?: string;
  extraInfo?: MonthlyEventExtraInfo;
}
export interface MonthlyEventExtraInfo {
  /** 包月折扣 */
  monthlyDiscounts?: MonthlyEventDiscount[];
}
export interface MerchantDto {
  id?: string;
  tccId?: string;
  libIds?: string[];
  merchantName?: string;
  contactName?: string;
  contactPhone?: string;
  /** 电子支付 */
  pay?: boolean;
  /** 可用优惠券模板 */
  couponModelIds?: string[];
}
export interface FreeCarDto {
  id?: string;
  tccId?: string;
  libId?: string;
  /** 通行证id */
  passCardId?: string;
  /** 100-产权车，101-月租车，1000-特殊车，1001-白名单 */
  chargeType?: number;
  /** 主-车牌号 */
  mainPlateNo?: string;
  /** 主-车牌类型 */
  mainPlateType?: number;
  /** 子-车牌号 */
  subPlateNo?: string;
  /** 子-车牌类型 */
  subPlateType?: number;
  /** 开始日期 */
  beginDate?: string;
  /** 结束日期 */
  endDate?: string;
  extraInfo?: ManageExtraInfo;
}
export interface ManageExtraInfo {
  placeNum?: string;
  name?: string;
  phone?: string;
  idNumber?: string;
}
export interface BlacklistDto {
  id?: string;
  plateNo?: string;
  tccId?: string;
  libId?: string;
  plateType?: number;
  remark?: string;
  /** 能否进入 */
  canIn?: boolean;
  /** 能否离开 */
  canOut?: boolean;
}
export interface OnlineArrDto {
  /** 停车id */
  onlineId?: string;
  /** 假定出场时间 */
  fakeOutAt?: string;
  /** 模拟一下并不进行真实的转移 */
  mock?: boolean;
}
export interface OnlineMoveVo {
  /** 去向,0-欠费,1-正常账单 */
  direct?: number;
}
export interface DelOnlineDto {
  /** 停车id */
  onlineId?: string;
  /** 理由 */
  reason?: string;
}
export interface ChangeOnlineDto {
  /** 停车id */
  onlineId?: string;
  /** 缴费类型 */
  chargeType?: number;
  /** 车牌号 */
  plateNo?: string;
  /** 车牌类型 */
  plateType?: number;
}
export interface OpenChannelDto {
  channelId?: string;
  /** 理由 */
  reason?: string;
  /** 车牌号 */
  plateNo?: string;
}
export interface InletOpenWaitDto {
  waitId?: string;
  /** 缴费类型,默认临停车 */
  chargeType?: number;
  /** 需要纠正的车牌号 */
  plateNo?: string;
  /** 需要纠正的车牌类型 */
  plateType?: number;
  /** 理由 */
  reason?: string;
}
export interface ExitOnlineWaitDto {
  onlineId?: string;
  channelId?: string;
}
export interface ExitChangeWaitDto {
  waitId?: string;
  /** 需要纠正的车牌号 */
  plateNo?: string;
  /** 需要纠正的车牌类型 */
  plateType?: number;
}
export interface ImportResult {
  success?: number;
  error?: number;
}
export interface TccRentPlaceSearchDto {
  placeNum?: string;
  tccId?: string;
  libId?: string;
}
export interface TccWxPay {
  id?: string;
  /** 名称 */
  name?: string;
  info?: WxInfo;
  createdAt?: string;
  updatedAt?: string;
}
export interface WxInfo {
  /** 设置微信公众号或者小程序等的appid */
  appId?: string;
  /** app支付下微信开放平台创建的app的appid */
  appPayAppId?: string;
  /** 微信支付商户号 */
  mchId?: string;
  /** 微信支付商户密钥 */
  mchKey?: string;
  /** 服务商模式下的子商户公众账号ID，普通模式请不要配置，请在配置文件中将对应项删除. */
  subAppId?: string;
  /** 服务商模式下的子商户号，普通模式请不要配置，最好是请在配置文件中将对应项删除. */
  subMchId?: string;
  /** apiclient_cert.p12文件的绝对路径，或者如果放在项目中，请以classpath:开头指定. */
  keyPath?: string;
  /** 微信支付分serviceId */
  serviceId?: string;
  /** 证书序列号 */
  certSerialNo?: string;
  /** apiV3秘钥 */
  apiv3Key?: string;
  /** 微信支付分回调地址 */
  payScoreNotifyUrl?: string;
  /** apiv3 商户apiclient_key.pem */
  privateKeyPath?: string;
  /** apiv3 商户apiclient_cert.pem */
  privateCertPath?: string;
  /** 启用 v3 接口 */
  enableV3?: boolean;
}
export interface TccLibRateDto {
  id?: string;
  parkRate?: ParkRate;
}
export interface ResetLoginPassDto {
  /** 用户名或手机号 */
  username?: string;
  /** 旧密码 */
  password?: string;
  /** 新密码 */
  newPassword?: string;
}
export interface AdminLoginDto {
  /** 用户名或手机号 */
  username?: string;
  /** 密码 */
  password?: string;
}
export interface LoginResult {
  /** 登录后的token,后续请求带上Authorization 请求头 */
  token?: string;
  /** 姓名 */
  name?: string;
  /** 登录名 */
  username?: string;
  /** 头像 */
  avatar?: string;
  /** 电话号码 */
  phone?: string;
  /** 创建时间 */
  createdAt?: string;
  /** 部门 */
  depName?: string;
  /** 用户角色列表 */
  roles?: string[];
  /** 城市 */
  city?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 是否激活 */
  active?: boolean;
}
export interface BindPatrolLotGroupDto {
  patrolId?: string;
  /** 为空时清除绑定 */
  groupId?: string;
}
export interface PatrolRoleBindDto {
  /** 巡查人员ID */
  patrolId?: string;
  /** 巡查角色ID */
  roleId?: string;
}
export interface SearchOnlineDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccIds?: string[];
  libIds?: string[];
  plateNo?: string;
  /** 订单是否为手动录入 */
  manual?: boolean;
}
export interface SearchOrderDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccIds?: string[];
  plateNo?: string;
  carId?: string;
  /** 支付用户ID */
  payUserId?: string;
  /** 用户ID */
  appUserId?: string;
  /** 缴费类型 */
  chargeType?: number;
  /** 是否是无牌车 */
  noPlate?: boolean;
}
export interface LibDtoStatisticsDto {
  /** 停车场id */
  tccId?: string;
  /** 车库id */
  libId?: string;
  /** 开始年月 yyyy-MM */
  startYearMonth?: string;
  /** 结束年月 yyyy-MM */
  endYearMonth?: string;
}
export interface RemoveApplyDto {
  id?: string;
  /** 原因 -1-其它，0-未支付，1-没有包月需求 */
  reason?: number;
  /** 备注 */
  remark?: string;
}
export interface TccLibMonthlyDto {
  /** 车库id */
  id?: string;
  monthly?: LibMonthly;
}
export interface AppUsersSearchDto {
  date?: string;
  /** 电话号码,右模糊 */
  phone?: string;
  /** 车牌,右模糊 */
  plateNo?: string;
}
export interface LogSearchDto {
  /** 起始月 yyyy-mm */
  startMonth?: string;
  /** 结束月 yyyy-mm */
  endMonth?: string;
  plateNo?: string;
  start?: string;
  end?: string;
}
export interface TempFinancialDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccIds?: string[];
  libIds?: string[];
}
export interface FinancialDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccIds?: string[];
}
export interface TimeRangeDate {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
}
export interface CouponModelDto {
  id?: string;
  /** 1-商户  2-车场 */
  platformType?: number;
  tccIds?: string[];
  /** 名称 */
  name?: string;
  remark?: string;
  /** 0-时间 1-金额 2-全免 */
  type?: number;
  /** 优惠数额 */
  discount?: number;
  /** 价格 */
  price?: number;
  /** 有效期限 （月）  为0时24小时有效 */
  period?: number;
  /** 启用状态 */
  enabled?: boolean;
}
export interface ChannelOnlineDto {
  /** 停车场id */
  tccId?: string;
  /** 车库id */
  tccLibId?: string;
}
export interface ChannelOnlineVo {
  id?: string;
  libId?: string;
  name?: string;
  extraInfo?: ChannelExtraInfo;
  cameraType?: MsgType;
  cameraNo?: string;
  cameraInfo?: CameraExtraInfo;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  tccId?: string;
  tccName?: string;
  /** 库名 */
  libName?: string;
  /** 摄像头在线状态 */
  cameraOnline?: boolean;
  wait?: TccChannelWait;
  online?: TccOnline;
  lastSs?: TccChannelSs;
}
export interface Discount {
  id?: string;
  value?: number;
  type?: number;
  exclusive?: boolean;
  result?: DiscountResult;
}
export interface DiscountResult {
  couponMoney?: number;
  remainMoney?: number;
}
export interface Lock {
  /** 车辆是否被锁定 */
  lock?: boolean;
}
export interface OcrInfo {
  confidence?: number;
  plateId?: string;
  pic?: string;
  smallPic?: string;
  devAt?: string;
}
export interface OnlineExtraInfo {
  lock?: Lock;
  /** 订单为手动录入 */
  manual?: boolean;
  /** 订单为共享停车 */
  reverse?: boolean;
}
export interface PayDetail {
  libId?: string;
  libName?: string;
  /** 支付流水号 */
  serialId?: string;
  /** 缴费点,0-通道处,1-场中 */
  site?: number;
  range?: RateRange;
  /** 总金额 */
  totalMoney?: number;
  /** 支付金额 */
  payMoney?: number;
  /** 免费金额 */
  freeMoney?: number;
  /** 支付方式 */
  payMode?: number;
  /** 支付时间 */
  payTime?: string;
  /** 优惠信息 */
  discounts?: Discount[];
}
export interface RateRange {
  from?: string;
  to?: string;
}
export interface TccChannelSs {
  id?: string;
  channelId?: string;
  pic?: string;
  createdAt?: string;
}
export interface TccChannelWait {
  id?: string;
  tccId?: string;
  tccName?: string;
  libId?: string;
  channelId?: string;
  plateNo?: string;
  plateType?: MsgType;
  ocrInfo?: OcrInfo;
  onlineId?: string;
  remark?: string;
  needPay?: number;
  timeAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface TccOnline {
  id?: string;
  /** 停车场id */
  tccId?: string;
  /** 停车场名称 */
  tccName?: string;
  /** 库id */
  libId?: string;
  /** 入场通道 */
  inChannelId?: string;
  /** 车牌号 */
  plateNo?: string;
  /** 车牌类型 */
  plateType?: MsgType;
  /** 入场时间 */
  inAt?: string;
  /** 缴费类型 */
  chargeType?: MsgType;
  /** 匹配的通行证id */
  passCardId?: string;
  inOcrInfo?: OcrInfo;
  extraInfo?: OnlineExtraInfo;
  appUserId?: string;
  /** 折扣-未支付前的折扣 */
  discounts?: Discount[];
  payInfo?: TccOnlinePayInfo;
  createdAt?: string;
  updatedAt?: string;
}
export interface TccOnlinePayInfo {
  /** 出场倒计时器 */
  exitTimer?: string;
  /** 具体支付信息 */
  details?: PayDetail[];
}
export interface LastSsDto {
  channelId?: string;
  /** 指定这个时间之后的快照 */
  from?: string;
}
export interface VoiceTextVo {
  id?: string;
  tenantId?: string;
  type?: MsgType;
  inText?: string;
  inVoice?: string;
  outText?: string;
  outVoice?: string;
  createdAt?: string;
  deleted?: boolean;
  tenantName?: string;
}
export interface TccYdpSearchDto {
  tccId?: string;
  ydpId?: string;
  level?: number;
}
export interface YdpVo {
  id?: string;
  name?: string;
  tccNames?: string;
  tenantName?: string;
  level?: number;
  url?: string;
}
export interface TccYdp {
  id?: string;
  name?: string;
  level?: number;
  url?: string;
  tenantId?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface YdpCardTccVo {
  tccId?: string;
  tccName?: string;
  cards?: YdpCardVo[];
}
export interface YdpCardVo {
  id?: string;
  ydpId?: string;
  tccId?: string;
  tccName?: string;
  number?: string;
  width?: number;
  height?: number;
  type?: number;
}
export interface RentPlaceVo {
  id?: string;
  tccName?: string;
  libName?: string;
  placeNum?: string;
  plateNumber?: string;
  rentStartTime?: string;
  rentEndTime?: string;
  rentUser?: string;
  rentPhone?: string;
  contactUser?: string;
  contactPhone?: string;
}
export interface TccRentPlace {
  id?: string;
  tccId?: string;
  libId?: string;
  placeNum?: string;
  plateNumber?: string;
  contactUser?: string;
  contactPhone?: string;
  rentUser?: string;
  rentPhone?: string;
  rentStartTime?: string;
  rentEndTime?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface SearchPassCardDto {
  libId?: string;
}
export interface TccPassCardVo {
  id?: string;
  tccId?: string;
  libId?: string;
  /** 通行卡名称 */
  name?: string;
  /** 匹配类型 */
  matchType?: MsgType;
  /** 匹配的车牌类型 */
  matchPlateTypes?: string[];
  /** 匹配的车牌类型 str */
  matchPlateTypesStr?: string;
  /** 最大数量，默认0不限制 */
  maxIn?: number;
  /** 超出后是否禁止进入 */
  overLimitIn?: boolean;
  /** 计费类型 */
  chargeType?: MsgType;
  /** 排序 */
  sort?: number;
  /** 是否是系统内置 */
  system?: boolean;
}
export interface LibPriceAndMonthVo {
  rate?: ParkRate;
  /** 包月费用列表 */
  monthlyList?: LibMonthlyMoney[];
  libName?: string;
}
export interface TccInfoSearchDto {
  name?: string;
  /** 编号 */
  extraCode?: string;
}
export interface TccInfo {
  id?: string;
  name?: string;
  type?: MsgType;
  extraCode?: string;
  multiLib?: boolean;
  extraInfo?: TccExtraInfo;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface TccTree {
  id?: string;
  name?: string;
  type?: number;
  children?: TccTree[];
}
export interface TccInfoVo {
  id?: string;
  name?: string;
  type?: MsgType;
  extraCode?: string;
  reverse?: boolean;
  extraInfo?: TccExtraInfo;
  createdAt?: string;
  updatedAt?: string;
  /** 是否绑定了租户 */
  bindTenant?: boolean;
}
export interface TccGroupVo {
  id?: string;
  name?: string;
  tccIds?: string[];
  tccNames?: string;
}
export interface TccInfoStatistics {
  /** 停车场数量 */
  tccCount?: number;
  /** 车位数 */
  placeCount?: number;
  /** 租赁车位数 */
  rentPlaceCount?: number;
  /** 产权车位数 */
  propertyPlaceCount?: number;
  /** 停车场列表 */
  tccList?: TccInfo[];
}
export interface NameCountVo {
  name?: string;
  value?: number;
}
export interface TccIncomeStatistics {
  /** 实际收入 */
  income?: number;
  /** 未收金额 */
  arrears?: number;
  /** 折扣金额 */
  discount?: number;
  /** 收费汇总-现金 */
  cash?: number;
  /** 收费汇总-余额 */
  balance?: number;
  /** 收费汇总-微信 */
  wechat?: number;
  /** 收费汇总-支付宝 */
  ali?: number;
  /** 收费汇总-银联 */
  union?: number;
  /** 时长分析,0:<=15分钟，1：大于15<=60 2：大于60<=120 3:大于120<=240,4:大于240 */
  time?: NameCountVo[];
  /** 停车场排行 */
  tccRank?: NameCountVo[];
  /** 占用率 没乘100 */
  useRate?: number;
  /** 周转率 */
  turnoverRate?: number;
}
export interface TccInOutStatistics {
  /** 日期/时间 */
  dateTime?: string;
  /** 进场 */
  inCount?: number;
  /** 出场 */
  outCount?: number;
}
export interface TccInOutLatest {
  latestIn?: TccInOutLatestInner[];
  latestOut?: TccInOutLatestInner[];
}
export interface TccInOutLatestInner {
  tccName?: string;
  channelName?: string;
  time?: string;
  plateNo?: string;
}
export interface TccChannelSearchDto {
  tccId?: string;
  libId?: string;
  /** 车库名字 */
  libName?: string;
  /** 是否是入口 */
  inlet?: boolean;
  /** 摄像头编号 */
  cameraNo?: string;
}
export interface ChannelVo {
  id?: string;
  tccName?: string;
  libName?: string;
  channelName?: string;
  extraInfo?: ChannelExtraInfo;
  /** 摄像头类型 */
  cameraType?: MsgType;
  /** 摄像头唯一编号 */
  cameraNo?: string;
  cameraInfo?: CameraExtraInfo;
  /** 摄像头-是否在线 */
  cameraOnline?: boolean;
}
export interface TccChannel {
  id?: string;
  libId?: string;
  name?: string;
  extraInfo?: ChannelExtraInfo;
  cameraType?: MsgType;
  cameraNo?: string;
  cameraInfo?: CameraExtraInfo;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface WaitCarVo {
  /** 车场 */
  tccName?: string;
  /** 车库 */
  libName?: string;
  /** 通道 */
  channelName?: string;
  plateNo?: string;
  ocrInfo?: OcrInfo;
  timeAt?: string;
  plateType?: MsgType;
}
export interface UserSearchDto {
  /** 部门ID */
  depId?: string;
  /** 用户真实姓名 */
  name?: string;
  /** 电话号码 */
  phone?: string;
}
export interface UserVo {
  id?: string;
  /** 用户账号 */
  username?: string;
  /** 用户真实姓名 */
  name?: string;
  /** 电话号码 */
  phone?: string;
  /** 性别 0未填写，1男，2女 */
  sex?: number;
  /** 状态 true正常，false停用 */
  status?: boolean;
  /** 激活状态 true激活，false未激活 */
  active?: boolean;
  /** 已有角色，逗号分隔 */
  roles?: string;
  /** 已有停车场，逗号分隔 */
  parks?: string;
  /** 创建时间 */
  createdAt?: string;
  /** 所属租户名 */
  tenantName?: string;
}
export interface SysRole {
  id?: string;
  roleName?: string;
  code?: string;
  status?: boolean;
  sort?: number;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface SearchTenantDto {
  name?: string;
  contactName?: string;
}
export interface TenantVo {
  id?: string;
  name?: string;
  /** 停车场名称，逗号连接 */
  tccNames?: string;
  /** 停车场id */
  tccIds?: string[];
  sysUsername?: string;
  remark?: string;
  /** 停车场数量 */
  tccCount?: string;
  /** 车位数量 */
  placeCount?: number;
  contactName?: string;
  contactPhone?: string;
  status?: boolean;
}
export interface TenantInfoVo {
  id?: string;
  /** 名称 */
  name?: string;
  /** 账号 */
  sysUsername?: string;
  /** 联系人 */
  contactName?: string;
  /** 联系电话 */
  contactPhone?: string;
  remark?: string;
  status?: boolean;
  permissionIds?: string[];
  /** 停车场 */
  tccIds?: string[];
}
export interface PermissionTree {
  id?: string;
  /** 父级菜单ID */
  parentId?: string;
  /** 名称 */
  permissionName?: string;
  /** 地址 */
  url?: string;
  /** 排序号 */
  sort?: number;
  /** 权限字符串 */
  code?: string;
  /** 显示状态 */
  visible?: boolean;
  /** 菜单状态 */
  status?: boolean;
  /** 图标 */
  icon?: string;
  /** 资源类型 1目录 2菜单 3按钮 */
  resourceType?: number;
  /** 子菜单 */
  children?: PermissionTree[];
}
export interface MenuButtons {
  menus?: MenuTree[];
  buttons?: string[];
}
export interface MenuTree {
  /** 名称 */
  name?: string;
  /** 地址 */
  url?: string;
  /** 图标 */
  icon?: string;
  /** 子菜单 */
  children?: MenuTree[];
}
export interface OperationLogDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  createdUser?: string;
  module?: number;
}
export interface OperationLogVo {
  id?: string;
  createdAt?: string;
  module?: MsgType;
  operation?: string;
  createdUser?: string;
}
export interface SearchConfigDto {
  module?: string;
  key?: string;
}
export interface SysConfig {
  module?: string;
  key?: string;
  value?: string;
  description?: string;
}
export interface TccStatisticsDto {
  tccId?: string;
  libId?: string;
}
export interface TccStatisticsCharge {
  type?: MsgType;
  count?: number;
}
export interface TccStatisticsDate {
  date?: string;
  count?: number;
}
export interface TccStatisticsVo {
  tccId?: string;
  tccName?: string;
  libId?: string;
  libName?: string;
  /** 总泊位数 */
  placeTotal?: number;
  /** 7天停车分析 */
  dateList?: TccStatisticsDate[];
  /** 通行类型统计 */
  chargeList?: TccStatisticsCharge[];
}
export interface PatrolUserSearchDto {
  /** 姓名-全模糊查询 */
  name?: string;
  /** 工作状态 1在职 0离职 */
  workStatus?: number;
  /** 手机号 */
  phone?: string;
  /** 停车场ID */
  tccId?: string;
}
export interface PatrolUserResult {
  id?: string;
  jobNum?: string;
  name?: string;
  sex?: MsgType;
  age?: number;
  phone?: string;
  avatar?: string;
  workStatus?: MsgType;
  tccNames?: string;
  groupId?: string;
  roleName?: string;
  roleId?: string;
  /** 版本号 */
  version?: string;
  /** 设备号 */
  imei?: string;
}
export interface StaffLoginRecordDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  /** 用户ID */
  userId?: string;
}
export interface StaffLoginRecord {
  imei?: string;
  version?: string;
  createdAt?: string;
}
export interface TccPatrolRole {
  id?: string;
  name?: string;
  permissions?: string[];
  sort?: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface TccOrder {
  id?: string;
  /** 停车场id */
  tccId?: string;
  /** 停车场名称 */
  tccName?: string;
  /** 库id */
  libId?: string;
  /** 入场通道 */
  inChannelId?: string;
  /** 车牌号 */
  plateNo?: string;
  /** 车牌类型 */
  plateType?: MsgType;
  /** 入场时间 */
  inAt?: string;
  /** 缴费类型 */
  chargeType?: MsgType;
  /** 匹配的通行证id */
  passCardId?: string;
  inOcrInfo?: OcrInfo;
  extraInfo?: OnlineExtraInfo;
  appUserId?: string;
  /** 折扣-未支付前的折扣 */
  discounts?: Discount[];
  payInfo?: TccOnlinePayInfo;
  createdAt?: string;
  updatedAt?: string;
  outAt?: string;
  outChannelId?: string;
  outOcrInfo?: OcrInfo;
  totalMoney?: number;
  payMoney?: number;
  freeMoney?: number;
  payMode?: MsgType;
  deleted?: boolean;
}
export interface OnlineVo {
  id?: string;
  /** 车牌 */
  plateNo?: string;
  /** 停车场名称 */
  tccName?: string;
  /** 车库名称 */
  libName?: string;
  tccId?: string;
  libId?: string;
  inChannelId?: string;
  /** 进场通道名称 */
  inChannelName?: string;
  /** 车辆类型 */
  plateType?: MsgType;
  plateTypeStr?: string;
  /** 收费类型 */
  chargeType?: MsgType;
  /** 进场时间 */
  inAt?: string;
  /** 进场图片 */
  inPic?: string;
  /** 是否是手动录入车牌 */
  manual?: boolean;
}
export interface OnlineChartVo {
  /** 正在停车数量 */
  total?: number;
  /** 排名 */
  rank?: RankItem[];
  /** 数量分析 */
  time?: TimeItem[];
}
export interface RankItem {
  name?: string;
  count?: number;
}
export interface TimeItem {
  hour?: number;
  count?: number;
}
export interface InnerPayDetail {
  libId?: string;
  libName?: string;
  /** 支付流水号 */
  serialId?: string;
  /** 缴费点,0-通道处,1-场中 */
  site?: number;
  range?: RateRange;
  /** 总金额 */
  totalMoney?: number;
  /** 支付金额 */
  payMoney?: number;
  /** 免费金额 */
  freeMoney?: number;
  /** 支付方式 */
  payMode?: number;
  /** 支付时间 */
  payTime?: string;
  /** 优惠信息 */
  discounts?: Discount[];
  payModeInfo?: MsgType;
}
export interface OrderVo {
  id?: string;
  /** 车牌号 */
  plateNo?: string;
  /** 停车场 */
  tccName?: string;
  libName?: string;
  /** 入场通道 */
  inChannelName?: string;
  /** 出场通道 */
  outChannelName?: string;
  /** 进场时间 */
  inAt?: string;
  /** 进场图片 */
  inPic?: string;
  /** 出场时间 */
  outAt?: string;
  /** 出场图片 */
  outPic?: string;
  /** 缴费类型 */
  chargeType?: MsgType;
  /** 支付信息 */
  payDetailList?: InnerPayDetail[];
}
export interface CountType {
  type?: string;
  count?: number;
}
export interface HistoryChartVo {
  /** 总订单数 */
  total?: number;
  /** 总停车时长,分钟数 */
  parkTime?: number;
  /** 停车时长分析, 1. 0~15分钟 2. 15~60分钟 3. 1~2小时 4. 2~4 小时 5. 4小时以上 */
  time?: CountType[];
  /** 收费分析, 1. 免费 2. 欠费 3. 付费 */
  payCount?: CountType[];
  /** 支付类型, 1. 混合支付 2. 支付宝 3. 微信 4. 现金 5. 余额 6. 免费 7:银联 8:未知 */
  payType?: CountType[];
  /** 牌照类型, 1. 蓝牌车 2. 黄牌，3.新能源车 */
  plateType?: CountType[];
  /** 车牌统计 */
  plateCount?: CountType[];
}
export interface SearchOrderArrDto {
  tccIds?: string[];
  plateNo?: string;
}
export interface OrderArrVo {
  id?: string;
  /** 停车场id */
  tccId?: string;
  /** 停车场 */
  tccName?: string;
  /** 库id */
  libId?: string;
  /** 入场通道 */
  inChannelId?: string;
  /** 车牌号 */
  plateNo?: string;
  /** 车牌类型 */
  plateType?: MsgType;
  /** 入场时间 */
  inAt?: string;
  /** 缴费类型 */
  chargeType?: MsgType;
  /** 匹配的通行证id */
  passCardId?: string;
  inOcrInfo?: OcrInfo;
  extraInfo?: OnlineExtraInfo;
  appUserId?: string;
  /** 折扣-未支付前的折扣 */
  discounts?: Discount[];
  payInfo?: TccOnlinePayInfo;
  createdAt?: string;
  updatedAt?: string;
  /** 假定出场时间 */
  fakeOutAt?: string;
  range?: RateRange;
  /** 总金额 */
  totalMoney?: number;
  /** 欠费金额 */
  arrMoney?: number;
  /** 免费金额 */
  freeMoney?: number;
  /** 库名 */
  libName?: string;
  /** 入场通道名 */
  inChannelName?: string;
  /** 支付信息 */
  payDetailList?: InnerPayDetail[];
}
export interface MonthlyStatisticsVo {
  date?: string;
  /** 车辆数 */
  carCount?: number;
  /** 次数 */
  orderCount?: number;
  /** 新增包月数 */
  newCount?: number;
  /** 金额-分 */
  money?: number;
}
export interface MonthlyStatisticsChart {
  /** 日期/月份 */
  date?: string;
  /** 金额 */
  money?: number;
  /** 次数 */
  total?: number;
}
export interface LibDtoMonthlyMemberDto {
  /** 停车场id */
  tccId?: string;
  /** 车库id */
  libId?: string;
  phone?: string;
}
export interface MonthlyMemberVo {
  id?: string;
  phone?: string;
  plateNo?: string;
  tccName?: string;
  libName?: string;
  /** 是否是母车，空代表非子母车 */
  motherFlag?: boolean;
  /** 注册时间 */
  createdAt?: string;
  /** 启用时间 */
  beginDate?: string;
  /** 到期时间 */
  endDate?: string;
}
export interface LibDtoMonthlyLibDto {
  /** 停车场id */
  tccId?: string;
  /** 车库id */
  libId?: string;
  /** 停车场编号 */
  extraCode?: string;
  /** 包月状态 */
  enable?: boolean;
}
export interface MonthlyLibVo {
  tccName?: string;
  libId?: string;
  tccId?: string;
  libName?: string;
  /** 车位数量 */
  placeNum?: number;
  monthly?: LibMonthly;
}
export interface SearchMonthlyEventDto {
  /** 车库id */
  libId?: string;
  /** 0-进行中 1-未开始  2-已过期 */
  type?: number;
}
export interface MonthlyEventVo {
  id?: string;
  title?: string;
  remark?: string;
  /** 总名额 */
  total?: number;
  /** 限制购买次数 */
  limitBuy?: number;
  used?: number;
  beginDate?: string;
  endDate?: string;
  enabled?: boolean;
  sort?: number;
  extraInfo?: MonthlyEventExtraInfo;
  available?: number;
  type?: number;
}
export interface LibDtoMonthlyApplyDto {
  /** 停车场id */
  tccId?: string;
  /** 车库id */
  libId?: string;
  /** 0-申请列表，1-移除列表 */
  status?: number;
}
export interface MonthlyApplyVo {
  id?: string;
  /** 姓名 */
  ownerName?: string;
  /** 车牌 */
  plateNo?: string;
  /** 颜色 */
  color?: string;
  /** 联系电话 */
  ownerPhone?: string;
  /** 地址 */
  ownerAddress?: string;
  /** 申请时间 */
  createdAt?: string;
  /** 申请状态 */
  status?: MsgType;
  /** 移除原因 */
  reason?: MsgType;
  /** 备注 */
  remark?: string;
}
export interface AppUserInfo {
  /** id */
  id?: string;
  /** 电话 */
  phone?: string;
  /** 车牌号 */
  plateNo?: string;
  /** 绑定数量 */
  bindCarCount?: number;
  /** 认证数量,大于0则为认证用户 */
  carOwnerCount?: number;
  /** 充值金额 */
  topUpSum?: number;
  /** 实际到账金额 */
  topUpActual?: number;
  /** 钱包余额 */
  remainingSum?: number;
  /** 停车次数 */
  parkCount?: number;
  /** 累计欠费,单位:分 */
  unpaidSum?: number;
  /** 欠费笔数 */
  unpaidNum?: number;
  /** 积分余额 */
  creditsSum?: number;
  /** 积分总额 */
  creditsTotal?: number;
  /** 优惠券余额 */
  discountSum?: number;
  /** 优惠券总额 */
  discountTotal?: number;
  /** 注册日期 */
  createdAt?: string;
}
export interface UserVehicleLicenseVO {
  id?: string;
  /** 号牌号码 */
  plateNo?: string;
  /** 行驶证 */
  license?: string;
  plateType?: MsgType;
}
export interface UserChartVo {
  /** 用户总数 */
  userTotal?: string;
  /** 钱包总余额 元 */
  moneyTotal?: string;
  /** 近6月新增用户统计 */
  lastSixMonthUserMap?: object;
  /** 绑定车牌用户 0:1-2个 1:3-4个 2:大于等于5个 */
  userMap?: object;
  /** 停车次数统计 0:0～10次 1:11～20次 2:21～30次 3:30～50次 4:50次以上 */
  parkMap?: object;
}
export interface OrderCommentSearchDto {
  phone?: string;
  plateNo?: string;
}
export interface OrderCommentVo {
  orderId?: string;
  /** 车主 */
  phone?: string;
  /** 车牌 */
  plateNo?: string;
  /** 停车场 */
  tccName?: string;
  /** 评价 true 好评 false 差评 */
  type?: boolean;
  /** 评价内容 */
  contents?: string[];
  /** 补充 */
  supplement?: string;
  /** 评价时间 */
  createdAt?: string;
}
export interface CommentChartInner {
  name?: string;
  count?: number;
}
export interface CommentChartVo {
  /** 评价总数 0-好评，1-差评 */
  totalList?: CommentChartInner[];
  /** 差评统计 */
  badList?: CommentChartInner[];
  /** 好评统计 */
  goodList?: CommentChartInner[];
}
export interface MerchantSearchDto {
  tccId?: string;
  libId?: string;
  /** 商户名 */
  merchantName?: string;
  /** 联系人 */
  contactName?: string;
}
export interface MerchantExtraInfo {}
export interface MerchantVo {
  id?: string;
  tccName?: string;
  /** 车库名，逗号连接 */
  libNames?: string;
  /** 商户名 */
  merchantName?: string;
  contactName?: string;
  contactPhone?: string;
  balance?: number;
  /** 电子支付 */
  pay?: boolean;
  couponModelIds?: string[];
  extraInfo?: MerchantExtraInfo;
}
export interface TccMerchant {
  id?: string;
  tccId?: string;
  libIds?: string[];
  merchantName?: string;
  contactPhone?: string;
  contactName?: string;
  balance?: number;
  pay?: boolean;
  couponModelIds?: string[];
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface RechargeVo {
  id?: string;
  /** 商户名 */
  merchantName?: string;
  /** 原始金额 */
  originalMoney?: number;
  /** 支付金额 */
  realMoney?: number;
  createdAt?: string;
}
export interface RechargeChartVo {
  /** 日期/月份 */
  date?: string;
  /** 金额 */
  money?: number;
}
export interface PaymentVo {
  id?: string;
  /** 商户名称 */
  merchantName?: string;
  /** 车牌 */
  plateNo?: string;
  /** 金额 分 */
  money?: number;
  tccName?: string;
  libName?: string;
  createdAt?: string;
  /** 关联订单id */
  linkId?: string;
}
export interface CouponSearchDto {
  tccId?: string;
  /** 商户id */
  merchantId?: string;
  /** 1-商户券 2-车场券 */
  platformType?: number;
  name?: string;
  /** 0-金额 1-时间 2-全免 */
  type?: number;
}
export interface CouponVo {
  /** 优惠券id */
  modelId?: string;
  /** 商户id */
  merchantId?: string;
  /** 商户名称 */
  merchantName?: string;
  /** 停车场名称 */
  tccName?: string;
  /** 优惠券名称 */
  couponName?: string;
  /** 券类型 */
  type?: MsgType;
  /** 优惠券面额 */
  discount?: number;
  /** 发放数量 */
  send?: number;
  /** 有效期  月  0为24小时 */
  period?: number;
}
export interface CouponUseSearchDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  phone?: string;
  plateNo?: string;
  /** 商户id */
  merchantId?: string;
  /** 模板id */
  modelId?: string;
}
export interface CouponUseVo {
  id?: string;
  /** 手机号 */
  phone?: string;
  /** 优惠券来源 */
  origin?: MsgType;
  /** 车牌 */
  plateNo?: string;
  /** 领取时间 */
  createdAt?: string;
  /** 使用时间 */
  usedAt?: string;
  /** 优惠金额 */
  couponMoney?: number;
}
export interface CouponChartVo {
  /** 优惠券名称 */
  name?: string;
  /** 发放数量 */
  send?: number;
  /** 使用量 */
  use?: number;
}
export interface SystemLogSearchDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  name?: string;
  phone?: string;
}
export interface SysLogVo {
  id?: string;
  /** IP地址 */
  ip?: string;
  /** 操作 */
  operation?: string;
  /** 执行方法 */
  method?: string;
  /** 耗费时间/毫秒 */
  costTime?: number;
  /** 操作参数 */
  paramJson?: string;
  /** 操作人 */
  createdUser?: string;
  /** 创建时间 */
  createdAt?: string;
}
export interface SearchPatrolLogDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccId?: string;
  libId?: string;
  plateNo?: string;
  type?: number;
  patrolUser?: string;
}
export interface PatrolLogVo {
  id?: string;
  tccName?: string;
  libName?: string;
  plateNo?: string;
  type?: MsgType;
  patrolUser?: string;
  before?: string;
  after?: string;
  createdAt?: string;
  orderId?: string;
}
export interface SearchImportLogDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  type?: number;
  userName?: string;
}
export interface TccImportReport {
  id?: string;
  tenantId?: string;
  userName?: string;
  result?: string;
  originFile?: string;
  errorFile?: string;
  type?: MsgType;
  createdAt?: string;
}
export interface SearchChannelOpenDto {
  /** 查询开始日期 */
  from?: string;
  /** 查询结束日期 */
  to?: string;
  tccId?: string;
  userName?: string;
}
export interface ChannelOpenLogVo {
  id?: string;
  tccName?: string;
  plateNo?: string;
  pic?: string;
  reason?: string;
  remark?: string;
  userName?: string;
  type?: MsgType;
  createdAt?: string;
  /** 是否是入口 */
  inlet?: boolean;
}
export interface FreeCarSearchDto {
  /** 车场id */
  tccId?: string;
  /** 车库id */
  libId?: string;
  plateNumber?: string;
  /** 查询缴费类型，0-产权车，1-出租车位，2-月租车年，3-白名单 */
  chargeType?: number;
  /** 通行证id */
  passCardId?: string;
  system?: boolean;
}
export interface FreeCarVo {
  id?: string;
  tccId?: string;
  libId?: string;
  /** 停车场 */
  tccName?: string;
  /** 车库 */
  libName?: string;
  /** 主-车牌号 */
  mainPlateNo?: string;
  /** 主-车牌类型 */
  mainPlateType?: MsgType;
  /** 子-车牌号 */
  subPlateNo?: string;
  /** 子-车牌类型 */
  subPlateType?: MsgType;
  /** 开始时间 */
  beginDate?: string;
  /** 到期时间 */
  endDate?: string;
  extraInfo?: ManageExtraInfo;
}
export interface TccPlateManage {
  id?: string;
  passCardId?: string;
  tccId?: string;
  libId?: string;
  mainPlateNo?: string;
  mainPlateType?: MsgType;
  subPlateNo?: string;
  subPlateType?: MsgType;
  beginDate?: string;
  endDate?: string;
  extraInfo?: ManageExtraInfo;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  deleted?: boolean;
}
export interface FinancialVo {
  archivedDate?: string;
  /** 原始收入 */
  originalIncome?: number;
  /** 实际收入 */
  targetIncome?: number;
  /** 优惠金额 */
  discountIncome?: number;
  /** 月租收入 */
  monthlyIncome?: number;
  /** 临停收入 */
  tempIncome?: number;
  /** 微信支付 */
  wechatPay?: number;
  /** 支付宝支付 */
  aliPay?: number;
  /** 现金支付 */
  cashPay?: number;
}
export interface TempFinancialVo {
  archivedDate?: string;
  tccName?: string;
  libName?: string;
  /** 原始收入 */
  originalIncome?: number;
  /** 实际收入 */
  targetIncome?: number;
  /** 优惠金额 */
  discountIncome?: number;
  /** 微信支付 */
  wechatPay?: number;
  /** 微信支付,次数 */
  wechatPayNum?: number;
  /** 支付宝支付 */
  aliPay?: number;
  /** 支付宝支付,次数 */
  aliPayNum?: number;
  /** 现金支付 */
  cashPay?: number;
  /** 现金支付,次数 */
  cashPayNum?: number;
  /** 直接优惠金额 */
  freeMoney?: number;
  /** 直接优惠分钟数 */
  freeMinutes?: number;
}
export interface FinancialChartInner {
  type?: string;
  income?: number;
}
export interface TempFinancialChart {
  wechatPay?: number;
  aliPay?: number;
  cashPay?: number;
  /** 支付类型，0-现金，1-微信，2-支付宝 */
  payType?: FinancialChartInner[];
  /** 列表，key:日期 */
  incomeList?: FinancialChartInner[];
}
export interface CouponFinancialVo {
  date?: string;
  /** 发放数量 */
  sendNum?: number;
  /** 商户发放数量 */
  merchantSendNum?: number;
  /** 第三方发放数量 */
  apiSendNum?: number;
  /** 使用数量 */
  useNum?: number;
  /** 使用的券抵扣的金额 分 */
  useDiscount?: number;
  /** 过期数量 */
  expireNum?: number;
}
export interface FinancialChart {
  /** 收入类型（笔数），0-临停 1-包月 */
  incomeType?: FinancialChartInner[];
  /** 支付类型，0-现金，1-微信，2-支付宝 */
  payType?: FinancialChartInner[];
  /** 列表，key:日期 */
  incomeList?: FinancialChartInner[];
}
export interface IncomeStatistics {
  /** 收入总金额 */
  income?: number;
  /** 收费汇总-微信 */
  wechatPay?: number;
  /** 收费汇总-支付宝 */
  aliPay?: number;
  /** 收费汇总-现金 */
  cashPay?: number;
  /** 周转率 */
  turnoverRate?: number;
  /** 占用率 */
  useRate?: number;
  /** 收入分析-实收金额 */
  realMoney?: number;
  /** 收入分析-未收金额 */
  arrears?: number;
  /** 收入分析-折扣金额 */
  freeMoney?: number;
  /** 共享停车-总金额 */
  shareMoney?: number;
  /** 共享停车-订单总数 */
  shareOrder?: number;
  /** 共享停车-车位总数 */
  sharePlace?: number;
  /** 出车分析-正常次数 */
  outNormalCount?: number;
  /** 出车分析-免费次数 */
  outFreeCount?: number;
  /** 出车分析-异常次数 */
  outWarnCount?: number;
  /** 出车分析-正常金额 */
  outNormalMoney?: number;
  /** 出车分析-免费金额 */
  outFreeMoney?: number;
  /** 出车分析-异常金额 */
  outWarnMoney?: number;
}
export interface InAnalyseVo {
  /** 临停 */
  temp?: number;
  /** 产权 */
  chanquan?: number;
  /** 月租 */
  monthly?: number;
  /** 白名单 */
  white?: number;
  /** 特殊车 */
  special?: number;
  /** 军警 */
  police?: number;
}
export interface SearchCouponModelDto {
  tccId?: string;
  name?: string;
  /** 0-金额 1-时间 2-免费 */
  type?: number;
}
export interface CouponModelVo {
  id?: string;
  /** 优惠券名称 */
  name?: string;
  tccIds?: string[];
  tccNames?: string;
  type?: MsgType;
  /** 优惠信息 */
  discount?: number;
  /** 价格 分 */
  price?: number;
  remark?: string;
  /** 是否开启 */
  enabled?: boolean;
}
export interface CarSearchDto {
  tccId?: string;
  libId?: string;
  plateNo?: string;
  phone?: string;
}
export interface CarVo {
  id?: string;
  tccNames?: string;
  plateNo?: string;
  phone?: string;
  plateType?: MsgType;
  /** 停车次数 */
  total?: number;
  /** 缴纳金额 */
  income?: number;
  createdAt?: string;
}
export interface BlacklistSearchDto {
  tccIds?: string[];
  libIds?: string[];
  plateNo?: string;
}
export interface BlacklistVo {
  id?: string;
  tccName?: string;
  libName?: string;
  tccId?: string;
  libId?: string;
  plateType?: MsgType;
  plateNo?: string;
  remark?: string;
  /** 能否进入 */
  canIn?: boolean;
  /** 能否离开 */
  canOut?: boolean;
}
