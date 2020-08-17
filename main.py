import tt
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

cloud = tt.TTSearchClient()
nuvem = cloud.get_tweets()

topics = []


def set_cloud():

    for trend in nuvem:
        topics.append(trend["name"])

    str(topics)

    stopwords = set(STOPWORDS)
    stopwords.update(["da", "meu", "em", "você", "de", "ao", "os"])

    wordcloud = WordCloud(stopwords=stopwords,
                          background_color='#00171f',
                          width=1600,
                          height=800).generate(str(topics))

    fig, ax = plt.subplots(figsize=(16, 8))
    ax.imshow(wordcloud, interpolation='bilinear')
    ax.set_axis_off()
    plt.imshow(wordcloud)
    wordcloud.to_file('static/cloud.png', )
