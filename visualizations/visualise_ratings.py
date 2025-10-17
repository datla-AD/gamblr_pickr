import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

def plot_ratings(csv_path="sample_ratings.csv", save=False):
    data = pd.read_csv(csv_path)
    data = data.sort_values("rating", ascending=True)

    plt.figure(figsize=(8,5))
    plt.barh(data["fighter"], data["rating"], color="royalblue")
    plt.xlabel("ELO Rating")
    plt.ylabel("Fighter")
    plt.title("UFC ELO Ratings")
    plt.tight_layout()

    if save:
        out_path = Path("elo_ratings_chart.png")
        plt.savefig(out_path, dpi=150)
        print(f"Chart saved to {out_path}")
    else:
        plt.show()

if __name__ == "__main__":
    plot_ratings()
