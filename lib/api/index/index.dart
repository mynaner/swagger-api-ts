import 'package:dio/dio.dart';
import 'package:image_picker/image_picker.dart';
import 'package:kll_patrol/tools/dio_util/dio_util.dart'; 



              

class IPage<T> {
    int? pages;
    List<T>? records;
    int? total;
    int? size;
    int? current;
  
    IPage({this.pages, this.records, this.total, this.size, this.current});
  
    IPage.fromJson(
        Map<String, dynamic> json, Function(Map<String, dynamic>) fromJsonModel) {
      pages = json['pages'];
      if (json['records'] != null) {
        records = <T>[];
        json['records'].forEach((v) {
          records?.add(fromJsonModel(v));
        });
      }
      total = json['total'];
      size = json['size'];
      current = json['current'];
    }
  }




  // 通用type
  class MsgType {
    String? node;
    int? type;
    bool? status;
    bool? free;
    bool? ppl;
    bool? special;
    int? value;
  
    MsgType(
        {this.node, this.type, this.free, this.value, this.ppl, this.special});
  
    MsgType.fromJson(Map<String, dynamic> json) {
      node = json['node'];
  
      if (json['type'] is int) {
        type = json['type'];
      }
      if (json['type'] is bool) {
        status = json['type'];
      }
    }
  
    Map<String, dynamic> toJson() {
      final Map<String, dynamic> data = <String, dynamic>{};
      data['node'] = node;
      data['type'] = type ?? status;
      return data;
    }
  }
  

              
  /// 工作记录列表-分页
  Future<IPage<WorkIndexRecord>?> getWorkRecords ({ required SearchWorkRecordDto params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<WorkIndexRecord>>("/work-records",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<WorkIndexRecord>.fromJson(data,WorkIndexRecord.fromJson);
  },
       
        );
return res.result ;
  }

  /// 提交记录
  Future<bool> postWorkRecords ({ required WorkRecordDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/work-records",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 处理记录
  Future<bool> postWorkRecordsProcess ({ required WorkRecordReportProcessDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/work-records/process",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 打卡
  Future<bool> postSign ({ required SignDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/sign",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 上传拍照文件
  Future<String?> postSignUpload ({ XFile? file}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      
      
       
    });
    
    var res = await DioUtil.instance.request<String>("/sign/upload",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.result ;
  }

  /// 情况上报
  Future<bool> postReports ({ List<XFile>? files,required ReportMsgDto data}) async {
    
    
      List<MultipartFile> fd = [];

      for (var element in files ?? []) {
        fd.add(await MultipartFile.fromFile(element.path));
      }
      
    FormData formData = FormData.fromMap({ 
      "files":fd,

      
      
      ...data.toJson() 
    });
    
    var res = await DioUtil.instance.request<void>("/reports",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.success ;
  }

  /// 清理无车显红
  Future<bool> postReportsClearRed ({ List<XFile>? files,required ClearRedDto data}) async {
    
    
      List<MultipartFile> fd = [];

      for (var element in files ?? []) {
        fd.add(await MultipartFile.fromFile(element.path));
      }
      
    FormData formData = FormData.fromMap({ 
      "files":fd,

      
      
      ...data.toJson() 
    });
    
    var res = await DioUtil.instance.request<void>("/reports/clear-red",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.success ;
  }

  /// 修改密码
  Future<bool> postProfilePassword ({ required ChangePasswordDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/profile/password",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 退出登录
  Future<bool> postProfileLogout () async {
    
    var res = await DioUtil.instance.request<void>("/profile/logout",
        method: DioMethod.post ,params:{} ,
        
       
        );
return res.success ;
  }

  /// 空接口仅做权限校验
  Future<bool> postProfileIsValid () async {
    
    var res = await DioUtil.instance.request<void>("/profile/is-valid",
        method: DioMethod.post ,params:{} ,
        
       
        );
return res.success ;
  }

  /// 处理正在停车的开始时间
  Future<bool> postProcessTime ({ required PatrolOnlineTimeChangeDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/process/time",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 特殊车牌审核
  Future<bool> postProcessSpecialCar ({ required PatrolPdaSpecialCar data}) async {
    
    var res = await DioUtil.instance.request<void>("/process/specialCar",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 特殊车牌审核拍照
  Future<String?> postProcessSpecialCarPhoto ({ String? imei,XFile? file}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      "imei":imei,
      
       
    });
    
    var res = await DioUtil.instance.request<String>("/process/specialCarPhoto",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.result ;
  }

  /// 处理无车显红
  Future<bool> postProcessRed ({ required PatrolProcessRedDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/process/red",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 修改正在停车的车牌号
  Future<bool> postProcessPlateNumber ({ required PatrolOnlinePlateNumberChangeDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/process/plateNumber",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 结束停车
  Future<bool> postProcessEnd ({ required PatrolEndOrder data}) async {
    
    var res = await DioUtil.instance.request<void>("/process/end",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 拍照
  Future<PlateLicenseVo?> postPplsTakePhoto ({ XFile? file,required TakePhotoDto data}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      
      
      ...data.toJson() 
    });
    
    var res = await DioUtil.instance.request<PlateLicenseVo>("/ppls/takePhoto",
        method: DioMethod.post ,params:{} ,data: formData,
         fromJson: (data) {
     return PlateLicenseVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 补拍照片
  Future<String?> postPplsTakeExtraPic ({ required ExtraPicturesDto params,XFile? file}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      
      ...params.toJson()
       
    });
    
    var res = await DioUtil.instance.request<String>("/ppls/take-extra-pic",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.result ;
  }

  /// 完成补拍
  Future<bool> postPplsFinishTakeExtraPic ({ required DownExtraPicturesDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/ppls/finish-take-extra-pic",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 绑定
  Future<BindResult?> postPplsBind ({ required BindParkDto data}) async {
    
    var res = await DioUtil.instance.request<BindResult>("/ppls/bind",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
         fromJson: (data) {
     return BindResult.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 根据多个账单id,生成威富通支付宝二维码让用户扫码合并支付,返回订单ID
  Future<PayResult?> postPdaPay ({ required PdaPayDto data}) async {
    
    var res = await DioUtil.instance.request<PayResult>("/pda/pay",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
         fromJson: (data) {
     return PayResult.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 车牌识别
  Future<PlateLicenseVo?> postPdaOnlineTakePhoto ({ XFile? file,required PdaTakePhotoDto data}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      
      
      ...data.toJson() 
    });
    
    var res = await DioUtil.instance.request<PlateLicenseVo>("/pda/online/take-photo",
        method: DioMethod.post ,params:{} ,data: formData,
         fromJson: (data) {
     return PlateLicenseVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 补拍照片
  Future<bool> postPdaOnlineTakeExtraPic ({ List<XFile>? files,required TakeExtraPicturesDto data}) async {
    
    
      List<MultipartFile> fd = [];

      for (var element in files ?? []) {
        fd.add(await MultipartFile.fromFile(element.path));
      }
      
    FormData formData = FormData.fromMap({ 
      "files":fd,

      
      
      ...data.toJson() 
    });
    
    var res = await DioUtil.instance.request<void>("/pda/online/take-extra-pic",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.success ;
  }

  /// 停车
  Future<String?> postPdaOnlineParkCar ({ required ParkCarDto data}) async {
    
    var res = await DioUtil.instance.request<String>("/pda/online/park-car",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.result ;
  }

  /// 结束停车,并展示收费信息
  Future<EndOrder?> postPdaDownPlaceId ({ String? placeId}) async {
    
    var res = await DioUtil.instance.request<EndOrder>("/pda/down/$placeId",
        method: DioMethod.post ,params:{"placeId":placeId} ,
         fromJson: (data) {
     return EndOrder.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 二维码交账
  Future<PayResult?> postPdaAccountsPayAccountId ({ String? accountId}) async {
    
    var res = await DioUtil.instance.request<PayResult>("/pda/accounts/pay/$accountId",
        method: DioMethod.post ,params:{"accountId":accountId} ,
         fromJson: (data) {
     return PayResult.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 审核
  Future<bool> postMessagesSpecialCarApplyProcess ({ required SpecialCarApplyProcessDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/messages/special-car-apply/process",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 拍照完成
  Future<bool> postMessagesDeviceLowBatteryProcess ({ String? id,XFile? file}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      "id":id,
      
       
    });
    
    var res = await DioUtil.instance.request<void>("/messages/device-low-battery/process",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.success ;
  }

  /// 完成处理
  Future<bool> postMessagesDeviceFaultProcess ({ String? id,String? processResult,bool? wrong,XFile? file}) async {
    
    
      MultipartFile? fd;
      if(file!=null){
        fd = await MultipartFile.fromFile(file.path);
        } 
      
    FormData formData = FormData.fromMap({ 
      "file":fd,

      "id":id,"processResult":processResult,"wrong":wrong,
      
       
    });
    
    var res = await DioUtil.instance.request<void>("/messages/device-fault/process",
        method: DioMethod.post ,params:{} ,data: formData,
        
       
        );
return res.success ;
  }

  /// 委托处理
  Future<bool> postMessagesDeviceFaultCheck ({ String? id,String? checkerId}) async {
    
    var res = await DioUtil.instance.request<void>("/messages/device-fault/check",
        method: DioMethod.post ,params:{"id":id,"checkerId":checkerId} ,
        
       
        );
return res.success ;
  }

  /// 复位
  Future<bool> postManagePplsPplIdReset ({ String? pplId}) async {
    
    var res = await DioUtil.instance.request<void>("/manage/ppls/$pplId/reset",
        method: DioMethod.post ,params:{"pplId":pplId} ,
        
       
        );
return res.success ;
  }

  /// 升锁
  Future<bool> postManagePplsPplIdEmlock ({ String? pplId,required PplLockOpDto data}) async {
    
    var res = await DioUtil.instance.request<void>("/manage/ppls/$pplId/emlock",
        method: DioMethod.post ,params:{"pplId":pplId} ,data:data.toJson(),
        
       
        );
return res.success ;
  }

  /// 降锁
  Future<bool> postManagePplsPplIdDownLock ({ String? pplId}) async {
    
    var res = await DioUtil.instance.request<void>("/manage/ppls/$pplId/down-lock",
        method: DioMethod.post ,params:{"pplId":pplId} ,
        
       
        );
return res.success ;
  }

  /// 登录
  Future<PatrolLoginResult?> postLogin ({ required PatrolLoginDto data}) async {
    
    var res = await DioUtil.instance.request<PatrolLoginResult>("/login",
        method: DioMethod.post ,params:{} ,data:data.toJson(),
         fromJson: (data) {
     return PatrolLoginResult.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 查看工作记录-上面标签数据
  Future<List<WorkIndexTag>> getWorkRecordsTop ({ required TimeRangeDate params,}) async {
    
    var res = await DioUtil.instance.request<List<WorkIndexTag>>("/work-records/top",
        method: DioMethod.get ,params:{...params.toJson()} ,
         fromJson: (data) {
      
              List<WorkIndexTag> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(WorkIndexTag.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 扫码查询基础信息和工作记录标签
  Future<WorkScanVo?> getWorkRecordsScan ({ String? number,String? placeId}) async {
    
    var res = await DioUtil.instance.request<WorkScanVo>("/work-records/scan",
        method: DioMethod.get ,params:{"number":number,"placeId":placeId} ,
         fromJson: (data) {
     return WorkScanVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 待处理数据数
  Future<int?> getWorkRecordsPendingNum () async {
    
    var res = await DioUtil.instance.request<int>("/work-records/pendingNum",
        method: DioMethod.get ,params:{} ,
        
       
        );
return res.result ;
  }

  /// 查询工作记录详情
  Future<WorkRecord?> getWorkRecordsDetail ({ String? id}) async {
    
    var res = await DioUtil.instance.request<WorkRecord>("/work-records/detail",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return WorkRecord.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 工作记录列表(按点位分组)-分页
  Future<IPage<WorkIndexLotVo>?> getWorkRecordsByLot ({ int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<WorkIndexLotVo>>("/work-records/by-lot",
        method: DioMethod.get ,params:{"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<WorkIndexLotVo>.fromJson(data,WorkIndexLotVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 获得最新的版本
  Future<PatrolApkVo?> getVersion () async {
    
    var res = await DioUtil.instance.request<PatrolApkVo>("/version",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
     return PatrolApkVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 获取登录验证码
  Future<bool> getSms ({ String? phone}) async {
    
    var res = await DioUtil.instance.request<void>("/sms",
        method: DioMethod.get ,params:{"phone":phone} ,
        
       
        );
return res.success ;
  }

  /// 实时打卡信息
  Future<SignStatusResult?> getSignStatus ({ required SignStatusDto params,}) async {
    
    var res = await DioUtil.instance.request<SignStatusResult>("/sign/status",
        method: DioMethod.get ,params:{...params.toJson()} ,
         fromJson: (data) {
     return SignStatusResult.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 月份异常打卡记录
  Future<List<String>> getSignRecords ({ String? month}) async {
    
    var res = await DioUtil.instance.request<List<String>>("/sign/records",
        method: DioMethod.get ,params:{"month":month} ,
         fromJson: (data) {
     
          return data?.cast<String>();
         
  },
       
        );
return res.result ??[];
  }

  /// 某日打卡记录
  Future<List<SignItem>> getSignRecord ({ String? date}) async {
    
    var res = await DioUtil.instance.request<List<SignItem>>("/sign/record",
        method: DioMethod.get ,params:{"date":date} ,
         fromJson: (data) {
      
              List<SignItem> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(SignItem.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 根据锁号搜索-地锁专用
  Future<List<SearchNumberVo>> getSearchNumber ({ String? number}) async {
    
    var res = await DioUtil.instance.request<List<SearchNumberVo>>("/search-number",
        method: DioMethod.get ,params:{"number":number} ,
         fromJson: (data) {
      
              List<SearchNumberVo> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(SearchNumberVo.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 根据上报ID获取上报信息
  Future<ReportItemMsg?> getReportsId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<ReportItemMsg>("/reports/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return ReportItemMsg.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 拒绝处理上报的问题
  Future<bool> getReportsIdReject ({ String? id}) async {
    
    var res = await DioUtil.instance.request<void>("/reports/$id/reject",
        method: DioMethod.get ,params:{"id":id} ,
        
       
        );
return res.success ;
  }

  /// 情况上报列表
  Future<IPage<ReportMsgVo>?> getReportsList ({ required ReportPageDto params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<ReportMsgVo>>("/reports/list",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<ReportMsgVo>.fromJson(data,ReportMsgVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 获取月度绩效
  Future<PdaPerformanceVo?> getPdaPerformance ({ int? year,int? month}) async {
    
    var res = await DioUtil.instance.request<PdaPerformanceVo>("/pda/performance",
        method: DioMethod.get ,params:{"year":year,"month":month} ,
         fromJson: (data) {
     return PdaPerformanceVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 扣分详情
  Future<PdaPerformanceScore?> getPdaPerformanceScoreId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<PdaPerformanceScore>("/pda/performance/score/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return PdaPerformanceScore.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 获取考核规则
  Future<String?> getPdaPerformanceRule () async {
    
    var res = await DioUtil.instance.request<String>("/pda/performance/rule",
        method: DioMethod.get ,params:{} ,
        
       
        );
return res.result ;
  }

  /// 获取考核详情
  Future<List<PerformanceItemVo>> getPdaPerformanceDetail ({ int? year,int? month,int? type}) async {
    
    var res = await DioUtil.instance.request<List<PerformanceItemVo>>("/pda/performance/detail",
        method: DioMethod.get ,params:{"year":year,"month":month,"type":type} ,
         fromJson: (data) {
      
              List<PerformanceItemVo> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(PerformanceItemVo.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 根据停车ID查询停车信息
  Future<RoadSideOrder?> getPdaParkingCarId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<RoadSideOrder>("/pda/parkingCar/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return RoadSideOrder.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 获取所有车位信息
  Future<List<OnlinePlaceItems>> getPdaOnlineItems () async {
    
    var res = await DioUtil.instance.request<List<OnlinePlaceItems>>("/pda/online/items",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
      
              List<OnlinePlaceItems> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(OnlinePlaceItems.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 获取某车位的停车信息
  Future<PdaParkingCarVo?> getPdaOnlineItemsPlaceId ({ String? placeId}) async {
    
    var res = await DioUtil.instance.request<PdaParkingCarVo>("/pda/online/items/$placeId",
        method: DioMethod.get ,params:{"placeId":placeId} ,
         fromJson: (data) {
     return PdaParkingCarVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 用订单ID查询是否已收到钱
  Future<bool?> getPdaIsPaidPayId ({ String? payId}) async {
    
    var res = await DioUtil.instance.request<bool>("/pda/is-paid/$payId",
        method: DioMethod.get ,params:{"payId":payId} ,
        
       
        );
return res.result ;
  }

  /// 收入统计
  Future<PdaIncomeVo?> getPdaIncome ({ String? date}) async {
    
    var res = await DioUtil.instance.request<PdaIncomeVo>("/pda/income",
        method: DioMethod.get ,params:{"date":date} ,
         fromJson: (data) {
     return PdaIncomeVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 代收订单(含日期)
  Future<IPage<RoadSideOrder>?> getPdaIncomeTakeOrders ({ required PdaPersonalSearchDto params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<RoadSideOrder>>("/pda/income/take-orders",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<RoadSideOrder>.fromJson(data,RoadSideOrder.fromJson);
  },
       
        );
return res.result ;
  }

  /// 点位订单(含日期)
  Future<IPage<RoadSideOrder>?> getPdaIncomeOrders ({ required PdaIncomeSearchDto params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<RoadSideOrder>>("/pda/income/orders",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<RoadSideOrder>.fromJson(data,RoadSideOrder.fromJson);
  },
       
        );
return res.result ;
  }

  /// 现金交账列表-滑动分页
  Future<IPage<PdaUserAccountsVo>?> getPdaAccounts ({ int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<PdaUserAccountsVo>>("/pda/accounts",
        method: DioMethod.get ,params:{"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<PdaUserAccountsVo>.fromJson(data,PdaUserAccountsVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 现金交账详情列表-滑动分页
  Future<IPage<CollectionOrderVo>?> getPdaAccountsAccountId ({ required PdaAccountDto params,String? accountId,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<CollectionOrderVo>>("/pda/accounts/$accountId",
        method: DioMethod.get ,params:{...params.toJson(),"accountId":accountId,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<CollectionOrderVo>.fromJson(data,CollectionOrderVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 待交账金额
  Future<int?> getPdaAccountsUn () async {
    
    var res = await DioUtil.instance.request<int>("/pda/accounts/un",
        method: DioMethod.get ,params:{} ,
        
       
        );
return res.result ;
  }

  /// 支付记录
  Future<IPage<PdaUaItemVo>?> getPdaAccountsPaid ({ int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<PdaUaItemVo>>("/pda/accounts/paid",
        method: DioMethod.get ,params:{"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<PdaUaItemVo>.fromJson(data,PdaUaItemVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查看点位账单
  Future<IPage<RoadSideOrder>?> getOrders ({ required PatrolLotOrder params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<RoadSideOrder>>("/orders",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<RoadSideOrder>.fromJson(data,RoadSideOrder.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查看某账单详情
  Future<RoadSideOrder?> getOrdersId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<RoadSideOrder>("/orders/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return RoadSideOrder.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 查看某订单（或停车中）补拍图片列表
  Future<List<String>> getOrdersIdPictures ({ String? id}) async {
    
    var res = await DioUtil.instance.request<List<String>>("/orders/$id/pictures",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     
          return data?.cast<String>();
         
  },
       
        );
return res.result ??[];
  }

  /// 查询车牌欠费合计 - 用于提示巡查注意高欠费车牌
  Future<PatrolUnpaidCarInfo?> getOrdersUnpaid ({ String? carNumber}) async {
    
    var res = await DioUtil.instance.request<PatrolUnpaidCarInfo>("/orders/unpaid",
        method: DioMethod.get ,params:{"carNumber":carNumber} ,
         fromJson: (data) {
     return PatrolUnpaidCarInfo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 查询车辆欠费订单
  Future<List<RoadSideOrder>> getOrdersUnPaid ({ String? carNumber}) async {
    
    var res = await DioUtil.instance.request<List<RoadSideOrder>>("/orders/unPaid",
        method: DioMethod.get ,params:{"carNumber":carNumber} ,
         fromJson: (data) {
      
              List<RoadSideOrder> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(RoadSideOrder.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 查询收��的欠费-未开发
  Future<List<RoadSideOrder>> getOrdersTakeOver ({ String? carNumber}) async {
    
    var res = await DioUtil.instance.request<List<RoadSideOrder>>("/orders/take-over",
        method: DioMethod.get ,params:{"carNumber":carNumber} ,
         fromJson: (data) {
      
              List<RoadSideOrder> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(RoadSideOrder.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 首页金额和消息数
  Future<PatrolMessage?> getMsg () async {
    
    var res = await DioUtil.instance.request<PatrolMessage>("/msg",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
     return PatrolMessage.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 分页查询
  Future<IPage<SpecialCarMsgVo>?> getMessagesSpecialCarApply ({ bool? status,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<SpecialCarMsgVo>>("/messages/special-car-apply",
        method: DioMethod.get ,params:{"status":status,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<SpecialCarMsgVo>.fromJson(data,SpecialCarMsgVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查询具体某个申请
  Future<SpecialCarItemMsgVo?> getMessagesSpecialCarApplyId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<SpecialCarItemMsgVo>("/messages/special-car-apply/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
     return SpecialCarItemMsgVo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 分页查询审核信息
  Future<IPage<PatrolCarApplyVo>?> getMessagesHandicappedCarApply ({ bool? finished,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<PatrolCarApplyVo>>("/messages/handicapped-car-apply",
        method: DioMethod.get ,params:{"finished":finished,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<PatrolCarApplyVo>.fromJson(data,PatrolCarApplyVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 处理审核
  Future<bool> getMessagesHandicappedCarApplyId ({ String? id,int? status}) async {
    
    var res = await DioUtil.instance.request<void>("/messages/handicapped-car-apply/$id",
        method: DioMethod.get ,params:{"id":id,"status":status} ,
        
       
        );
return res.success ;
  }

  /// 设备下线通知-分页
  Future<IPage<DeviceOfflineVo>?> getMessagesDeviceOffline ({ String? id,int? type,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<DeviceOfflineVo>>("/messages/device-offline",
        method: DioMethod.get ,params:{"id":id,"type":type,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<DeviceOfflineVo>.fromJson(data,DeviceOfflineVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 设备下线通知-外层分点位统计
  Future<List<DeviceOfflineCount>> getMessagesDeviceOfflineCount () async {
    
    var res = await DioUtil.instance.request<List<DeviceOfflineCount>>("/messages/device-offline/count",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
      
              List<DeviceOfflineCount> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(DeviceOfflineCount.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 查看未处理-外层
  Future<List<DeviceLowBatteryCountVo>> getMessagesDeviceLowBatteryUn () async {
    
    var res = await DioUtil.instance.request<List<DeviceLowBatteryCountVo>>("/messages/device-low-battery/un",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
      
              List<DeviceLowBatteryCountVo> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(DeviceLowBatteryCountVo.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 查看某点位未处理-详情-无分页
  Future<List<DeviceVoltageMsg>> getMessagesDeviceLowBatteryUnId ({ String? id}) async {
    
    var res = await DioUtil.instance.request<List<DeviceVoltageMsg>>("/messages/device-low-battery/un/$id",
        method: DioMethod.get ,params:{"id":id} ,
         fromJson: (data) {
      
              List<DeviceVoltageMsg> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(DeviceVoltageMsg.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 已处理-带分页
  Future<IPage<DeviceVoltageMsg>?> getMessagesDeviceLowBatteryFinished ({ int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<DeviceVoltageMsg>>("/messages/device-low-battery/finished",
        method: DioMethod.get ,params:{"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<DeviceVoltageMsg>.fromJson(data,DeviceVoltageMsg.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查看故障列表-带分页
  Future<IPage<DeviceFaultMsgVo>?> getMessagesDeviceFault ({ required DeviceFaultSearchDto params,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<DeviceFaultMsgVo>>("/messages/device-fault",
        method: DioMethod.get ,params:{...params.toJson(),"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<DeviceFaultMsgVo>.fromJson(data,DeviceFaultMsgVo.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查看可委托处理人
  Future<List<PatrolUser>> getMessagesDeviceFaultCheckUsers () async {
    
    var res = await DioUtil.instance.request<List<PatrolUser>>("/messages/device-fault/check-users",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
      
              List<PatrolUser> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(PatrolUser.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 地锁最近3笔支付订单
  Future<List<PayOrder>> getManagePplsPplIdOrder ({ String? pplId}) async {
    
    var res = await DioUtil.instance.request<List<PayOrder>>("/manage/ppls/$pplId/order",
        method: DioMethod.get ,params:{"pplId":pplId} ,
         fromJson: (data) {
      
              List<PayOrder> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(PayOrder.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 地锁消息
  Future<List<PplLog>> getManagePplsMsg ({ required PplMsgDto params,}) async {
    
    var res = await DioUtil.instance.request<List<PplLog>>("/manage/ppls/msg",
        method: DioMethod.get ,params:{...params.toJson()} ,
         fromJson: (data) {
      
              List<PplLog> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(PplLog.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 基础信息
  Future<ManageInfo?> getManageInfo ({ String? placeId}) async {
    
    var res = await DioUtil.instance.request<ManageInfo>("/manage/info",
        method: DioMethod.get ,params:{"placeId":placeId} ,
         fromJson: (data) {
     return ManageInfo.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 查看某个地磁的停车数据
  Future<IPage<GeomLog>?> getManageGeomsGeomIdLog ({ String? geomId,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<GeomLog>>("/manage/geoms/$geomId/log",
        method: DioMethod.get ,params:{"geomId":geomId,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<GeomLog>.fromJson(data,GeomLog.fromJson);
  },
       
        );
return res.result ;
  }

  /// 查看某个地磁的心跳数据
  Future<IPage<GeomHeart>?> getManageGeomsGeomIdHeartbeat ({ String? geomId,int? pageNum,int? pageSize}) async {
    
    var res = await DioUtil.instance.request<IPage<GeomHeart>>("/manage/geoms/$geomId/heartbeat",
        method: DioMethod.get ,params:{"geomId":geomId,"pageNum":pageNum,"pageSize":pageSize} ,
         fromJson: (data) {
     return IPage<GeomHeart>.fromJson(data,GeomHeart.fromJson);
  },
       
        );
return res.result ;
  }

  /// 顶部基础信息
  Future<LotInfoTop?> getLotsLotIdTop ({ String? lotId}) async {
    
    var res = await DioUtil.instance.request<LotInfoTop>("/lots/$lotId/top",
        method: DioMethod.get ,params:{"lotId":lotId} ,
         fromJson: (data) {
     return LotInfoTop.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 获取某个点位实时车位信息
  Future<List<LotItemPlaces>> getLotsLotIdPlaces ({ String? lotId}) async {
    
    var res = await DioUtil.instance.request<List<LotItemPlaces>>("/lots/$lotId/places",
        method: DioMethod.get ,params:{"lotId":lotId} ,
         fromJson: (data) {
      
              List<LotItemPlaces> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(LotItemPlaces.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 获取某个点位的收入
  Future<PatrolIncomeLot?> getLotsLotIdIncome ({ required LotIncomeDto params,String? lotId}) async {
    
    var res = await DioUtil.instance.request<PatrolIncomeLot>("/lots/$lotId/income",
        method: DioMethod.get ,params:{...params.toJson(),"lotId":lotId} ,
         fromJson: (data) {
     return PatrolIncomeLot.fromJson(data);
  },
       
        );
return res.result ;
  }

  /// 首页点位信息
  Future<List<IndexLot>> getIndex () async {
    
    var res = await DioUtil.instance.request<List<IndexLot>>("/index",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
      
              List<IndexLot> list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(IndexLot.fromJson(item));
                }
              }
              return list;
            
  },
       
        );
return res.result ??[];
  }

  /// 巡查总收入详情和明细详情
  Future<PatrolIncome?> getIncome () async {
    
    var res = await DioUtil.instance.request<PatrolIncome>("/income",
        method: DioMethod.get ,params:{} ,
         fromJson: (data) {
     return PatrolIncome.fromJson(data);
  },
       
        );
return res.result ;
  }
 
    class WorkRecordDto{
     /// 设备ID 
 String? deviceId;
 /// 记录原因 
 List<String>? tagIds;
 /// 图片 
 List<String>? pictures;
 /// 备注 
 String? remark;
 /// 记录类型，0-工作记录，1-记录上报 
 int? recordType;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['deviceId'] = deviceId;
data['tagIds'] = tagIds;
data['pictures'] = pictures;
data['remark'] = remark;
data['recordType'] = recordType; 
        return data;
      }

      WorkRecordDto(
        { 
          this.deviceId,
this.tagIds,
this.pictures,
this.remark,
this.recordType});



       

      WorkRecordDto.fromJson(Map<String, dynamic> json) {

        deviceId=json['deviceId'];
tagIds=json['tagIds']?.cast<String>();
pictures=json['pictures']?.cast<String>();
remark=json['remark'];
recordType=json['recordType'];
         
      }

    } 
    class WorkRecordReportProcessDto{
     /// 处理结果，1-成功，0-失败 
 int? status;
 /// 图片 
 List<String>? pictures;
 /// 备注 
 String? remark;
 /// 工作记录id 
 String? recordId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['status'] = status;
data['pictures'] = pictures;
data['remark'] = remark;
data['recordId'] = recordId; 
        return data;
      }

      WorkRecordReportProcessDto(
        { 
          this.status,
this.pictures,
this.remark,
this.recordId});



       

      WorkRecordReportProcessDto.fromJson(Map<String, dynamic> json) {

        status=json['status'];
pictures=json['pictures']?.cast<String>();
remark=json['remark'];
recordId=json['recordId'];
         
      }

    } 
    class SignDto{
     /// 0上班，1下班 
 int? type;
 /// 拍照的地址 
 String? url;
 /// 外勤打卡原因 
 String? reason;
 /// 实际地址 
 String? address;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['type'] = type;
data['url'] = url;
data['reason'] = reason;
data['address'] = address; 
        return data;
      }

      SignDto(
        { 
          this.type,
this.url,
this.reason,
this.address});



       

      SignDto.fromJson(Map<String, dynamic> json) {

        type=json['type'];
url=json['url'];
reason=json['reason'];
address=json['address'];
         
      }

    } 
    class ReportMsgDto{
     /// 上报类型 
 int? msgType;
  String? msg;
 /// 上报停车位 
 String? placeNum;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['msgType'] = msgType;
data['msg'] = msg;
data['placeNum'] = placeNum; 
        return data;
      }

      ReportMsgDto(
        { 
          this.msgType,
this.msg,
this.placeNum});



       

      ReportMsgDto.fromJson(Map<String, dynamic> json) {

        msgType=json['msgType'];
msg=json['msg'];
placeNum=json['placeNum'];
         
      }

    } 
    class ClearRedDto{
     /// 停车位ID 
 String? placeId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['placeId'] = placeId; 
        return data;
      }

      ClearRedDto(
        { 
          this.placeId});



       

      ClearRedDto.fromJson(Map<String, dynamic> json) {

        placeId=json['placeId'];
         
      }

    } 
    class ChangePasswordDto{
     /// 原密码 
 String? passWord;
 /// 新密码 
 String? newPassWord;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['passWord'] = passWord;
data['newPassWord'] = newPassWord; 
        return data;
      }

      ChangePasswordDto(
        { 
          this.passWord,
this.newPassWord});



       

      ChangePasswordDto.fromJson(Map<String, dynamic> json) {

        passWord=json['passWord'];
newPassWord=json['newPassWord'];
         
      }

    } 
    class PatrolOnlineTimeChangeDto{
      String? reportId;
  String? dateTime;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['reportId'] = reportId;
data['dateTime'] = dateTime; 
        return data;
      }

      PatrolOnlineTimeChangeDto(
        { 
          this.reportId,
this.dateTime});



       

      PatrolOnlineTimeChangeDto.fromJson(Map<String, dynamic> json) {

        reportId=json['reportId'];
dateTime=json['dateTime'];
         
      }

    } 
    class PatrolPdaSpecialCar{
      String? reportId;
 /// 现场照片 
 String? fileName;
 /// 审核结果 -1驳回 1通过 
 int? pass;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['reportId'] = reportId;
data['fileName'] = fileName;
data['pass'] = pass; 
        return data;
      }

      PatrolPdaSpecialCar(
        { 
          this.reportId,
this.fileName,
this.pass});



       

      PatrolPdaSpecialCar.fromJson(Map<String, dynamic> json) {

        reportId=json['reportId'];
fileName=json['fileName'];
pass=json['pass'];
         
      }

    } 
    class PatrolProcessRedDto{
      String? reportId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['reportId'] = reportId; 
        return data;
      }

      PatrolProcessRedDto(
        { 
          this.reportId});



       

      PatrolProcessRedDto.fromJson(Map<String, dynamic> json) {

        reportId=json['reportId'];
         
      }

    } 
    class PatrolOnlinePlateNumberChangeDto{
      String? reportId;
  String? plateNumber;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['reportId'] = reportId;
data['plateNumber'] = plateNumber; 
        return data;
      }

      PatrolOnlinePlateNumberChangeDto(
        { 
          this.reportId,
this.plateNumber});



       

      PatrolOnlinePlateNumberChangeDto.fromJson(Map<String, dynamic> json) {

        reportId=json['reportId'];
plateNumber=json['plateNumber'];
         
      }

    } 
    class PatrolEndOrder{
     /// 车位ID-必须 
 String? placeId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['placeId'] = placeId; 
        return data;
      }

      PatrolEndOrder(
        { 
          this.placeId});



       

      PatrolEndOrder.fromJson(Map<String, dynamic> json) {

        placeId=json['placeId'];
         
      }

    } 
    class TakePhotoDto{
     /// 正在停车ID 
 String? id;
 /// 设备编号 
 String? imei;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['imei'] = imei; 
        return data;
      }

      TakePhotoDto(
        { 
          this.id,
this.imei});



       

      TakePhotoDto.fromJson(Map<String, dynamic> json) {

        id=json['id'];
imei=json['imei'];
         
      }

    } 
    class PlateLicenseVo{
     /// 车牌号码 
 String? carNumber;
 /// 照片文件 
 String? fileName;
 /// 缴费类型 
 MsgType? chargeType;
 /// 特殊车牌 
 bool? special;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['carNumber'] = carNumber;
data['fileName'] = fileName;
data['chargeType'] =  chargeType?.toJson();
data['special'] = special; 
        return data;
      }

      PlateLicenseVo(
        { 
          this.carNumber,
this.fileName,
this.chargeType,
this.special});



       

      PlateLicenseVo.fromJson(Map<String, dynamic> json) {

        carNumber=json['carNumber'];
fileName=json['fileName'];

            if (json['chargeType'] != null) {
              chargeType = MsgType.fromJson(json['chargeType']);
            }
special=json['special'];
         
      }

    } 
    class ExtraPicturesDto{
      String? id;
  String? imei;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['imei'] = imei; 
        return data;
      }

      ExtraPicturesDto(
        { 
          this.id,
this.imei});



       

      ExtraPicturesDto.fromJson(Map<String, dynamic> json) {

        id=json['id'];
imei=json['imei'];
         
      }

    } 
    class DownExtraPicturesDto{
     /// 停车ID 
 String? id;
  List<String>? urls;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['urls'] = urls; 
        return data;
      }

      DownExtraPicturesDto(
        { 
          this.id,
this.urls});



       

      DownExtraPicturesDto.fromJson(Map<String, dynamic> json) {

        id=json['id'];
urls=json['urls']?.cast<String>();
         
      }

    } 
    class BindParkDto{
      String? parkingCarId;
 /// 车牌号码 
 String? carNumber;
 /// 照片文件 
 String? fileName;
 /// 缴费类型 
 int? chargeType;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['parkingCarId'] = parkingCarId;
data['carNumber'] = carNumber;
data['fileName'] = fileName;
data['chargeType'] = chargeType; 
        return data;
      }

      BindParkDto(
        { 
          this.parkingCarId,
this.carNumber,
this.fileName,
this.chargeType});



       

      BindParkDto.fromJson(Map<String, dynamic> json) {

        parkingCarId=json['parkingCarId'];
carNumber=json['carNumber'];
fileName=json['fileName'];
chargeType=json['chargeType'];
         
      }

    } 
    class BindResult{
     /// 是否有欠费 
 bool? overDue;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['overDue'] = overDue; 
        return data;
      }

      BindResult(
        { 
          this.overDue});



       

      BindResult.fromJson(Map<String, dynamic> json) {

        overDue=json['overDue'];
         
      }

    } 
    class PdaPayDto{
     /// 来源,0:微信小程序,1:支付宝小程序,2:安卓app 
 int? origin;
 /// 支付方式,5:现金,6:余额,7:微信,8:支付宝 
 int? type;
 /// 账单ID集合 
 List<String>? payOrderIds;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['origin'] = origin;
data['type'] = type;
data['payOrderIds'] = payOrderIds; 
        return data;
      }

      PdaPayDto(
        { 
          this.origin,
this.type,
this.payOrderIds});



       

      PdaPayDto.fromJson(Map<String, dynamic> json) {

        origin=json['origin'];
type=json['type'];
payOrderIds=json['payOrderIds']?.cast<String>();
         
      }

    } 
    class PayResult{
     /// 消息体,不同支付类型下内容不一样 
 String? body;
 /// 支付ID，可用来判断是否支付完成 
 String? payId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['body'] = body;
data['payId'] = payId; 
        return data;
      }

      PayResult(
        { 
          this.body,
this.payId});



       

      PayResult.fromJson(Map<String, dynamic> json) {

        body=json['body'];
payId=json['payId'];
         
      }

    } 
    class PdaTakePhotoDto{
     /// 车位号 
 String? placeNum;
 /// 设备编号 
 String? imei;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['placeNum'] = placeNum;
data['imei'] = imei; 
        return data;
      }

      PdaTakePhotoDto(
        { 
          this.placeNum,
this.imei});



       

      PdaTakePhotoDto.fromJson(Map<String, dynamic> json) {

        placeNum=json['placeNum'];
imei=json['imei'];
         
      }

    } 
    class TakeExtraPicturesDto{
     /// 停车ID 
 String? id;
  String? imei;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['imei'] = imei; 
        return data;
      }

      TakeExtraPicturesDto(
        { 
          this.id,
this.imei});



       

      TakeExtraPicturesDto.fromJson(Map<String, dynamic> json) {

        id=json['id'];
imei=json['imei'];
         
      }

    } 
    class ParkCarDto{
     /// 停车ID,不传手动停车 
 String? parkingCarId;
 /// 车位ID 
 String? placeId;
 /// 车牌号 
 String? carNumber;
 /// 照片文件 
 String? fileName;
 /// 缴费类型 0普通 3军警消防 4救护 5残疾 6市政 7邮政 
 int? chargeType;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['parkingCarId'] = parkingCarId;
data['placeId'] = placeId;
data['carNumber'] = carNumber;
data['fileName'] = fileName;
data['chargeType'] = chargeType; 
        return data;
      }

      ParkCarDto(
        { 
          this.parkingCarId,
this.placeId,
this.carNumber,
this.fileName,
this.chargeType});



       

      ParkCarDto.fromJson(Map<String, dynamic> json) {

        parkingCarId=json['parkingCarId'];
placeId=json['placeId'];
carNumber=json['carNumber'];
fileName=json['fileName'];
chargeType=json['chargeType'];
         
      }

    } 
    class EndOrder{
     /// 是否是有效订单 
 bool? effective;
 /// 当前订单ID 
 String? id;
 /// 当前订单支付方式-status为true才有 
 MsgType? mode;
 /// 是否支付 
 MsgType? status;
 /// 历史未支付订单数-不包含当前订单 
 int? historyUnPay;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['effective'] = effective;
data['id'] = id;
data['mode'] =  mode?.toJson();
data['status'] =  status?.toJson();
data['historyUnPay'] = historyUnPay; 
        return data;
      }

      EndOrder(
        { 
          this.effective,
this.id,
this.mode,
this.status,
this.historyUnPay});



       

      EndOrder.fromJson(Map<String, dynamic> json) {

        effective=json['effective'];
id=json['id'];

            if (json['mode'] != null) {
              mode = MsgType.fromJson(json['mode']);
            }

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
historyUnPay=json['historyUnPay'];
         
      }

    } 
    class SpecialCarApplyProcessDto{
      String? id;
 /// 审核结果 
 bool? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['status'] = status; 
        return data;
      }

      SpecialCarApplyProcessDto(
        { 
          this.id,
this.status});



       

      SpecialCarApplyProcessDto.fromJson(Map<String, dynamic> json) {

        id=json['id'];
status=json['status'];
         
      }

    } 
    class PplLockOpDto{
     /// 对应的名字 如 远程升锁 
 String? operation;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['operation'] = operation; 
        return data;
      }

      PplLockOpDto(
        { 
          this.operation});



       

      PplLockOpDto.fromJson(Map<String, dynamic> json) {

        operation=json['operation'];
         
      }

    } 
    class PatrolLoginDto{
     /// 手机号 
 String? username;
 /// 密码 
 String? password;
 /// 验证码 
 String? code;
 /// 推送ID/非必须 
 String? clientId;
 /// 登录版本号 
 String? version;
 /// 设备号 
 String? imei;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['username'] = username;
data['password'] = password;
data['code'] = code;
data['clientId'] = clientId;
data['version'] = version;
data['imei'] = imei; 
        return data;
      }

      PatrolLoginDto(
        { 
          this.username,
this.password,
this.code,
this.clientId,
this.version,
this.imei});



       

      PatrolLoginDto.fromJson(Map<String, dynamic> json) {

        username=json['username'];
password=json['password'];
code=json['code'];
clientId=json['clientId'];
version=json['version'];
imei=json['imei'];
         
      }

    } 
    class PatrolLoginResult{
      String? id;
  String? name;
 /// 0未填写 1男 2女 
 MsgType? sex;
  String? avatar;
  String? token;
 /// 巡查类型 1地磁 2地锁 10混合 20值守 
 int? type;
 /// 是否激活-false需要强制更新密码 
 bool? active;
 /// 拥有的权限 
 List<String>? permissions;
 /// 1小程序 2微信 
 int? payType;
 /// 是否开启小票 
 bool? enabledTicket;
 /// 是否是残疾人 
 bool? special;
 /// 本月绩效分数 
 int? score;
 /// 停车点 id 
 String? lotId;
 /// 停车点名 
 String? lotName;
 /// 员工编号 
 String? jobNum;
 /// 电话号码 
 String? phone;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['name'] = name;
data['sex'] =  sex?.toJson();
data['avatar'] = avatar;
data['token'] = token;
data['type'] = type;
data['active'] = active;
data['permissions'] = permissions;
data['payType'] = payType;
data['enabledTicket'] = enabledTicket;
data['special'] = special;
data['score'] = score;
data['lotId'] = lotId;
data['lotName'] = lotName;
data['jobNum'] = jobNum;
data['phone'] = phone; 
        return data;
      }

      PatrolLoginResult(
        { 
          this.id,
this.name,
this.sex,
this.avatar,
this.token,
this.type,
this.active,
this.permissions,
this.payType,
this.enabledTicket,
this.special,
this.score,
this.lotId,
this.lotName,
this.jobNum,
this.phone});



       

      PatrolLoginResult.fromJson(Map<String, dynamic> json) {

        id=json['id'];
name=json['name'];

            if (json['sex'] != null) {
              sex = MsgType.fromJson(json['sex']);
            }
avatar=json['avatar'];
token=json['token'];
type=json['type'];
active=json['active'];
permissions=json['permissions']?.cast<String>();
payType=json['payType'];
enabledTicket=json['enabledTicket'];
special=json['special'];
score=json['score'];
lotId=json['lotId'];
lotName=json['lotName'];
jobNum=json['jobNum'];
phone=json['phone'];
         
      }

    } 
    class SearchWorkRecordDto{
     /// 查询开始日期 
 String? from;
 /// 查询结束日期 
 String? to;
 /// false-未处理，true-已处理 
 bool? status;
 /// 车位 
 String? placeId;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['from'] = from;
data['to'] = to;
data['status'] = status;
data['placeId'] = placeId; 
        return data;
      }

      SearchWorkRecordDto(
        { 
          this.from,
this.to,
this.status,
this.placeId});



       

      SearchWorkRecordDto.fromJson(Map<String, dynamic> json) {

        from=json['from'];
to=json['to'];
status=json['status'];
placeId=json['placeId'];
         
      }

    } 
    class WorkIndexRecord{
      String? id;
  String? lotName;
  String? placeNum;
  String? deviceSn;
  String? tag;
  List<String>? urls;
  String? createdAt;
 /// 记录类型，0-工作记录，1-记录上报 
 int? recordType;
 /// false-未处理，true-已处理 
 bool? status;
 /// 上报人 
 String? launchUser;
  String? tags;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['lotName'] = lotName;
data['placeNum'] = placeNum;
data['deviceSn'] = deviceSn;
data['tag'] = tag;
data['urls'] = urls;
data['createdAt'] = createdAt;
data['recordType'] = recordType;
data['status'] = status;
data['launchUser'] = launchUser;
data['tags'] = tags; 
        return data;
      }

      WorkIndexRecord(
        { 
          this.id,
this.lotName,
this.placeNum,
this.deviceSn,
this.tag,
this.urls,
this.createdAt,
this.recordType,
this.status,
this.launchUser,
this.tags});



       

      WorkIndexRecord.fromJson(Map<String, dynamic> json) {

        id=json['id'];
lotName=json['lotName'];
placeNum=json['placeNum'];
deviceSn=json['deviceSn'];
tag=json['tag'];
urls=json['urls']?.cast<String>();
createdAt=json['createdAt'];
recordType=json['recordType'];
status=json['status'];
launchUser=json['launchUser'];
tags=json['tags'];
         
      }

    } 
    class TimeRangeDate{
     /// 查询开始日期 
 String? from;
 /// 查询结束日期 
 String? to;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['from'] = from;
data['to'] = to; 
        return data;
      }

      TimeRangeDate(
        { 
          this.from,
this.to});



       

      TimeRangeDate.fromJson(Map<String, dynamic> json) {

        from=json['from'];
to=json['to'];
         
      }

    } 
    class WorkIndexTag{
      String? name;
  int? total;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['name'] = name;
data['total'] = total; 
        return data;
      }

      WorkIndexTag(
        { 
          this.name,
this.total});



       

      WorkIndexTag.fromJson(Map<String, dynamic> json) {

        name=json['name'];
total=json['total'];
         
      }

    } 
    class DeviceWorkTag{
      String? id;
  String? name;
  bool? system;
  int? type;
  String? createdAt;
  bool? deleted;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['name'] = name;
data['system'] = system;
data['type'] = type;
data['createdAt'] = createdAt;
data['deleted'] = deleted; 
        return data;
      }

      DeviceWorkTag(
        { 
          this.id,
this.name,
this.system,
this.type,
this.createdAt,
this.deleted});



       

      DeviceWorkTag.fromJson(Map<String, dynamic> json) {

        id=json['id'];
name=json['name'];
system=json['system'];
type=json['type'];
createdAt=json['createdAt'];
deleted=json['deleted'];
         
      }

    } 
    class WorkScanVo{
     /// 点位名 
 String? lotName;
 /// 车位编号 
 String? placeNum;
 /// 设备ID 
 String? deviceId;
 /// 设备编号 
 String? deviceSn;
 /// 巡查标签列表 
 List<DeviceWorkTag>? tags;
 /// 技术工作列表 
 List<DeviceWorkTag>? techTags;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotName'] = lotName;
data['placeNum'] = placeNum;
data['deviceId'] = deviceId;
data['deviceSn'] = deviceSn;

                if (tags != null) {
                  data['e.key'] =  tags?.map((v) => v.toJson()).toList();
                }
                

                if (techTags != null) {
                  data['e.key'] =  techTags?.map((v) => v.toJson()).toList();
                }
                 
        return data;
      }

      WorkScanVo(
        { 
          this.lotName,
this.placeNum,
this.deviceId,
this.deviceSn,
this.tags,
this.techTags});



       

      WorkScanVo.fromJson(Map<String, dynamic> json) {

        lotName=json['lotName'];
placeNum=json['placeNum'];
deviceId=json['deviceId'];
deviceSn=json['deviceSn'];
 
                if (json['tags'] != null) {
                  tags =[];
                  json['tags'].forEach((v) {
                    tags?.add(DeviceWorkTag.fromJson(v)); 
                  });
                }
                
 
                if (json['techTags'] != null) {
                  techTags =[];
                  json['techTags'].forEach((v) {
                    techTags?.add(DeviceWorkTag.fromJson(v)); 
                  });
                }
                
         
      }

    } 
    class WorkRecord{
      String? id;
  String? address;
  String? placeNum;
  String? tagName;
 /// 处理状态，0-未处理，1-已处理 
 int? status;
 /// 是否能够处理该记录 
 bool? canProcess;
 /// 处理记录 
 List<WorkRecordProcessDetail>? detailList;
  List<String>? tagNames;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['address'] = address;
data['placeNum'] = placeNum;
data['tagName'] = tagName;
data['status'] = status;
data['canProcess'] = canProcess;

                if (detailList != null) {
                  data['e.key'] =  detailList?.map((v) => v.toJson()).toList();
                }
                
data['tagNames'] = tagNames; 
        return data;
      }

      WorkRecord(
        { 
          this.id,
this.address,
this.placeNum,
this.tagName,
this.status,
this.canProcess,
this.detailList,
this.tagNames});



       

      WorkRecord.fromJson(Map<String, dynamic> json) {

        id=json['id'];
address=json['address'];
placeNum=json['placeNum'];
tagName=json['tagName'];
status=json['status'];
canProcess=json['canProcess'];
 
                if (json['detailList'] != null) {
                  detailList =[];
                  json['detailList'].forEach((v) {
                    detailList?.add(WorkRecordProcessDetail.fromJson(v)); 
                  });
                }
                
tagNames=json['tagNames']?.cast<String>();
         
      }

    } 
    class WorkRecordProcessDetail{
      String? detailId;
  String? createdAt;
  String? processId;
  String? processUser;
  String? processPhone;
  List<String>? pictures;
  String? remark;
 /// 处理结果，0-失败，1-成功 
 int? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['detailId'] = detailId;
data['createdAt'] = createdAt;
data['processId'] = processId;
data['processUser'] = processUser;
data['processPhone'] = processPhone;
data['pictures'] = pictures;
data['remark'] = remark;
data['status'] = status; 
        return data;
      }

      WorkRecordProcessDetail(
        { 
          this.detailId,
this.createdAt,
this.processId,
this.processUser,
this.processPhone,
this.pictures,
this.remark,
this.status});



       

      WorkRecordProcessDetail.fromJson(Map<String, dynamic> json) {

        detailId=json['detailId'];
createdAt=json['createdAt'];
processId=json['processId'];
processUser=json['processUser'];
processPhone=json['processPhone'];
pictures=json['pictures']?.cast<String>();
remark=json['remark'];
status=json['status'];
         
      }

    } 
    class WorkIndexLotVo{
     /// 点位id 
 String? lotId;
 /// 地址 
 String? address;
 /// 数量 
 int? count;
  List<WorkIndexRecord>? recordList;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotId'] = lotId;
data['address'] = address;
data['count'] = count;

                if (recordList != null) {
                  data['e.key'] =  recordList?.map((v) => v.toJson()).toList();
                }
                 
        return data;
      }

      WorkIndexLotVo(
        { 
          this.lotId,
this.address,
this.count,
this.recordList});



       

      WorkIndexLotVo.fromJson(Map<String, dynamic> json) {

        lotId=json['lotId'];
address=json['address'];
count=json['count'];
 
                if (json['recordList'] != null) {
                  recordList =[];
                  json['recordList'].forEach((v) {
                    recordList?.add(WorkIndexRecord.fromJson(v)); 
                  });
                }
                
         
      }

    } 
    class PatrolApkVo{
     /// 当前的最新版本号 
 String? version;
 /// 最新版本的下载地址 
 String? url;
 /// 版本更新内容 
 String? releaseNotes;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['version'] = version;
data['url'] = url;
data['releaseNotes'] = releaseNotes; 
        return data;
      }

      PatrolApkVo(
        { 
          this.version,
this.url,
this.releaseNotes});



       

      PatrolApkVo.fromJson(Map<String, dynamic> json) {

        version=json['version'];
url=json['url'];
releaseNotes=json['releaseNotes'];
         
      }

    } 
    class SignStatusDto{
     /// 纬度 
 double? lat;
 /// 经度 
 double? lng;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lat'] = lat;
data['lng'] = lng; 
        return data;
      }

      SignStatusDto(
        { 
          this.lat,
this.lng});



       

      SignStatusDto.fromJson(Map<String, dynamic> json) {

        lat=json['lat'];
lng=json['lng'];
         
      }

    } 
    class SignItem{
      String? title;
  String? workTime;
 /// 打卡时间，记录才有 
 String? signTime;
 /// 打卡点位名称,记录以记录为准，当前是实时 
 String? address;
 /// 打卡结果是否正常(迟到早退异常false）,有记录的才有 
 bool? status;
 /// 打卡结果,有记录的才有 
 String? resultDesc;
 /// 打卡图片 
 String? image;
 /// 是否在范围内,当前打卡才有 
 bool? inRange;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['title'] = title;
data['workTime'] = workTime;
data['signTime'] = signTime;
data['address'] = address;
data['status'] = status;
data['resultDesc'] = resultDesc;
data['image'] = image;
data['inRange'] = inRange; 
        return data;
      }

      SignItem(
        { 
          this.title,
this.workTime,
this.signTime,
this.address,
this.status,
this.resultDesc,
this.image,
this.inRange});



       

      SignItem.fromJson(Map<String, dynamic> json) {

        title=json['title'];
workTime=json['workTime'];
signTime=json['signTime'];
address=json['address'];
status=json['status'];
resultDesc=json['resultDesc'];
image=json['image'];
inRange=json['inRange'];
         
      }

    } 
    class SignRule{
      String? id;
  String? name;
  int? signType;
  String? pointName;
  double? lat;
  double? lng;
  int? distanceMills;
  String? workStart;
  String? workEnd;
  int? startLimitHour;
  int? endLimitHour;
  bool? photo;
  bool? outside;
  int? userSource;
  String? createdAt;
  String? updatedAt;
  bool? deleted;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['name'] = name;
data['signType'] = signType;
data['pointName'] = pointName;
data['lat'] = lat;
data['lng'] = lng;
data['distanceMills'] = distanceMills;
data['workStart'] = workStart;
data['workEnd'] = workEnd;
data['startLimitHour'] = startLimitHour;
data['endLimitHour'] = endLimitHour;
data['photo'] = photo;
data['outside'] = outside;
data['userSource'] = userSource;
data['createdAt'] = createdAt;
data['updatedAt'] = updatedAt;
data['deleted'] = deleted; 
        return data;
      }

      SignRule(
        { 
          this.id,
this.name,
this.signType,
this.pointName,
this.lat,
this.lng,
this.distanceMills,
this.workStart,
this.workEnd,
this.startLimitHour,
this.endLimitHour,
this.photo,
this.outside,
this.userSource,
this.createdAt,
this.updatedAt,
this.deleted});



       

      SignRule.fromJson(Map<String, dynamic> json) {

        id=json['id'];
name=json['name'];
signType=json['signType'];
pointName=json['pointName'];
lat=json['lat'];
lng=json['lng'];
distanceMills=json['distanceMills'];
workStart=json['workStart'];
workEnd=json['workEnd'];
startLimitHour=json['startLimitHour'];
endLimitHour=json['endLimitHour'];
photo=json['photo'];
outside=json['outside'];
userSource=json['userSource'];
createdAt=json['createdAt'];
updatedAt=json['updatedAt'];
deleted=json['deleted'];
         
      }

    } 
    class SignStatusResult{
      SignRule? rule;
 /// 绑定点位地址 
 String? address;
  List<SignItem>? items;
 /// 打卡点位ID,固定打卡点无 
 String? lotId;
 /// 距离打卡位置点位距离 
 double? distance;
  bool? inRange;
 /// 0无需打卡 1上班打卡 2下班打卡 
 int? signType;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['rule'] =  rule?.toJson();
data['address'] = address;

                if (items != null) {
                  data['e.key'] =  items?.map((v) => v.toJson()).toList();
                }
                
data['lotId'] = lotId;
data['distance'] = distance;
data['inRange'] = inRange;
data['signType'] = signType; 
        return data;
      }

      SignStatusResult(
        { 
          this.rule,
this.address,
this.items,
this.lotId,
this.distance,
this.inRange,
this.signType});



       

      SignStatusResult.fromJson(Map<String, dynamic> json) {

        
            if (json['rule'] != null) {
              rule = SignRule.fromJson(json['rule']);
            }
address=json['address'];
 
                if (json['items'] != null) {
                  items =[];
                  json['items'].forEach((v) {
                    items?.add(SignItem.fromJson(v)); 
                  });
                }
                
lotId=json['lotId'];
distance=json['distance'];
inRange=json['inRange'];
signType=json['signType'];
         
      }

    } 
    class SearchNumberVo{
     /// 车位号的ID 
 String? id;
 /// 地锁编号 
 String? number;
 /// 车位号 
 String? placeNum;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['number'] = number;
data['placeNum'] = placeNum; 
        return data;
      }

      SearchNumberVo(
        { 
          this.id,
this.number,
this.placeNum});



       

      SearchNumberVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
number=json['number'];
placeNum=json['placeNum'];
         
      }

    } 
    class ReportItemMsg{
      String? id;
 /// 上报人名字(可无) 
 String? reporter;
 /// 上报人电话 
 String? reporterPhone;
 /// 上报点位 
 String? position;
 /// 上报停车位 
 String? placeNum;
 /// 上报信息-暂时没用 
 String? msg;
 /// 上报的图片 
 List<String>? pictures;
 /// 上报类型 
 MsgType? msgType;
 /// 处理状态 
 MsgType? processStatus;
  RoadSideOrder? order;
 /// 修改后 特牌申请为巡查拍着照片 
 String? changeTo;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['reporter'] = reporter;
data['reporterPhone'] = reporterPhone;
data['position'] = position;
data['placeNum'] = placeNum;
data['msg'] = msg;
data['pictures'] = pictures;
data['msgType'] =  msgType?.toJson();
data['processStatus'] =  processStatus?.toJson();
data['order'] =  order?.toJson();
data['changeTo'] = changeTo; 
        return data;
      }

      ReportItemMsg(
        { 
          this.id,
this.reporter,
this.reporterPhone,
this.position,
this.placeNum,
this.msg,
this.pictures,
this.msgType,
this.processStatus,
this.order,
this.changeTo});



       

      ReportItemMsg.fromJson(Map<String, dynamic> json) {

        id=json['id'];
reporter=json['reporter'];
reporterPhone=json['reporterPhone'];
position=json['position'];
placeNum=json['placeNum'];
msg=json['msg'];
pictures=json['pictures']?.cast<String>();

            if (json['msgType'] != null) {
              msgType = MsgType.fromJson(json['msgType']);
            }

            if (json['processStatus'] != null) {
              processStatus = MsgType.fromJson(json['processStatus']);
            }

            if (json['order'] != null) {
              order = RoadSideOrder.fromJson(json['order']);
            }
changeTo=json['changeTo'];
         
      }

    } 
    class RoadSideOrder{
     /// 订单ID 
 String? id;
 /// 微信用户ID 
 String? appUserId;
 /// 原始金额(单位:分) 
 int? originalMoney;
 /// 目标金额(单位:分) 
 int? targetMoney;
 /// 实际金额(单位:分) 
 int? realMoney;
 /// 停车开始时间 
 String? startAt;
 /// 停车结束时间 
 String? endAt;
 /// 开始信息来源 
 MsgType? beginType;
 /// 结束信息来源 
 MsgType? endType;
 /// 停车总时长(分钟) 
 int? duringTime;
 /// 停车图片 
 String? picture;
 /// 车牌ID 
 String? carId;
 /// 车牌 
 String? plateNumber;
 /// 停车地点 
 String? lotName;
 /// 车位号 
 String? placeNum;
 /// 是否支付 
 MsgType? status;
 /// 支付时间 
 String? payAt;
 /// 支付方式 
 MsgType? mode;
 /// 缴费类型 
 MsgType? chargeType;
 /// 享受优惠数量 
 int? discountCount;
  int? discountMoney;
 /// 补拍照片 
 List<String>? extraPictures;
 /// 补拍照片 
 String? rule;
 /// 设备编号 
 String? deviceSn;
 /// 是否是代收欠费 
 bool? receipt;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['appUserId'] = appUserId;
data['originalMoney'] = originalMoney;
data['targetMoney'] = targetMoney;
data['realMoney'] = realMoney;
data['startAt'] = startAt;
data['endAt'] = endAt;
data['beginType'] =  beginType?.toJson();
data['endType'] =  endType?.toJson();
data['duringTime'] = duringTime;
data['picture'] = picture;
data['carId'] = carId;
data['plateNumber'] = plateNumber;
data['lotName'] = lotName;
data['placeNum'] = placeNum;
data['status'] =  status?.toJson();
data['payAt'] = payAt;
data['mode'] =  mode?.toJson();
data['chargeType'] =  chargeType?.toJson();
data['discountCount'] = discountCount;
data['discountMoney'] = discountMoney;
data['extraPictures'] = extraPictures;
data['rule'] = rule;
data['deviceSn'] = deviceSn;
data['receipt'] = receipt; 
        return data;
      }

      RoadSideOrder(
        { 
          this.id,
this.appUserId,
this.originalMoney,
this.targetMoney,
this.realMoney,
this.startAt,
this.endAt,
this.beginType,
this.endType,
this.duringTime,
this.picture,
this.carId,
this.plateNumber,
this.lotName,
this.placeNum,
this.status,
this.payAt,
this.mode,
this.chargeType,
this.discountCount,
this.discountMoney,
this.extraPictures,
this.rule,
this.deviceSn,
this.receipt});



       

      RoadSideOrder.fromJson(Map<String, dynamic> json) {

        id=json['id'];
appUserId=json['appUserId'];
originalMoney=json['originalMoney'];
targetMoney=json['targetMoney'];
realMoney=json['realMoney'];
startAt=json['startAt'];
endAt=json['endAt'];

            if (json['beginType'] != null) {
              beginType = MsgType.fromJson(json['beginType']);
            }

            if (json['endType'] != null) {
              endType = MsgType.fromJson(json['endType']);
            }
duringTime=json['duringTime'];
picture=json['picture'];
carId=json['carId'];
plateNumber=json['plateNumber'];
lotName=json['lotName'];
placeNum=json['placeNum'];

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
payAt=json['payAt'];

            if (json['mode'] != null) {
              mode = MsgType.fromJson(json['mode']);
            }

            if (json['chargeType'] != null) {
              chargeType = MsgType.fromJson(json['chargeType']);
            }
discountCount=json['discountCount'];
discountMoney=json['discountMoney'];
extraPictures=json['extraPictures']?.cast<String>();
rule=json['rule'];
deviceSn=json['deviceSn'];
receipt=json['receipt'];
         
      }

    } 
    class ReportPageDto{
      bool? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['status'] = status; 
        return data;
      }

      ReportPageDto(
        { 
          this.status});



       

      ReportPageDto.fromJson(Map<String, dynamic> json) {

        status=json['status'];
         
      }

    } 
    class ReportMsgVo{
      String? id;
 /// 上报人名字(可无) 
 String? reporter;
 /// 车位号 
 String? placeNum;
 /// 上报类型 
 MsgType? msgType;
 /// 创建时间 
 String? createdAt;
 /// 处理状态 
 MsgType? processStatus;
 /// 照片列表 
 List<String>? pictures;
 /// 处理人 
 String? patrolUserName;
 /// 上报消息 特殊车牌审核为车牌类型 
 String? msg;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['reporter'] = reporter;
data['placeNum'] = placeNum;
data['msgType'] =  msgType?.toJson();
data['createdAt'] = createdAt;
data['processStatus'] =  processStatus?.toJson();
data['pictures'] = pictures;
data['patrolUserName'] = patrolUserName;
data['msg'] = msg; 
        return data;
      }

      ReportMsgVo(
        { 
          this.id,
this.reporter,
this.placeNum,
this.msgType,
this.createdAt,
this.processStatus,
this.pictures,
this.patrolUserName,
this.msg});



       

      ReportMsgVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
reporter=json['reporter'];
placeNum=json['placeNum'];

            if (json['msgType'] != null) {
              msgType = MsgType.fromJson(json['msgType']);
            }
createdAt=json['createdAt'];

            if (json['processStatus'] != null) {
              processStatus = MsgType.fromJson(json['processStatus']);
            }
pictures=json['pictures']?.cast<String>();
patrolUserName=json['patrolUserName'];
msg=json['msg'];
         
      }

    } 
    class PdaPerformanceVo{
      String? id;
 /// 应收 
 int? income;
 /// 已收 
 int? received;
 /// 线上已收 
 int? onlineReceived;
 /// 已拍 
 int? realPhoto;
 /// 应拍 
 int? totalPhoto;
 /// 欠费 
 int? arrears;
 /// 总分 
 int? score;
 /// 收费率扣减分数 
 int? chargeScore;
 /// 拍照率扣减分数 
 int? photoScore;
 /// 投诉扣减分数 
 int? complaintScore;
 /// 投诉扣减次数 
 int? complaintCount;
 /// 行为规范扣减分数 
 int? behaviourScore;
 /// 行为规范扣减次数 
 int? behaviourCount;
 /// 安全扣减分数 
 int? safeScore;
 /// 安全扣减次数 
 int? safeCount;
 /// 其他扣减分数 
 int? otherScore;
 /// 其他扣减次数 
 int? otherCount;
 /// 收费率 
 String? chargeRate;
 /// 电子收费率 
 String? onlineChargeRate;
 /// 拍照率 
 String? photoRate;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['income'] = income;
data['received'] = received;
data['onlineReceived'] = onlineReceived;
data['realPhoto'] = realPhoto;
data['totalPhoto'] = totalPhoto;
data['arrears'] = arrears;
data['score'] = score;
data['chargeScore'] = chargeScore;
data['photoScore'] = photoScore;
data['complaintScore'] = complaintScore;
data['complaintCount'] = complaintCount;
data['behaviourScore'] = behaviourScore;
data['behaviourCount'] = behaviourCount;
data['safeScore'] = safeScore;
data['safeCount'] = safeCount;
data['otherScore'] = otherScore;
data['otherCount'] = otherCount;
data['chargeRate'] = chargeRate;
data['onlineChargeRate'] = onlineChargeRate;
data['photoRate'] = photoRate; 
        return data;
      }

      PdaPerformanceVo(
        { 
          this.id,
this.income,
this.received,
this.onlineReceived,
this.realPhoto,
this.totalPhoto,
this.arrears,
this.score,
this.chargeScore,
this.photoScore,
this.complaintScore,
this.complaintCount,
this.behaviourScore,
this.behaviourCount,
this.safeScore,
this.safeCount,
this.otherScore,
this.otherCount,
this.chargeRate,
this.onlineChargeRate,
this.photoRate});



       

      PdaPerformanceVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
income=json['income'];
received=json['received'];
onlineReceived=json['onlineReceived'];
realPhoto=json['realPhoto'];
totalPhoto=json['totalPhoto'];
arrears=json['arrears'];
score=json['score'];
chargeScore=json['chargeScore'];
photoScore=json['photoScore'];
complaintScore=json['complaintScore'];
complaintCount=json['complaintCount'];
behaviourScore=json['behaviourScore'];
behaviourCount=json['behaviourCount'];
safeScore=json['safeScore'];
safeCount=json['safeCount'];
otherScore=json['otherScore'];
otherCount=json['otherCount'];
chargeRate=json['chargeRate'];
onlineChargeRate=json['onlineChargeRate'];
photoRate=json['photoRate'];
         
      }

    } 
    class PdaPerformanceScore{
      String? id;
  String? performanceId;
  String? level1;
  String? level2;
  int? score;
  String? operator;
  String? url;
  String? remarks;
  String? createdAt;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['performanceId'] = performanceId;
data['level1'] = level1;
data['level2'] = level2;
data['score'] = score;
data['operator'] = operator;
data['url'] = url;
data['remarks'] = remarks;
data['createdAt'] = createdAt; 
        return data;
      }

      PdaPerformanceScore(
        { 
          this.id,
this.performanceId,
this.level1,
this.level2,
this.score,
this.operator,
this.url,
this.remarks,
this.createdAt});



       

      PdaPerformanceScore.fromJson(Map<String, dynamic> json) {

        id=json['id'];
performanceId=json['performanceId'];
level1=json['level1'];
level2=json['level2'];
score=json['score'];
operator=json['operator'];
url=json['url'];
remarks=json['remarks'];
createdAt=json['createdAt'];
         
      }

    } 
    class PerformanceItemVo{
     /// 扣分的才有 
 String? id;
 /// 日期 
 String? date;
 /// 文字 
 String? content;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['date'] = date;
data['content'] = content; 
        return data;
      }

      PerformanceItemVo(
        { 
          this.id,
this.date,
this.content});



       

      PerformanceItemVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
date=json['date'];
content=json['content'];
         
      }

    } 
    class OnlinePlaceItems{
     /// 停车ID 
 String? parkingCarId;
 /// 停车位ID 
 String? placeId;
 /// 停车位编码 
 String? placeNum;
 /// 停车位状态 
 MsgType? status;
 /// 车牌号 
 String? carNumber;
 /// 开始停车时间 
 String? startAt;
 /// 倒计时剩余时间 
 int? leavingTime;
 /// 是否完成补拍 
 bool? retake;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['parkingCarId'] = parkingCarId;
data['placeId'] = placeId;
data['placeNum'] = placeNum;
data['status'] =  status?.toJson();
data['carNumber'] = carNumber;
data['startAt'] = startAt;
data['leavingTime'] = leavingTime;
data['retake'] = retake; 
        return data;
      }

      OnlinePlaceItems(
        { 
          this.parkingCarId,
this.placeId,
this.placeNum,
this.status,
this.carNumber,
this.startAt,
this.leavingTime,
this.retake});



       

      OnlinePlaceItems.fromJson(Map<String, dynamic> json) {

        parkingCarId=json['parkingCarId'];
placeId=json['placeId'];
placeNum=json['placeNum'];

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
carNumber=json['carNumber'];
startAt=json['startAt'];
leavingTime=json['leavingTime'];
retake=json['retake'];
         
      }

    } 
    class PdaParkingCarVo{
      String? id;
  String? startAt;
  String? endAt;
  String? picture;
  String? carNumber;
  MsgType? carType;
 /// 缴费类型 
 MsgType? chargeType;
 /// 特牌审核是否通过 
 MsgType? specialCarPass;
  List<String>? extraPictures;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['startAt'] = startAt;
data['endAt'] = endAt;
data['picture'] = picture;
data['carNumber'] = carNumber;
data['carType'] =  carType?.toJson();
data['chargeType'] =  chargeType?.toJson();
data['specialCarPass'] =  specialCarPass?.toJson();
data['extraPictures'] = extraPictures; 
        return data;
      }

      PdaParkingCarVo(
        { 
          this.id,
this.startAt,
this.endAt,
this.picture,
this.carNumber,
this.carType,
this.chargeType,
this.specialCarPass,
this.extraPictures});



       

      PdaParkingCarVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
startAt=json['startAt'];
endAt=json['endAt'];
picture=json['picture'];
carNumber=json['carNumber'];

            if (json['carType'] != null) {
              carType = MsgType.fromJson(json['carType']);
            }

            if (json['chargeType'] != null) {
              chargeType = MsgType.fromJson(json['chargeType']);
            }

            if (json['specialCarPass'] != null) {
              specialCarPass = MsgType.fromJson(json['specialCarPass']);
            }
extraPictures=json['extraPictures']?.cast<String>();
         
      }

    } 
    class PdaIncomeVo{
     /// 已收 
 int? received;
 /// 微信（原始二维码+小程序） 
 int? wechatPay;
 /// 微信原始二维码支付 
 int? wechatQrcodePay;
 /// 微信小程序支付 
 int? wechatMpPay;
 /// 支付宝 
 int? aliPay;
 /// 现金 
 int? cashPay;
 /// 余额 
 int? balancePay;
 /// 应收 
 int? generalIncome;
 /// 欠费 
 int? arrears;
 /// 代收 
 int? takeIncome;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['received'] = received;
data['wechatPay'] = wechatPay;
data['wechatQrcodePay'] = wechatQrcodePay;
data['wechatMpPay'] = wechatMpPay;
data['aliPay'] = aliPay;
data['cashPay'] = cashPay;
data['balancePay'] = balancePay;
data['generalIncome'] = generalIncome;
data['arrears'] = arrears;
data['takeIncome'] = takeIncome; 
        return data;
      }

      PdaIncomeVo(
        { 
          this.received,
this.wechatPay,
this.wechatQrcodePay,
this.wechatMpPay,
this.aliPay,
this.cashPay,
this.balancePay,
this.generalIncome,
this.arrears,
this.takeIncome});



       

      PdaIncomeVo.fromJson(Map<String, dynamic> json) {

        received=json['received'];
wechatPay=json['wechatPay'];
wechatQrcodePay=json['wechatQrcodePay'];
wechatMpPay=json['wechatMpPay'];
aliPay=json['aliPay'];
cashPay=json['cashPay'];
balancePay=json['balancePay'];
generalIncome=json['generalIncome'];
arrears=json['arrears'];
takeIncome=json['takeIncome'];
         
      }

    } 
    class PdaPersonalSearchDto{
      String? date;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['date'] = date; 
        return data;
      }

      PdaPersonalSearchDto(
        { 
          this.date});



       

      PdaPersonalSearchDto.fromJson(Map<String, dynamic> json) {

        date=json['date'];
         
      }

    } 
    class PdaIncomeSearchDto{
      String? date;
 /// 订单状态 
 bool? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['date'] = date;
data['status'] = status; 
        return data;
      }

      PdaIncomeSearchDto(
        { 
          this.date,
this.status});



       

      PdaIncomeSearchDto.fromJson(Map<String, dynamic> json) {

        date=json['date'];
status=json['status'];
         
      }

    } 
    class PdaUserAccountsVo{
     /// id 
 String? id;
 /// 交账日期 
 String? accountsDate;
 /// 自己收费金额 
 int? selfMoney;
 /// 代收金额 
 int? otherMoney;
 /// 交账金额 
 int? accountsMoney;
 /// 已交账金额 
 int? overAm;
 /// 核销时间 
 String? confirmAt;
 /// 交账状态,0:待交账,1:已交账,2:不需要交账 
 MsgType? status;
  String? statusStr;
 /// 核销人 
 String? confirmUserName;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['accountsDate'] = accountsDate;
data['selfMoney'] = selfMoney;
data['otherMoney'] = otherMoney;
data['accountsMoney'] = accountsMoney;
data['overAm'] = overAm;
data['confirmAt'] = confirmAt;
data['status'] =  status?.toJson();
data['statusStr'] = statusStr;
data['confirmUserName'] = confirmUserName; 
        return data;
      }

      PdaUserAccountsVo(
        { 
          this.id,
this.accountsDate,
this.selfMoney,
this.otherMoney,
this.accountsMoney,
this.overAm,
this.confirmAt,
this.status,
this.statusStr,
this.confirmUserName});



       

      PdaUserAccountsVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
accountsDate=json['accountsDate'];
selfMoney=json['selfMoney'];
otherMoney=json['otherMoney'];
accountsMoney=json['accountsMoney'];
overAm=json['overAm'];
confirmAt=json['confirmAt'];

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
statusStr=json['statusStr'];
confirmUserName=json['confirmUserName'];
         
      }

    } 
    class PdaAccountDto{
     /// 自收0 代收1,默认值1代收 
 int? type;
 /// 是否是展示现金 
 bool? cash;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['type'] = type;
data['cash'] = cash; 
        return data;
      }

      PdaAccountDto(
        { 
          this.type,
this.cash});



       

      PdaAccountDto.fromJson(Map<String, dynamic> json) {

        type=json['type'];
cash=json['cash'];
         
      }

    } 
    class CollectionOrderVo{
     /// ID 
 String? id;
 /// 开始时间 
 String? startAt;
 /// 结束时间 
 String? endAt;
 /// 欠费时长 
 String? overdueTime;
  String? lotName;
  String? duringTime;
 /// 车位号 
 String? placeNum;
 /// 车牌号 
 String? plateNumber;
 /// 实际金额(单位:分) 
 int? realMoney;
  String? payAt;
 /// 支付方式 0免费 1活动免费 5现金 6余额 7微信支付 8支付宝  
 MsgType? mode;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['startAt'] = startAt;
data['endAt'] = endAt;
data['overdueTime'] = overdueTime;
data['lotName'] = lotName;
data['duringTime'] = duringTime;
data['placeNum'] = placeNum;
data['plateNumber'] = plateNumber;
data['realMoney'] = realMoney;
data['payAt'] = payAt;
data['mode'] =  mode?.toJson(); 
        return data;
      }

      CollectionOrderVo(
        { 
          this.id,
this.startAt,
this.endAt,
this.overdueTime,
this.lotName,
this.duringTime,
this.placeNum,
this.plateNumber,
this.realMoney,
this.payAt,
this.mode});



       

      CollectionOrderVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
startAt=json['startAt'];
endAt=json['endAt'];
overdueTime=json['overdueTime'];
lotName=json['lotName'];
duringTime=json['duringTime'];
placeNum=json['placeNum'];
plateNumber=json['plateNumber'];
realMoney=json['realMoney'];
payAt=json['payAt'];

            if (json['mode'] != null) {
              mode = MsgType.fromJson(json['mode']);
            }
         
      }

    } 
    class PdaUaItemVo{
     /// 支付方式 
 MsgType? mode;
 /// 支付方式 
 String? payAt;
 /// 金额 
 int? money;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['mode'] =  mode?.toJson();
data['payAt'] = payAt;
data['money'] = money; 
        return data;
      }

      PdaUaItemVo(
        { 
          this.mode,
this.payAt,
this.money});



       

      PdaUaItemVo.fromJson(Map<String, dynamic> json) {

        
            if (json['mode'] != null) {
              mode = MsgType.fromJson(json['mode']);
            }
payAt=json['payAt'];
money=json['money'];
         
      }

    } 
    class PatrolLotOrder{
     /// 点位ID 
 String? lotId;
 /// 日期-默认当天 
 String? date;
 /// 不传查所有,有值查未付款 
 bool? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotId'] = lotId;
data['date'] = date;
data['status'] = status; 
        return data;
      }

      PatrolLotOrder(
        { 
          this.lotId,
this.date,
this.status});



       

      PatrolLotOrder.fromJson(Map<String, dynamic> json) {

        lotId=json['lotId'];
date=json['date'];
status=json['status'];
         
      }

    } 
    class PatrolUnpaidCarInfo{
     /// 总笔数 
 int? total;
 /// 总金额/分 
 int? amount;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['total'] = total;
data['amount'] = amount; 
        return data;
      }

      PatrolUnpaidCarInfo(
        { 
          this.total,
this.amount});



       

      PatrolUnpaidCarInfo.fromJson(Map<String, dynamic> json) {

        total=json['total'];
amount=json['amount'];
         
      }

    } 
    class PatrolMessage{
     /// 总金额 
 int? amount;
 /// 总未处理消息 
 int? unResolvedMessage;
 /// PDA上报故障 
 int? reportCount;
 /// 地锁故障消息 
 int? errorCount;
 /// 电压告警消息 
 int? voltageCount;
 /// 离线通知数量 
 int? pplOfflineCount;
 /// 残疾人车辆申请数量 
 int? carApplyCount;
 /// 特牌申请数量 
 int? specialCarApplyCount;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['amount'] = amount;
data['unResolvedMessage'] = unResolvedMessage;
data['reportCount'] = reportCount;
data['errorCount'] = errorCount;
data['voltageCount'] = voltageCount;
data['pplOfflineCount'] = pplOfflineCount;
data['carApplyCount'] = carApplyCount;
data['specialCarApplyCount'] = specialCarApplyCount; 
        return data;
      }

      PatrolMessage(
        { 
          this.amount,
this.unResolvedMessage,
this.reportCount,
this.errorCount,
this.voltageCount,
this.pplOfflineCount,
this.carApplyCount,
this.specialCarApplyCount});



       

      PatrolMessage.fromJson(Map<String, dynamic> json) {

        amount=json['amount'];
unResolvedMessage=json['unResolvedMessage'];
reportCount=json['reportCount'];
errorCount=json['errorCount'];
voltageCount=json['voltageCount'];
pplOfflineCount=json['pplOfflineCount'];
carApplyCount=json['carApplyCount'];
specialCarApplyCount=json['specialCarApplyCount'];
         
      }

    } 
    class SpecialCarMsgVo{
      String? id;
 /// 上报人名字 
 String? reporter;
 /// 创建时间 
 String? createdAt;
 /// 处理状态 
 MsgType? processStatus;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['reporter'] = reporter;
data['createdAt'] = createdAt;
data['processStatus'] =  processStatus?.toJson(); 
        return data;
      }

      SpecialCarMsgVo(
        { 
          this.id,
this.reporter,
this.createdAt,
this.processStatus});



       

      SpecialCarMsgVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
reporter=json['reporter'];
createdAt=json['createdAt'];

            if (json['processStatus'] != null) {
              processStatus = MsgType.fromJson(json['processStatus']);
            }
         
      }

    } 
    class SpecialCarItemMsgVo{
      String? id;
 /// 上报人名字 
 String? reporter;
 /// 上报人电话 
 String? reporterPhone;
 /// 上报点位 
 String? position;
 /// 上报停车位 
 String? placeNum;
 /// 申请的消息 (如 政府车) 
 String? msg;
 /// 上报的图片 
 List<String>? pictures;
 /// 创建时间 
 String? createdAt;
 /// 处理状态 
 MsgType? processStatus;
  RoadSideOrder? order;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['reporter'] = reporter;
data['reporterPhone'] = reporterPhone;
data['position'] = position;
data['placeNum'] = placeNum;
data['msg'] = msg;
data['pictures'] = pictures;
data['createdAt'] = createdAt;
data['processStatus'] =  processStatus?.toJson();
data['order'] =  order?.toJson(); 
        return data;
      }

      SpecialCarItemMsgVo(
        { 
          this.id,
this.reporter,
this.reporterPhone,
this.position,
this.placeNum,
this.msg,
this.pictures,
this.createdAt,
this.processStatus,
this.order});



       

      SpecialCarItemMsgVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
reporter=json['reporter'];
reporterPhone=json['reporterPhone'];
position=json['position'];
placeNum=json['placeNum'];
msg=json['msg'];
pictures=json['pictures']?.cast<String>();
createdAt=json['createdAt'];

            if (json['processStatus'] != null) {
              processStatus = MsgType.fromJson(json['processStatus']);
            }

            if (json['order'] != null) {
              order = RoadSideOrder.fromJson(json['order']);
            }
         
      }

    } 
    class PatrolCarApplyVo{
      String? id;
 /// 车牌号 
 String? plateNumber;
 /// 手机号 
 String? phone;
 /// 图片 
 List<String>? picUrls;
 /// 创建时间 
 String? createdAt;
 /// 审核状态 
 MsgType? status;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['plateNumber'] = plateNumber;
data['phone'] = phone;
data['picUrls'] = picUrls;
data['createdAt'] = createdAt;
data['status'] =  status?.toJson(); 
        return data;
      }

      PatrolCarApplyVo(
        { 
          this.id,
this.plateNumber,
this.phone,
this.picUrls,
this.createdAt,
this.status});



       

      PatrolCarApplyVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
plateNumber=json['plateNumber'];
phone=json['phone'];
picUrls=json['picUrls']?.cast<String>();
createdAt=json['createdAt'];

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
         
      }

    } 
    class DeviceOfflineVo{
      String? id;
  String? lotName;
  String? placeNum;
  String? deviceSn;
  bool? status;
  String? offlineTime;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['lotName'] = lotName;
data['placeNum'] = placeNum;
data['deviceSn'] = deviceSn;
data['status'] = status;
data['offlineTime'] = offlineTime; 
        return data;
      }

      DeviceOfflineVo(
        { 
          this.id,
this.lotName,
this.placeNum,
this.deviceSn,
this.status,
this.offlineTime});



       

      DeviceOfflineVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
lotName=json['lotName'];
placeNum=json['placeNum'];
deviceSn=json['deviceSn'];
status=json['status'];
offlineTime=json['offlineTime'];
         
      }

    } 
    class DeviceOfflineCount{
      String? lotId;
  String? address;
  int? total;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotId'] = lotId;
data['address'] = address;
data['total'] = total; 
        return data;
      }

      DeviceOfflineCount(
        { 
          this.lotId,
this.address,
this.total});



       

      DeviceOfflineCount.fromJson(Map<String, dynamic> json) {

        lotId=json['lotId'];
address=json['address'];
total=json['total'];
         
      }

    } 
    class DeviceLowBatteryCountVo{
     /// 点位ID 
 String? lotId;
 /// 详细地址 
 String? address;
 /// 总数量 
 int? total;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotId'] = lotId;
data['address'] = address;
data['total'] = total; 
        return data;
      }

      DeviceLowBatteryCountVo(
        { 
          this.lotId,
this.address,
this.total});



       

      DeviceLowBatteryCountVo.fromJson(Map<String, dynamic> json) {

        lotId=json['lotId'];
address=json['address'];
total=json['total'];
         
      }

    } 
    class DeviceVoltageMsg{
      String? id;
  String? lotId;
  String? lotName;
  String? placeId;
  String? placeNum;
  String? deviceId;
  String? deviceSn;
  double? voltage;
  int? level;
  String? processId;
  String? processUser;
  bool? processStatus;
  String? processAt;
  String? url;
  String? createdAt;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['lotId'] = lotId;
data['lotName'] = lotName;
data['placeId'] = placeId;
data['placeNum'] = placeNum;
data['deviceId'] = deviceId;
data['deviceSn'] = deviceSn;
data['voltage'] = voltage;
data['level'] = level;
data['processId'] = processId;
data['processUser'] = processUser;
data['processStatus'] = processStatus;
data['processAt'] = processAt;
data['url'] = url;
data['createdAt'] = createdAt; 
        return data;
      }

      DeviceVoltageMsg(
        { 
          this.id,
this.lotId,
this.lotName,
this.placeId,
this.placeNum,
this.deviceId,
this.deviceSn,
this.voltage,
this.level,
this.processId,
this.processUser,
this.processStatus,
this.processAt,
this.url,
this.createdAt});



       

      DeviceVoltageMsg.fromJson(Map<String, dynamic> json) {

        id=json['id'];
lotId=json['lotId'];
lotName=json['lotName'];
placeId=json['placeId'];
placeNum=json['placeNum'];
deviceId=json['deviceId'];
deviceSn=json['deviceSn'];
voltage=json['voltage'];
level=json['level'];
processId=json['processId'];
processUser=json['processUser'];
processStatus=json['processStatus'];
processAt=json['processAt'];
url=json['url'];
createdAt=json['createdAt'];
         
      }

    } 
    class DeviceFaultSearchDto{
     /// 0未处理 1处理中 2已处理 
 int? type;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['type'] = type; 
        return data;
      }

      DeviceFaultSearchDto(
        { 
          this.type});



       

      DeviceFaultSearchDto.fromJson(Map<String, dynamic> json) {

        type=json['type'];
         
      }

    } 
    class DeviceFaultMsgVo{
      String? id;
  String? pplId;
  String? errorMsg;
  String? checkerId;
  String? checkUser;
  String? checkerAt;
  String? processId;
  String? processUser;
  MsgType? processStatus;
  String? processAt;
  String? processResult;
  String? url;
  bool? wrong;
  String? createdAt;
  String? address;
  String? placeNum;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['pplId'] = pplId;
data['errorMsg'] = errorMsg;
data['checkerId'] = checkerId;
data['checkUser'] = checkUser;
data['checkerAt'] = checkerAt;
data['processId'] = processId;
data['processUser'] = processUser;
data['processStatus'] =  processStatus?.toJson();
data['processAt'] = processAt;
data['processResult'] = processResult;
data['url'] = url;
data['wrong'] = wrong;
data['createdAt'] = createdAt;
data['address'] = address;
data['placeNum'] = placeNum; 
        return data;
      }

      DeviceFaultMsgVo(
        { 
          this.id,
this.pplId,
this.errorMsg,
this.checkerId,
this.checkUser,
this.checkerAt,
this.processId,
this.processUser,
this.processStatus,
this.processAt,
this.processResult,
this.url,
this.wrong,
this.createdAt,
this.address,
this.placeNum});



       

      DeviceFaultMsgVo.fromJson(Map<String, dynamic> json) {

        id=json['id'];
pplId=json['pplId'];
errorMsg=json['errorMsg'];
checkerId=json['checkerId'];
checkUser=json['checkUser'];
checkerAt=json['checkerAt'];
processId=json['processId'];
processUser=json['processUser'];

            if (json['processStatus'] != null) {
              processStatus = MsgType.fromJson(json['processStatus']);
            }
processAt=json['processAt'];
processResult=json['processResult'];
url=json['url'];
wrong=json['wrong'];
createdAt=json['createdAt'];
address=json['address'];
placeNum=json['placeNum'];
         
      }

    } 
    class PatrolUser{
      String? id;
  String? jobNum;
  String? password;
  String? salt;
  String? name;
  String? avatar;
  String? phone;
  String? idCard;
  String? birthday;
  MsgType? sex;
  MsgType? workStatus;
  MsgType? type;
  String? clientId;
  bool? active;
  String? groupId;
  List<String>? lastLotIds;
  String? lotId;
  bool? special;
  String? createdAt;
  String? updatedAt;
  bool? deleted;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['jobNum'] = jobNum;
data['password'] = password;
data['salt'] = salt;
data['name'] = name;
data['avatar'] = avatar;
data['phone'] = phone;
data['idCard'] = idCard;
data['birthday'] = birthday;
data['sex'] =  sex?.toJson();
data['workStatus'] =  workStatus?.toJson();
data['type'] =  type?.toJson();
data['clientId'] = clientId;
data['active'] = active;
data['groupId'] = groupId;
data['lastLotIds'] = lastLotIds;
data['lotId'] = lotId;
data['special'] = special;
data['createdAt'] = createdAt;
data['updatedAt'] = updatedAt;
data['deleted'] = deleted; 
        return data;
      }

      PatrolUser(
        { 
          this.id,
this.jobNum,
this.password,
this.salt,
this.name,
this.avatar,
this.phone,
this.idCard,
this.birthday,
this.sex,
this.workStatus,
this.type,
this.clientId,
this.active,
this.groupId,
this.lastLotIds,
this.lotId,
this.special,
this.createdAt,
this.updatedAt,
this.deleted});



       

      PatrolUser.fromJson(Map<String, dynamic> json) {

        id=json['id'];
jobNum=json['jobNum'];
password=json['password'];
salt=json['salt'];
name=json['name'];
avatar=json['avatar'];
phone=json['phone'];
idCard=json['idCard'];
birthday=json['birthday'];

            if (json['sex'] != null) {
              sex = MsgType.fromJson(json['sex']);
            }

            if (json['workStatus'] != null) {
              workStatus = MsgType.fromJson(json['workStatus']);
            }

            if (json['type'] != null) {
              type = MsgType.fromJson(json['type']);
            }
clientId=json['clientId'];
active=json['active'];
groupId=json['groupId'];
lastLotIds=json['lastLotIds']?.cast<String>();
lotId=json['lotId'];
special=json['special'];
createdAt=json['createdAt'];
updatedAt=json['updatedAt'];
deleted=json['deleted'];
         
      }

    } 
    class InOutExtraInfo{
      String? memberId;
  String? cardType;
  String? vehicleType;
  String? enterSerialNo;
  String? enterStation;
  String? enterUserId;
  String? exitSerialNo;
  String? exitStation;
  String? exitUserId;
  String? exitPic;
  int? totalAmount;
  int? paidAmount;
  int? freeAmount;
  int? payType;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['memberId'] = memberId;
data['cardType'] = cardType;
data['vehicleType'] = vehicleType;
data['enterSerialNo'] = enterSerialNo;
data['enterStation'] = enterStation;
data['enterUserId'] = enterUserId;
data['exitSerialNo'] = exitSerialNo;
data['exitStation'] = exitStation;
data['exitUserId'] = exitUserId;
data['exitPic'] = exitPic;
data['totalAmount'] = totalAmount;
data['paidAmount'] = paidAmount;
data['freeAmount'] = freeAmount;
data['payType'] = payType; 
        return data;
      }

      InOutExtraInfo(
        { 
          this.memberId,
this.cardType,
this.vehicleType,
this.enterSerialNo,
this.enterStation,
this.enterUserId,
this.exitSerialNo,
this.exitStation,
this.exitUserId,
this.exitPic,
this.totalAmount,
this.paidAmount,
this.freeAmount,
this.payType});



       

      InOutExtraInfo.fromJson(Map<String, dynamic> json) {

        memberId=json['memberId'];
cardType=json['cardType'];
vehicleType=json['vehicleType'];
enterSerialNo=json['enterSerialNo'];
enterStation=json['enterStation'];
enterUserId=json['enterUserId'];
exitSerialNo=json['exitSerialNo'];
exitStation=json['exitStation'];
exitUserId=json['exitUserId'];
exitPic=json['exitPic'];
totalAmount=json['totalAmount'];
paidAmount=json['paidAmount'];
freeAmount=json['freeAmount'];
payType=json['payType'];
         
      }

    } 
    class PayOrder{
      String? id;
  String? exId;
  String? carId;
  String? plateNumber;
  String? startAt;
  String? lotId;
  String? lotName;
  String? placeId;
  String? placeNum;
  String? picture;
  MsgType? beginType;
  bool? merged;
  String? pdaEndAt;
  MsgType? chargeType;
  bool? retake;
  String? createdAt;
  InOutExtraInfo? extraInfo;
  MsgType? status;
  String? payAt;
  MsgType? payOrigin;
  MsgType? mode;
  int? originalMoney;
  int? targetMoney;
  int? realMoney;
  int? discountMoney;
  String? endAt;
  int? duringTime;
  String? payUserId;
  MsgType? endType;
  String? updatedAt;
  bool? deleted;
  String? address;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['exId'] = exId;
data['carId'] = carId;
data['plateNumber'] = plateNumber;
data['startAt'] = startAt;
data['lotId'] = lotId;
data['lotName'] = lotName;
data['placeId'] = placeId;
data['placeNum'] = placeNum;
data['picture'] = picture;
data['beginType'] =  beginType?.toJson();
data['merged'] = merged;
data['pdaEndAt'] = pdaEndAt;
data['chargeType'] =  chargeType?.toJson();
data['retake'] = retake;
data['createdAt'] = createdAt;
data['extraInfo'] =  extraInfo?.toJson();
data['status'] =  status?.toJson();
data['payAt'] = payAt;
data['payOrigin'] =  payOrigin?.toJson();
data['mode'] =  mode?.toJson();
data['originalMoney'] = originalMoney;
data['targetMoney'] = targetMoney;
data['realMoney'] = realMoney;
data['discountMoney'] = discountMoney;
data['endAt'] = endAt;
data['duringTime'] = duringTime;
data['payUserId'] = payUserId;
data['endType'] =  endType?.toJson();
data['updatedAt'] = updatedAt;
data['deleted'] = deleted;
data['address'] = address; 
        return data;
      }

      PayOrder(
        { 
          this.id,
this.exId,
this.carId,
this.plateNumber,
this.startAt,
this.lotId,
this.lotName,
this.placeId,
this.placeNum,
this.picture,
this.beginType,
this.merged,
this.pdaEndAt,
this.chargeType,
this.retake,
this.createdAt,
this.extraInfo,
this.status,
this.payAt,
this.payOrigin,
this.mode,
this.originalMoney,
this.targetMoney,
this.realMoney,
this.discountMoney,
this.endAt,
this.duringTime,
this.payUserId,
this.endType,
this.updatedAt,
this.deleted,
this.address});



       

      PayOrder.fromJson(Map<String, dynamic> json) {

        id=json['id'];
exId=json['exId'];
carId=json['carId'];
plateNumber=json['plateNumber'];
startAt=json['startAt'];
lotId=json['lotId'];
lotName=json['lotName'];
placeId=json['placeId'];
placeNum=json['placeNum'];
picture=json['picture'];

            if (json['beginType'] != null) {
              beginType = MsgType.fromJson(json['beginType']);
            }
merged=json['merged'];
pdaEndAt=json['pdaEndAt'];

            if (json['chargeType'] != null) {
              chargeType = MsgType.fromJson(json['chargeType']);
            }
retake=json['retake'];
createdAt=json['createdAt'];

            if (json['extraInfo'] != null) {
              extraInfo = InOutExtraInfo.fromJson(json['extraInfo']);
            }

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
payAt=json['payAt'];

            if (json['payOrigin'] != null) {
              payOrigin = MsgType.fromJson(json['payOrigin']);
            }

            if (json['mode'] != null) {
              mode = MsgType.fromJson(json['mode']);
            }
originalMoney=json['originalMoney'];
targetMoney=json['targetMoney'];
realMoney=json['realMoney'];
discountMoney=json['discountMoney'];
endAt=json['endAt'];
duringTime=json['duringTime'];
payUserId=json['payUserId'];

            if (json['endType'] != null) {
              endType = MsgType.fromJson(json['endType']);
            }
updatedAt=json['updatedAt'];
deleted=json['deleted'];
address=json['address'];
         
      }

    } 
    class PplMsgDto{
      String? pplId;
 /// 日期-非必须,传了查当天所有 
 String? date;
 /// 不传查所有,1信号数据 2心跳数据 
 int? type;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['pplId'] = pplId;
data['date'] = date;
data['type'] = type; 
        return data;
      }

      PplMsgDto(
        { 
          this.pplId,
this.date,
this.type});



       

      PplMsgDto.fromJson(Map<String, dynamic> json) {

        pplId=json['pplId'];
date=json['date'];
type=json['type'];
         
      }

    } 
    class PplLog{
      String? id;
  String? pplId;
  MsgType? signType;
  String? msgTime;
  String? msgBody;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['pplId'] = pplId;
data['signType'] =  signType?.toJson();
data['msgTime'] = msgTime;
data['msgBody'] = msgBody; 
        return data;
      }

      PplLog(
        { 
          this.id,
this.pplId,
this.signType,
this.msgTime,
this.msgBody});



       

      PplLog.fromJson(Map<String, dynamic> json) {

        id=json['id'];
pplId=json['pplId'];

            if (json['signType'] != null) {
              signType = MsgType.fromJson(json['signType']);
            }
msgTime=json['msgTime'];
msgBody=json['msgBody'];
         
      }

    } 
    class ManageInfo{
      String? lotId;
  String? address;
  String? placeId;
  String? placeNum;
  String? pplId;
  String? deviceSn;
  String? qrcodeSn;
  bool? online;
  bool? enabled;
  String? deviceState;
  String? ver;
  MsgType? type;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['lotId'] = lotId;
data['address'] = address;
data['placeId'] = placeId;
data['placeNum'] = placeNum;
data['pplId'] = pplId;
data['deviceSn'] = deviceSn;
data['qrcodeSn'] = qrcodeSn;
data['online'] = online;
data['enabled'] = enabled;
data['deviceState'] = deviceState;
data['ver'] = ver;
data['type'] =  type?.toJson(); 
        return data;
      }

      ManageInfo(
        { 
          this.lotId,
this.address,
this.placeId,
this.placeNum,
this.pplId,
this.deviceSn,
this.qrcodeSn,
this.online,
this.enabled,
this.deviceState,
this.ver,
this.type});



       

      ManageInfo.fromJson(Map<String, dynamic> json) {

        lotId=json['lotId'];
address=json['address'];
placeId=json['placeId'];
placeNum=json['placeNum'];
pplId=json['pplId'];
deviceSn=json['deviceSn'];
qrcodeSn=json['qrcodeSn'];
online=json['online'];
enabled=json['enabled'];
deviceState=json['deviceState'];
ver=json['ver'];

            if (json['type'] != null) {
              type = MsgType.fromJson(json['type']);
            }
         
      }

    } 
    class GeomLog{
      String? id;
  String? geomId;
  String? msgTime;
  String? msgBody;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['geomId'] = geomId;
data['msgTime'] = msgTime;
data['msgBody'] = msgBody; 
        return data;
      }

      GeomLog(
        { 
          this.id,
this.geomId,
this.msgTime,
this.msgBody});



       

      GeomLog.fromJson(Map<String, dynamic> json) {

        id=json['id'];
geomId=json['geomId'];
msgTime=json['msgTime'];
msgBody=json['msgBody'];
         
      }

    } 
    class GeomHeart{
      String? id;
  String? geomId;
  String? msgTime;
  String? msgBody;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['geomId'] = geomId;
data['msgTime'] = msgTime;
data['msgBody'] = msgBody; 
        return data;
      }

      GeomHeart(
        { 
          this.id,
this.geomId,
this.msgTime,
this.msgBody});



       

      GeomHeart.fromJson(Map<String, dynamic> json) {

        id=json['id'];
geomId=json['geomId'];
msgTime=json['msgTime'];
msgBody=json['msgBody'];
         
      }

    } 
    class LotInfoTop{
     /// 车位总数 
 int? total;
 /// 空闲车位数 
 int? free;
 /// 总收入 
 int? income;
 /// 欠费 
 int? arrears;
 /// 应收费已拍照总数 
 int? chargePhotoCount;
 /// 应收费总数 
 int? chargeCount;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['total'] = total;
data['free'] = free;
data['income'] = income;
data['arrears'] = arrears;
data['chargePhotoCount'] = chargePhotoCount;
data['chargeCount'] = chargeCount; 
        return data;
      }

      LotInfoTop(
        { 
          this.total,
this.free,
this.income,
this.arrears,
this.chargePhotoCount,
this.chargeCount});



       

      LotInfoTop.fromJson(Map<String, dynamic> json) {

        total=json['total'];
free=json['free'];
income=json['income'];
arrears=json['arrears'];
chargePhotoCount=json['chargePhotoCount'];
chargeCount=json['chargeCount'];
         
      }

    } 
    class LotItemPlaces{
      String? id;
 /// 停车位ID 
 String? placeId;
 /// 停车位编码 
 String? placeNum;
 /// 停车位状态 
 MsgType? status;
 /// 车牌号 
 String? carNumber;
 /// 开始停车时间 
 String? startAt;
 /// 倒计时剩余时间 
 int? leavingTime;
 /// 图片地址 
 String? picture;
 /// 缴费类型 
 MsgType? chargeType;
 /// 设备编码-地锁才有 
 String? deviceNum;
 /// 设备电压-地锁才有 
 double? voltage;
 /// 地锁类型 
 MsgType? pplType;
 /// 是否完成补拍 
 bool? retake;
  MsgType? type;
 /// 地锁在线状态 
 bool? pplOnline;
 /// 是否存在欠费 
 bool? overdue;
 /// 欠费笔数-可空 
 int? overdueTotal;
 /// 欠费金额分-可空 
 int? overdueAmount;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['placeId'] = placeId;
data['placeNum'] = placeNum;
data['status'] =  status?.toJson();
data['carNumber'] = carNumber;
data['startAt'] = startAt;
data['leavingTime'] = leavingTime;
data['picture'] = picture;
data['chargeType'] =  chargeType?.toJson();
data['deviceNum'] = deviceNum;
data['voltage'] = voltage;
data['pplType'] =  pplType?.toJson();
data['retake'] = retake;
data['type'] =  type?.toJson();
data['pplOnline'] = pplOnline;
data['overdue'] = overdue;
data['overdueTotal'] = overdueTotal;
data['overdueAmount'] = overdueAmount; 
        return data;
      }

      LotItemPlaces(
        { 
          this.id,
this.placeId,
this.placeNum,
this.status,
this.carNumber,
this.startAt,
this.leavingTime,
this.picture,
this.chargeType,
this.deviceNum,
this.voltage,
this.pplType,
this.retake,
this.type,
this.pplOnline,
this.overdue,
this.overdueTotal,
this.overdueAmount});



       

      LotItemPlaces.fromJson(Map<String, dynamic> json) {

        id=json['id'];
placeId=json['placeId'];
placeNum=json['placeNum'];

            if (json['status'] != null) {
              status = MsgType.fromJson(json['status']);
            }
carNumber=json['carNumber'];
startAt=json['startAt'];
leavingTime=json['leavingTime'];
picture=json['picture'];

            if (json['chargeType'] != null) {
              chargeType = MsgType.fromJson(json['chargeType']);
            }
deviceNum=json['deviceNum'];
voltage=json['voltage'];

            if (json['pplType'] != null) {
              pplType = MsgType.fromJson(json['pplType']);
            }
retake=json['retake'];

            if (json['type'] != null) {
              type = MsgType.fromJson(json['type']);
            }
pplOnline=json['pplOnline'];
overdue=json['overdue'];
overdueTotal=json['overdueTotal'];
overdueAmount=json['overdueAmount'];
         
      }

    } 
    class LotIncomeDto{
     /// 日期-默认当天 
 String? date;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['date'] = date; 
        return data;
      }

      LotIncomeDto(
        { 
          this.date});



       

      LotIncomeDto.fromJson(Map<String, dynamic> json) {

        date=json['date'];
         
      }

    } 
    class PatrolIncomeLot{
     /// 总收入 
 int? generalIncome;
 /// 欠费 
 int? arrears;
 /// 拍照率 
 String? chargeRate;
 /// 已拍照订单数量 
 int? blueTotal;
 /// 总订单数量 
 int? total;
 /// 现金支付 
 int? cashPay;
 /// 代收现金 
 int? cashTake;
 /// 微信扫码支付 
 int? wechatPay;
 /// 微信小程序支付 
 int? wechatMpPay;
 /// 支付宝支付 
 int? aliPay;
 /// 余额支付 
 int? balancePay;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['generalIncome'] = generalIncome;
data['arrears'] = arrears;
data['chargeRate'] = chargeRate;
data['blueTotal'] = blueTotal;
data['total'] = total;
data['cashPay'] = cashPay;
data['cashTake'] = cashTake;
data['wechatPay'] = wechatPay;
data['wechatMpPay'] = wechatMpPay;
data['aliPay'] = aliPay;
data['balancePay'] = balancePay; 
        return data;
      }

      PatrolIncomeLot(
        { 
          this.generalIncome,
this.arrears,
this.chargeRate,
this.blueTotal,
this.total,
this.cashPay,
this.cashTake,
this.wechatPay,
this.wechatMpPay,
this.aliPay,
this.balancePay});



       

      PatrolIncomeLot.fromJson(Map<String, dynamic> json) {

        generalIncome=json['generalIncome'];
arrears=json['arrears'];
chargeRate=json['chargeRate'];
blueTotal=json['blueTotal'];
total=json['total'];
cashPay=json['cashPay'];
cashTake=json['cashTake'];
wechatPay=json['wechatPay'];
wechatMpPay=json['wechatMpPay'];
aliPay=json['aliPay'];
balancePay=json['balancePay'];
         
      }

    } 
    class IndexLot{
     /// 点位ID 
 String? id;
 /// 点位名称 
 String? name;
 /// 收费员名称-可无 
 String? pdaUserName;
 /// 收费员电话-可无 
 String? pdaUserPhone;
 /// 点位类型 
 MsgType? type;
 /// 总数 
 int? total;
 /// 停车中 
 int? online;
 /// 未拍照数 
 int? unPic;
 /// 空闲数 
 int? free;
 /// 故障数 
 int? error;
 /// 离线数 
 int? offline;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['id'] = id;
data['name'] = name;
data['pdaUserName'] = pdaUserName;
data['pdaUserPhone'] = pdaUserPhone;
data['type'] =  type?.toJson();
data['total'] = total;
data['online'] = online;
data['unPic'] = unPic;
data['free'] = free;
data['error'] = error;
data['offline'] = offline; 
        return data;
      }

      IndexLot(
        { 
          this.id,
this.name,
this.pdaUserName,
this.pdaUserPhone,
this.type,
this.total,
this.online,
this.unPic,
this.free,
this.error,
this.offline});



       

      IndexLot.fromJson(Map<String, dynamic> json) {

        id=json['id'];
name=json['name'];
pdaUserName=json['pdaUserName'];
pdaUserPhone=json['pdaUserPhone'];

            if (json['type'] != null) {
              type = MsgType.fromJson(json['type']);
            }
total=json['total'];
online=json['online'];
unPic=json['unPic'];
free=json['free'];
error=json['error'];
offline=json['offline'];
         
      }

    } 
    class PatrolIncome{
     /// 总收入 
 int? generalIncome;
 /// 欠费 
 int? arrears;
 /// 代收现金 
 int? cashTake;
 /// 现金支付 
 int? cashPay;
 /// 微信扫码支付 
 int? wechatPay;
 /// 微信小程序支付 
 int? wechatMpPay;
 /// 支付宝支付 
 int? aliPay;
 /// 余额支付 
 int? balancePay;
 /// 姓名 
 String? pdaUserName;
 /// 电话号码 
 String? pdaUserPhone;
  String? lotName;
  String? lotId;
 /// 已拍照订单数量 
 int? blueTotal;
 /// 总订单数量 
 int? total;
  List<PatrolIncome>? children;
 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        data['generalIncome'] = generalIncome;
data['arrears'] = arrears;
data['cashTake'] = cashTake;
data['cashPay'] = cashPay;
data['wechatPay'] = wechatPay;
data['wechatMpPay'] = wechatMpPay;
data['aliPay'] = aliPay;
data['balancePay'] = balancePay;
data['pdaUserName'] = pdaUserName;
data['pdaUserPhone'] = pdaUserPhone;
data['lotName'] = lotName;
data['lotId'] = lotId;
data['blueTotal'] = blueTotal;
data['total'] = total;

                if (children != null) {
                  data['e.key'] =  children?.map((v) => v.toJson()).toList();
                }
                 
        return data;
      }

      PatrolIncome(
        { 
          this.generalIncome,
this.arrears,
this.cashTake,
this.cashPay,
this.wechatPay,
this.wechatMpPay,
this.aliPay,
this.balancePay,
this.pdaUserName,
this.pdaUserPhone,
this.lotName,
this.lotId,
this.blueTotal,
this.total,
this.children});



       

      PatrolIncome.fromJson(Map<String, dynamic> json) {

        generalIncome=json['generalIncome'];
arrears=json['arrears'];
cashTake=json['cashTake'];
cashPay=json['cashPay'];
wechatPay=json['wechatPay'];
wechatMpPay=json['wechatMpPay'];
aliPay=json['aliPay'];
balancePay=json['balancePay'];
pdaUserName=json['pdaUserName'];
pdaUserPhone=json['pdaUserPhone'];
lotName=json['lotName'];
lotId=json['lotId'];
blueTotal=json['blueTotal'];
total=json['total'];
 
                if (json['children'] != null) {
                  children =[];
                  json['children'].forEach((v) {
                    children?.add(PatrolIncome.fromJson(v)); 
                  });
                }
                
         
      }

    } 
              