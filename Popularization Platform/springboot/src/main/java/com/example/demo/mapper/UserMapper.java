package com.example.demo.mapper;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.domain.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * @Entity com.example.demo.domain.User
 */
public interface UserMapper extends BaseMapper<User> {

    List<User> selectList(Page<User>  page, User user);
}




