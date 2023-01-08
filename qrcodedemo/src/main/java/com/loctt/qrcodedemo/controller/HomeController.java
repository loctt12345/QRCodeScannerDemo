/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.loctt.qrcodedemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author loc12345
 */
@Controller
public class HomeController {
    
    @RequestMapping(value = "/")
    public String home() {
        return "home";
    }
    
    @RequestMapping("/show")
    public String show() {
        return "index";
    }
}
