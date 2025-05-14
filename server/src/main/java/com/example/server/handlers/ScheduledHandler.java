package com.example.server.handlers;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledHandler {

    @Async
    @Scheduled(cron = "0 0 0 * * *")
    public void performAsyncScheduledTaskUsingCron() {

    }
}
