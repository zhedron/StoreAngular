package zhedron.petproject.java.services;

import org.springframework.stereotype.Service;
import zhedron.petproject.java.models.Store;
import zhedron.petproject.java.repository.StoreRepository;
import java.util.List;

@Service
public class StoreService {
    private final StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public void create (Store store) {
        storeRepository.save(store);
    }

    public List<Store> findAll () {
        return storeRepository.findAll();
    }

    public Store update (int id, Store store) {
        Store existed = storeRepository.findById(id).orElse(null);

        existed.setName(store.getName());
        existed.setProductName(store.getProductName());
        existed.setPrice(store.getPrice());

        return storeRepository.save(existed);
    }

    public void delete (int id) {
        storeRepository.deleteById(id);
    }
}
