/*
 * @Date: 2023-11-17 15:37:23
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-11-17 15:40:16
 * @FilePath: /swaggerapits/src/const.js
 */
export const TsxOtherType = `
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
`



export const FlutterOtherType = `

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
  
`