from django.db import models

SUMMARY_LENGTH = 200


class Job(models.Model):
    image = models.ImageField(upload_to='images/')  # upload images to images/ folder
    summary = models.CharField(max_length=SUMMARY_LENGTH)

    def __str__(self):
        return self.summary
