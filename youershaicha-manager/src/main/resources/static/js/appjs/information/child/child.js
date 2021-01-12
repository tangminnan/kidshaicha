
var prefix = "/information/child"
$(function() {
	load();
});

function load() {
	$('#exampleTable')
			.bootstrapTable(
					{
						method : 'get', // 服务器数据的请求方式 get or post
						url : prefix + "/list", // 服务器数据的加载地址
					//	showRefresh : true,
					//	showToggle : true,
					//	showColumns : true,
						iconSize : 'outline',
						toolbar : '#exampleToolbar',
						striped : true, // 设置为true会有隔行变色效果
						dataType : "json", // 服务器返回的数据类型
						pagination : true, // 设置为true会在底部显示分页条
						// queryParamsType : "limit",
						// //设置为limit则会发送符合RESTFull格式的参数
						singleSelect : false, // 设置为true将禁止多选
						// contentType : "application/x-www-form-urlencoded",
						// //发送到服务器的数据编码类型
						pageSize : 10, // 如果设置了分页，每页数据条数
						pageNumber : 1, // 如果设置了分布，首页页码
						//search : true, // 是否显示搜索框
						showColumns : false, // 是否显示内容下拉框（选择显示的列）
						sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
						queryParams : function(params) {
							return {
								//说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
								limit: params.limit,
								offset:params.offset
					           // name:$('#searchName').val(),
					           // username:$('#searchName').val()
							};
						},
						// //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
						// queryParamsType = 'limit' ,返回参数必须包含
						// limit, offset, search, sort, order 否则, 需要包含:
						// pageSize, pageNumber, searchText, sortName,
						// sortOrder.
						// 返回false将会终止请求
						columns : [
								{
									checkbox : true
								},
																/*{
									field : 'childId', 
									title : '主键' 
								},*/
																{
									field : 'childName', 
									title : '孩子姓名' 
								},
																{
									field : 'childBirthday', 
									title : '出生日期' 
								},
																{
									field : 'childIdcard', 
									title : '身份证号' 
								},
																{
									field : 'childGender', 
									title : '性别' ,
                                                                    formatter : function(value, row, index) {
																		if(value==0) return "男";
																		if(value==1) return "女";
																	}
								},
																{
									field : 'childType', 
									title : '出生类型',
																	formatter : function(value, row, index) {
																		if(value=="ZAOCHAN")
																			return "早产儿";
																		if(value=="DITIZHONG"){
																			return "低体重儿";
																		}
																		if(value=="单胎"){
																			return "单胎";
																		}
																		if(value=="SHUANGTAI"){
																			return "双胎";
																		}
																		if(value=="DUOTAI"){
																			return "多胎";
																		}
																	}
								},
																{
									field : 'motherName', 
									title : '母亲姓名' 
								},
																{
									field : 'motherIdcard', 
									title : '母亲身份证号' 
								},
																/*{
									field : 'motherEyeHis', 
									title : '母亲眼疾病家族史',
                                                                    formatter : function(value, row, index) {
																		if(value==0) return "无";
																		if(value==1) return "有";
																	}
								},*/
																{
									field : 'motherEyeIns', 
									title : ' 母亲眼疾病家族史' ,
                                                                    formatter : function(value, row, index) {
																		if(value=="JINSHI") return "近视";
																		if(value=="YUANSHI") return "远视";
																		if(value=="RUOSHI") return "弱视";
																	}
								},
																/*{
									field : 'fatherEyeHis', 
									title : '父亲眼疾病家族史' ,
                                                                    formatter : function(value, row, index) {
                                                                        if(value==0) return "无";
                                                                        if(value==1) return "有";
                                                                    }
								},*/
																{
									field : 'fatherEyeIns', 
									title : '父亲眼疾病家族史' ,
                                                                    formatter : function(value, row, index) {
                                                                        if(value=="JINSHI") return "近视";
                                                                        if(value=="YUANSHI") return "远视";
                                                                        if(value=="RUOSHI") return "弱视";
                                                                    }
								},
																{
									field : 'childAddress', 
									title : '家庭住址' 
								},
																{
									field : 'childMedicineHis', 
									title : '特殊药史' ,
                                                                    formatter : function(value, row, index) {
                                                                        if(value==0) return "无";
                                                                        if(value==1) return "有";
                                                                    }
								},
																{
									field : 'childMedicineIns', 
									title : '特殊药史' 
								},
																{
									field : 'childPhone', 
									title : '电话' 
								},
																{
									field : 'childDelivery', 
									title : '生产方式',
                                                                    formatter : function(value, row, index) {
                                                                        if(value=="SHUNCHAN") return "顺产";
                                                                        if(value=="PAOFUCHAN") return "剖腹产";
                                                                        if(value=="TAITOUXIYIN") return "胎头吸引";
                                                                    }
								},
																{
									field : 'childHistoryN', 
									title : '住院号' 
								},
																{
									field : 'childGestationalweek', 
									title : '孕周' 
								},
																{
									field : 'childWeight', 
									title : '出生时体重 KG' 
								},
																{
									field : 'childSuffocation', 
									title : '窒息史' ,
                                                                    formatter : function(value, row, index) {
                                                                        if(value==0) return "无";
                                                                        if(value==1) return "有";
                                                                    }
								},
																{
									field : 'childOxygen', 
									title : '吸氧史' ,
                                                                    formatter : function(value, row, index) {
                                                                        if(value==0) return "无";
                                                                        if(value==1) return "有";
                                                                    }
							},
																{
									field : 'childSpec', 
									title : '特殊情况' 
								},
																{
									title : '操作',
									field : 'id',
									align : 'center',
									formatter : function(value, row, index) {
                                        var e = '<a class="btn btn-success btn-xs" href="#" title="数据"  mce_href="#" onclick="lookdata(\''
                                            + row.childIdcard
                                            + '\')" style="text-decoration: none;">数据</a>';
                                        var d = '<a class="btn btn-success btn-xs" href="#" title="二维码"  mce_href="#" onclick="txcode(\''
                                            + row.childId
                                            + '\')" style="text-decoration: none;">二维码</a>';

                                        return e+d ;








									}
								} ]
					});
}
function reLoad() {
	$('#exampleTable').bootstrapTable('refresh');
}

function lookdata(childIdcard) {
	var age=-1;
    window.location.href="/information/child/getHistory/"+childIdcard+"/"+age;
}

/**
 *  二维码查看
 * @param childId
 */
function txcode(childId) {
    layer.open({
        type : 2,
        title : '二维码',
        maxmin : true,
        shadeClose : false, // 点击遮罩关闭层
        area : [ '450px', '520px' ],
        content : prefix + '/txcode/' + childId // iframe的url
    });
}

/*
 * 批量打印二维码
 */
function erweimadayin(){
    var rows = $('#exampleTable').bootstrapTable('getSelections'); // 返回所有选择的行，当没有选择的记录时，返回一个空数组
    if (rows.length == 0) {
        layer.msg("选择要打印的二维码");
        return;
    }
    var childIds=[];
    $.each(rows, function(i, row) {
        childIds[i] = row['childId'];
    });
    window.open("/information/child/batchdayinerweima?childIds="+childIds);
}


