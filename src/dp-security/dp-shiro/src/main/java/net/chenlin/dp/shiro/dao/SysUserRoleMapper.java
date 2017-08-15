package net.chenlin.dp.shiro.dao;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import net.chenlin.dp.common.dao.BaseMapper;
import net.chenlin.dp.shiro.entity.SysUserRoleEntity;

/**
 * 用户与角色关系
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月13日 上午1:01:55
 */
@MapperScan
public interface SysUserRoleMapper extends BaseMapper<SysUserRoleEntity> {

	List<Long> listUserRoleId(Long userId);
	
	int batchRemoveByUserId(Long[] id);
	
	int batchRemoveByRoleId(Long[] id);
	
}
