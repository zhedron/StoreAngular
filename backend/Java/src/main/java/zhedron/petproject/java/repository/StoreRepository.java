package zhedron.petproject.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import zhedron.petproject.java.models.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {
}
