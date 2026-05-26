package com.pharmadesk.backend.controller;

import com.pharmadesk.backend.model.Role;
import com.pharmadesk.backend.model.User;
import com.pharmadesk.backend.repository.UserRepository;
import com.pharmadesk.backend.security.JwtUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthV1Controller {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;

    public AuthV1Controller(AuthenticationManager authenticationManager, 
                            JwtUtils jwtUtils, 
                            UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> authenticateUser(@RequestBody Map<String, String> loginRequest) {
        try {
            String employeeId = loginRequest.get("employeeId");
            User user = userRepository.findByEmployeeId(employeeId)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequest.get("password")));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            String roleName = "EMPLOYEE";
            for (GrantedAuthority authority : authentication.getAuthorities()) {
                String auth = authority.getAuthority();
                if (auth.equals("ROLE_SYSTEM_ADMIN") || auth.equals("ROLE_SUPERVISOR")) {
                    roleName = "ADMIN";
                    break;
                }
            }

            Map<String, Object> data = new HashMap<>();
            data.put("token", jwt);
            data.put("role", roleName);
            data.put("fullName", user.getName());
            data.put("employeeId", user.getEmployeeId());
            data.put("username", user.getUsername());

            return ResponseEntity.ok(data);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Invalid employee ID or password");
            return ResponseEntity.status(401).body(error);
        }
    }

    @GetMapping("/check-role")
    public ResponseEntity<Map<String, Object>> checkRole(@RequestParam String employeeId) {
        Optional<User> userOpt = userRepository.findByEmployeeId(employeeId);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            String roleName = "EMPLOYEE";
            for (Role role : user.getRoles()) {
                if (role.getName().equals("SYSTEM_ADMIN") || role.getName().equals("SUPERVISOR")) {
                    roleName = "ADMIN";
                    break;
                }
            }
            Map<String, Object> data = new HashMap<>();
            data.put("role", roleName);
            return ResponseEntity.ok(data);
        }
        return ResponseEntity.notFound().build();
    }
}
