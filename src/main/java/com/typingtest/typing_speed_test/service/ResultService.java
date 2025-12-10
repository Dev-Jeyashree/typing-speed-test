package com.typingtest.typing_speed_test.service;

import com.typingtest.typing_speed_test.model.Result;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class ResultService {

    private final List<Result> results = new ArrayList<>();

    public Result save(Result result) {
        results.add(result);
        return result;
    }

    public List<Result> topResults(int limit) {
        return results.stream()
                .sorted(Comparator.comparingInt(Result::getWpm).reversed())
                .limit(limit)
                .toList();
    }
}
