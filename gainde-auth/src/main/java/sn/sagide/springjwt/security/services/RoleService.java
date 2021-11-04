package sn.sagide.springjwt.security.services;

import sn.sagide.springjwt.models.Role;
import sn.sagide.springjwt.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public String getRoleName(String cdRole) {
        Optional<Role> role = Optional.ofNullable(this.roleRepository.findByCdRole(cdRole)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found.")));

        return role.map(Role::getRoleDescription).orElse(null);
    }
}
