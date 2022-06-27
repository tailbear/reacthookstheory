import React from "react";
import styles from "./index.module.css";
import Practise from "./practise";

const Position = () => {
  return (
    <>
      <div className={styles["position-container"]}>
        <div className={`${styles.container} ${styles.relative}`}>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
          <div className={styles.item}>
            这是一个position:relative;bottom:50px的元素
          </div>
          <p>
            Grape silver beet collard greens avocado quandong fennel gumbo
            black-eyed pea watercress potato tigernut corn groundnut. Chickweed
            okra pea winter purslane coriander yarrow sweet pepper radish garlic
            brussels sprout groundnut summer purslane earthnut pea tomato spring
            onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
            green bean zucchini gourd winter purslane silver beet rock melon
            radish asparagus spinach.
          </p>
        </div>
        <div className={`${styles.container} ${styles.absolute}`}>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
          <div className={styles.item}>
            这是一个position:absolute;top:0的元素
          </div>
          <p>
            Grape silver beet collard greens avocado quandong fennel gumbo
            black-eyed pea watercress potato tigernut corn groundnut. Chickweed
            okra pea winter purslane coriander yarrow sweet pepper radish garlic
            brussels sprout groundnut summer purslane earthnut pea tomato spring
            onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
            green bean zucchini gourd winter purslane silver beet rock melon
            radish asparagus spinach.
          </p>
        </div>
        <div className={`${styles.container} ${styles.fixed}`}>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
          <div className={styles.item}>
            这是一个position:fixed;right:0;top:0的元素
          </div>
          <p>
            Grape silver beet collard greens avocado quandong fennel gumbo
            black-eyed pea watercress potato tigernut corn groundnut. Chickweed
            okra pea winter purslane coriander yarrow sweet pepper radish garlic
            brussels sprout groundnut summer purslane earthnut pea tomato spring
            onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
            green bean zucchini gourd winter purslane silver beet rock melon
            radish asparagus spinach.
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.sticky}`}>
        <p>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
          radish okra azuki bean corn fava bean mustard tigernut jícama green
          bean celtuce.
        </p>
        <div className={styles.item}>这是一个position:sticky;top:20px的元素</div>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
      </div>
      <Practise/>
    </>
  );
};
export default Position;
