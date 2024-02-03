package zhedron.petproject.java.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import zhedron.petproject.java.models.Store;
import zhedron.petproject.java.services.StoreService;

import java.util.List;

@RestController
@RequestMapping("/store")
@CrossOrigin ("*")
public class StoreController {
    private final StoreService service;

    public StoreController(StoreService service) {
        this.service = service;
    }

    @GetMapping()
    public ResponseEntity<?> findAll () {
        List<Store> store = service.findAll();

        return ResponseEntity.ok(store);
    }

    @PostMapping("/createproduct")
    public ResponseEntity<?> create (@RequestBody Store store) {
        service.create(store);

        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/update")
    public ResponseEntity<?> update (@PathVariable int id, @RequestBody Store store) throws Exception {
        service.update(id, store);

        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @DeleteMapping ("/{id}/delete")
    public ResponseEntity<?> delete (@PathVariable int id) {
        service.delete(id);

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Store findUser (@PathVariable int id) throws Exception {
        return service.findUser(id);
    }
}
