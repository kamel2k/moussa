package sn.sagide.springjwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import sn.sagide.springjwt.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByCdRole(String cdRole);

	@Query(value = "select u.roleDescription from Role u where u.name = :cdRole")
	Optional<String> findByName(String cdRole);
}
