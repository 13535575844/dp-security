package net.chenlin.dp.shiro.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * 菜单
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月9日 下午11:15:17
 */
public class SysMenuEntity implements Serializable {
	
	private static final long serialVersionUID = 1L;

	/**
	 * 菜单id
	 */
	private Long menuId;
	
	/**
	 * 父级id，一级菜单为0
	 */
	private Long parentId;
	
	/**
	 * 父级菜单名称
	 */
	private String parentName;
	
	/**
	 * 菜单名称
	 */
	private String name;
	
	/**
	 * 菜单url
	 */
	private String url;
	
	/**
	 * 授权标识(多个用逗号分隔，如：user:list,user:create)
	 */
	private String perms;
	
	/**
	 * 类型(0：目录   1：菜单   2：按钮)
	 */
	private Integer type;
	
	/**
	 * 菜单图标
	 */
	private String icon;
	
	/**
	 * 排序
	 */
	private Integer orderNum;
	
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

	public SysMenuEntity() {
		super();
	}

	public Long getMenuId() {
		return menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getPerms() {
		return perms;
	}

	public void setPerms(String perms) {
		this.perms = perms;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public Integer getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
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
