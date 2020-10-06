import wave 

audio = wave.open('1601643553055.wav', 'wb')
audio.setnchannels(2)
audio.setsampwidth(2)
audio.setframerate(44100)
audio.setnframes(100)

blob = open('1601643553055', 'r', encoding='UTF8')
audio.writeframes(blob)