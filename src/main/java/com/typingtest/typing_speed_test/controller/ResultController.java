package com.typingtest.typing_speed_test.controller;

import com.typingtest.typing_speed_test.model.Result;
import com.typingtest.typing_speed_test.service.ResultService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin // allow JS from same origin / other ports
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping
    public Result saveResult(@RequestBody Result result) {
        return resultService.save(result);
    }

    @GetMapping("/top")
    public List<Result> getTopResults(@RequestParam(defaultValue = "10") int limit) {
        return resultService.topResults(limit);
    }
}
