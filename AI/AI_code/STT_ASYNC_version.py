from google.cloud import storage
from google.cloud import speech
from google.cloud.speech import enums
from konlpy.tag import Okt
from collections import defaultdict, Counter
from wordcloud import WordCloud
from matplotlib import pyplot as plt
okt = Okt()
word_collect = defaultdict(int)
def transcribe_gcs(gcs_uri):
    """Asynchronously transcribes the audio file specified by the gcs_uri."""
    client = speech.SpeechClient()
    audio = {"uri" : gcs_uri}
    audio_channel_count = 2

    config = {
        "encoding":enums.RecognitionConfig.AudioEncoding.LINEAR16,
        "audio_channel_count": audio_channel_count,
        "sample_rate_hertz":44100,
        "language_code":'ko-KR',
        # "enable_automatic_punctuation":True,
        "enable_word_time_offsets": True,
    }

    operation = client.long_running_recognize(config, audio)
    print('Waiting for operation to complete...')
    response = operation.result()

    ment, confidence_avg = '', 0
    count_sentence = 0
    for result in response.results:
        alternative = result.alternatives[0]
        text, conf = format(alternative.transcript), format(alternative.confidence)
        ment += text + ' '; confidence_avg += float(conf); count_sentence += 1
    for Noun in okt.nouns(ment):
        word_collect[Noun] += 1
    print(ment)
    print(confidence_avg/count_sentence)
    print(Counter(word_collect).most_common(10))
    # data = Counter(word_collect).most_common(10)
    # wordcloud로 만들기
    # print(data)
    # wordcloud = WordCloud(font_path='C:/Windows/Fonts/malgun.ttf', background_color='white', colormap="Accent_r",
    #                       width=700, height=700).generate_from_frequencies(dict(data))
    # plt.imshow(wordcloud)
    # plt.axis('off')
    # plt.show()

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

# upload_blob("default", "the", "name")
transcribe_gcs('gs://speech2text-store/my-file')