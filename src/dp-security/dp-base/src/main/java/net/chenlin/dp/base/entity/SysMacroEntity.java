package net.chenlin.dp.base.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * 通用字典
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月15日 下午12:34:37
 */
public class SysMacroEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	/**
	 * 字典id
	 */
	private Long macroId;
	
	/**
	 * 类型id
	 */
	private Long typeId;
	
	/**
	 * 类型名称
	 */
	private String typeName;
	
	/**
	 * 字典码
	 */
	private String name;
	
	/**
	 * 字典值
	 */
	private String value;
	
	/**
	 * 状态(1:显示, 0:隐藏)
	 */
	private Integer status;
	
	/**
	 * 类型(1:参数, 0:目录)
	 */
	private Integer type;
	
	/**
	 * 排序
	 */
	private Integer orderNum;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 创建时间
	 */
	private Timestamp gmtCreate;
	
	/**
	 * 修改时间
	 */
	private Timestamp gmtModified;
	
	/**
	 * ztree属性
	 */
	private Boolean open;
	
	private List<?> list;

	public SysMacroEntity() {
		super();
	}

	public Long getMacroId() {
		return macroId;
	}

	public void setMacroId(Long macroId) {
		this.macroId = macroId;
	}

	public Long getTypeId() {
		return typeId;
	}

	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Integer getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Timestamp getGmtCreate() {
		return gmtCreate;
	}

	public void setGmtCreate(Timestamp gmtCreate) {
		this.gmtCreate = gmtCreate;
	}

	public Timestamp getGmtModified() {
		return gmtModified;
	}

	public void setGmtModified(Timestamp gmtModified) {
		this.gmtModified = gmtModified;
	}

	public Boolean getOpen() {
		return open;
	}

	public void setOpen(Boolean open) {
		this.open = open;
	}

	public List<?> getList() {
		return list;
	}

	public void setList(List<?> list) {
		this.list = list;
	}

}
