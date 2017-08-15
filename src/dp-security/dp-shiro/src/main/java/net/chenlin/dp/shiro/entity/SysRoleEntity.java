package net.chenlin.dp.shiro.entity;


import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * 角色
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月10日 上午10:48:22
 */
public class SysRoleEntity implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	/**
	 * 角色id
	 */
	private Long roleId;

	/**
	 * 角色名称
	 */
	private String roleName;
	
	/**
	 * 角色标识
	 */
	private String roleSign;

	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 创建者id
	 */
	private Long userIdCreate;
	
	private List<Long> menuIdList;
	
	/**
	 * 创建时间
	 */
	private Timestamp gmtCreate;
	
	/**
	 * 修改时间
	 */
	private Timestamp gmtModified;

	public SysRoleEntity() {
		super();
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleSign() {
		return roleSign;
	}

	public void setRoleSign(String roleSign) {
		this.roleSign = roleSign;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Long getUserIdCreate() {
		return userIdCreate;
	}

	public void setUserIdCreate(Long userIdCreate) {
		this.userIdCreate = userIdCreate;
	}

	public List<Long> getMenuIdList() {
		return menuIdList;
	}

	public void setMenuIdList(List<Long> menuIdList) {
		this.menuIdList = menuIdList;
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
	
}
