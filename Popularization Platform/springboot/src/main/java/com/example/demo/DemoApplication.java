package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@EnableCaching
@SpringBootApplication
@MapperScan(basePackages = "com.example.demo.mapper")
public class DemoApplication {
	public static ApplicationContext context;
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);
		CacheManager bean = context.getBean(CacheManager.class);
		System.out.println(bean);
		DemoApplication.context = context;
	}
}
