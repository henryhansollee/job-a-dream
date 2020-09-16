from google.cloud import storage
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types

def transcribe_gcs(gcs_uri):
    """Asynchronously transcribes the audio file specified by the gcs_uri."""
    client = speech.SpeechClient()
    audio = types.RecognitionAudio(uri=gcs_uri)
    audio_channel_count = 2

    config = types.RecognitionConfig(
        encoding=enums.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
        audio_channel_count= audio_channel_count,
        sample_rate_hertz=44100,
        language_code='ko-KR')
    operation = client.long_running_recognize(config, audio)
    print('Waiting for operation to complete...')
    response = operation.result()
    # Each result is for a consecutive portion of the audio. Iterate through
    # them to get the transcripts for the entire audio file.
    for result in response.results:
        print(u'Transcript: {}'.format(result.alternatives[0].transcript))
        print('Confidence: {}'.format(result.alternatives[0].confidence))

def upload_blob(bucket_name, source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""
    bucket_name = "speech2text-store"
    source_file_name = "C:/Users/pyoun/Desktop/s03p22b107/AI/AI_code/audio_files/test111.wav"
    destination_blob_name = "my-file"

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )

upload_blob("default", "the", "name")
transcribe_gcs('gs://speech2text-store/my-file')