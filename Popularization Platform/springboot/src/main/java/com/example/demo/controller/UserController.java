package com.example.demo.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.example.demo.domain.User;
import com.example.demo.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    UserService userService;


    @GetMapping (value = "/getUserList")
    @ResponseBody
    @ApiOperation(value = "查询用户列表数据")
    public ResponseEntity<IPage<User>> getUserList(HttpServletRequest request,@RequestParam(required = false, defaultValue = "1") Integer pageCurrent,
                                                   @RequestParam(required = false, defaultValue = "5") Integer pageNum, User  user){
        IPage<User> iPage = userService.pageQuery(pageCurrent,pageNum,user);
        return ResponseEntity.ok(iPage);
    }
    @ApiOperation(value = "查询用户详情")
    @GetMapping("/selectById")
    public ResponseEntity<User> selectById(String id){
        User user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

}
