/*
 * @Date: 2021-01-19 11:19:36
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-10-12 08:55:41
 * @FilePath: /swaggerapits/types/common_model.dart
 */

// 分页对象
// 分页对象
class PagingType {
  int pageNum = 0;
  int pageSize = 10;
  bool? status;

  String? accountId;
  bool? cash;
  int? type;

  String? day;
  String? devNo;

  PagingType(
      {required this.pageNum,
      required this.pageSize,
      this.status,
      this.accountId,
      this.cash,
      this.day,
      this.devNo,
      this.type});

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    // data['orderBy'] = this.orderBy;
    data['pageNum'] = pageNum;
    data['pageSize'] = pageSize;
    if (status != null) data['status'] = status;
    if (accountId != null) data['accountId'] = accountId;
    if (cash != null) data['cash'] = cash;
    if (type != null) data['type'] = type;
    if (day != null) data['day'] = day;
    if (devNo != null) data['devNo'] = devNo;
    return data;
  }
}

// 通用type
class MsgType {
  String? node;
  int? type;
  bool? free;
  bool? ppl;
  bool? special;
  int? value;

  MsgType(
      {this.node, this.type, this.free, this.value, this.ppl, this.special});

  MsgType.fromJson(Map<String, dynamic> json) {
    node = json['node'];
    type = json['type'];
    free = json['free'];
    ppl = json['ppl'];
    special = json['special'];
    value = json['value'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['node'] = node;
    data['type'] = type;
    data['free'] = free;
    data['ppl'] = ppl;
    data['special'] = special;
    data['value'] = value;

    return data;
  }
}

// 状态
class Status {
  String? node;
  bool? type;
  Status({this.node, this.type});
  Status.fromJson(Map<String, dynamic> json) {
    node = json['node'];
    type = json['type'];
  }
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['node'] = node;
    data['type'] = type;
    return data;
  }
}

/// 环境model
class EnvConfig {
  final String baseUrl;
  final String qrUrl;
  EnvConfig({required this.baseUrl, required this.qrUrl});
}

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
