package net.chenlin.dp.base.dao;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import net.chenlin.dp.base.entity.SysMacroEntity;
import net.chenlin.dp.common.dao.BaseMapper;

/**
 * 通用字典
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月15日 下午12:46:31
 */
@MapperScan
public interface SysMacroMapper extends BaseMapper<SysMacroEntity> {

	List<SysMacroEntity> listNotMacro();
	
}
