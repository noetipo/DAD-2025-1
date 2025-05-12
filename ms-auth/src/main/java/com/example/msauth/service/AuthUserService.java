package com.example.msauth.service;

import com.example.msauth.dto.AuthUserDto;
import com.example.msauth.dto.TokenDto;
import com.example.msauth.entity.AuthUser;



public interface AuthUserService {
    public AuthUser save(AuthUserDto authUserDto);


    public TokenDto login(AuthUserDto authUserDto);


    public TokenDto validate(String token);
}
