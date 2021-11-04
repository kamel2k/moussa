package sn.sagide.springjwt.models;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder(setterPrefix = "with")
@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(unique = true, nullable = false)
	private String cdRole;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole name;

	private String roleDescription;

	public Role(ERole name) {
		this.name = name;
	}

}