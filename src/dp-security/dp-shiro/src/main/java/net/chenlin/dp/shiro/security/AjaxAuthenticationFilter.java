package net.chenlin.dp.shiro.security;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.web.filter.authc.AuthenticationFilter;

import net.chenlin.dp.common.entity.R;
import net.chenlin.dp.common.utils.WebUtils;

/**
 * shiro ajax 认证
 *
 * @author ZhouChenglin
 * @email yczclcn@163.com
 * @url www.chenlintech.com
 * @date 2017年8月13日 下午3:09:22
 */
public class AjaxAuthenticationFilter extends AuthenticationFilter {

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		HttpServletRequest httpReq = (HttpServletRequest) request;
		if(WebUtils.isAjax(httpReq)) {
			System.err.println("ajax 登录验证");
			HttpServletResponse httpRes = (HttpServletResponse) response;
			R r = R.error(401, "未登录");
			WebUtils.write(httpRes, r);
		}
		return false;
	}


	
}
