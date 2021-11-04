package sn.sagide.springjwt.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import sn.sagide.springjwt.models.ERole;
import sn.sagide.springjwt.models.Role;
import sn.sagide.springjwt.models.User;
import sn.sagide.springjwt.repository.RoleRepository;
import sn.sagide.springjwt.repository.UserRepository;

import java.lang.reflect.Array;
import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

	Logger log = LoggerFactory.getLogger(this.getClass());

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserRepository userRepository;
	@Autowired
	PasswordEncoder passwordEncoder;

	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}

	@RequestMapping (method = RequestMethod.GET, value = "/data")
	public String testData() {
		try
		{
			log.info("Creating Roles");
			Role roleConsignataire = this.roleRepository.findByCdRole("consignataire").orElse(null);

			if( roleConsignataire == null ) {
				roleConsignataire = Role.builder()
						.withCdRole("consignataire")
						.withName(ERole.ROLE_CONSIGNATAIRE)
						.withRoleDescription("CONSIGNATAIRE")
						.build();
				this.roleRepository.save(roleConsignataire);
			}

			Role roleDeclarant = this.roleRepository.findByCdRole("declarant").orElse(null);

			if( roleDeclarant == null ) {
				roleDeclarant = Role.builder()
						.withCdRole("declarant")
						.withName(ERole.ROLE_DECLARANT)
						.withRoleDescription("DECLARANT")
						.build();
				this.roleRepository.save(roleDeclarant);
			}


			// Création des utilisateurs
			log.info("Creating users");
			Set<Role> roleSetConsignataire = new HashSet<>(Arrays.asList(roleConsignataire));
			User userConsignataire = User.builder()
					.withEmail("cons@sagide.com")
					.withPassword(this.passwordEncoder.encode("123456"))
					.withUsername("CDDDDDA")
					.withRoles(roleSetConsignataire)
					.build();

			this.userRepository.save(userConsignataire);

			Set<Role> roleSetDeclarant = new HashSet<>(Arrays.asList(roleDeclarant));
			User userDeclarant = User.builder()
					.withEmail("dec@sagide.com")
					.withPassword(this.passwordEncoder.encode("123456"))
					.withUsername("TDDDDDA")
					.withRoles(roleSetDeclarant)
					.build();

			this.userRepository.save(userDeclarant);

			return "Users and roles created successfully";
		}
		catch (Exception e) {
			return e.getMessage();
		}
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
}
