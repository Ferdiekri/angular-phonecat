/**
 * Angular JS slider directive
 *
 * (c) Rafal Zajac <rzajac@gmail.com>
 * (c) Valentin Hervieu <valentin@hervi.eu>
 * http://github.com/angular-slider/angularjs-slider
 *
 * Licensed under the MIT license
 */
@import 'variables.less';

.rzslider {
  display: inline-block;
  position: relative;
  height: @barDimension;
  width: 100%;
  margin: 35px 0 15px 0;
  vertical-align: middle;
  user-select: none;

  &.noanimate * {
    transition: none !important;
  }

  &.with-legend {
    margin-bottom: @withLegendMargin;
  }

  &[disabled] {
    cursor: not-allowed;
    .rz-pointer {
      cursor: not-allowed;
      background-color: @handleDisabledColor;
    }
    .rz-draggable {
      cursor: not-allowed;
    }
    .rz-selection {
      background: @barDisabledFillColor;
    }
    .rz-tick {
      cursor: not-allowed;
      &.rz-selected {
        background: @barDisabledFillColor;
      }
    }
  }

  span {
    white-space: nowrap;
    position: absolute;
    display: inline-block;
  }

  .rz-base {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .rz-bar-wrapper {
    left: 0;
    box-sizing: border-box;
    margin-top: -@handleSize / 2;
    padding-top: @handleSize / 2;
    width: 100%;
    height: @handleSize;
    z-index: 1;
    transition: all linear @animationDuration;
  }

  .rz-draggable {
    cursor: move;
  }

  .rz-bar {
    left: 0;
    width: 100%;
    height: @barDimension;
    z-index: 1;
    background: @barNormalColor;
    .rounded(@barDimension / 2);
  }

  .rz-bar-wrapper.rz-transparent .rz-bar {
    background: transparent;
  }
  .rz-bar-wrapper.rz-left-out-selection .rz-bar {
    background: @barLeftOutSelectionColor;
  }
  .rz-bar-wrapper.rz-right-out-selection .rz-bar {
    background: @barRightOutSelectionColor;
  }

  .rz-selection {
    z-index: 2;
    background: @barFillColor;
    .rounded(@barDimension / 2);
    transition: background-color linear @animationDuration;
  }

  .rz-restricted {
    z-index: 3;
    background: @restrictedBarColor;
    .rounded(@barDimension / 2);
  }

  .rz-pointer {
    cursor: pointer;
    width: @handleSize;
    height: @handleSize;
    top: -@handleSize / 2 + @barDimension / 2;
    background-color: @handleBgColor;
    z-index: 3;
    .rounded(@handleSize / 2);
    transition: all linear @animationDuration;

    &:after {
      content: '';
      width: @handlePointerSize;
      height: @handlePointerSize;
      position: absolute;
      top: @handleSize / 2 - @handlePointerSize / 2;
      left: @handleSize / 2 - @handlePointerSize / 2;
      .rounded(@handlePointerSize / 2);
      background: @handleInnerColor;
    }
    &:hover:after {
      background-color: @handleHoverColor;
    }
    &.rz-active {
      z-index: 4;
      &:after {
        background-color: @handleActiveColor;
      }
    }
  }

  .rz-bubble {
    cursor: default;
    bottom: @handleSize / 2;
    padding: @bubblePadding;
    color: @labelTextColor;
    transition: all linear @animationDuration;
    &.rz-limit {
      color: @limitLabelTextColor;
      transition: none;
    }
  }

  .rz-ticks {
    box-sizing: border-box;
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    top: -(@ticksHeight - @barDimension) / 2;
    margin: 0;
    z-index: 1;
    list-style: none;
  }

  .rz-ticks-values-under {
    .rz-tick-value {
      top: auto;
      bottom: @ticksValuePosition - 2;
    }
  }

  .rz-tick {
    text-align: center;
    cursor: pointer;
    width: @ticksWidth;
    height: @ticksHeight;
    background: @ticksColor;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: @handleSize / 2 - @ticksWidth / 2; // for centering
    transition: background-color linear @animationDuration;
    &.rz-selected {
      background: @selectedTicksColor;
    }
  }

  .rz-tick-value {
    position: absolute;
    top: @ticksValuePosition;
    transform: translate(-50%, 0);
  }

  .rz-tick-legend {
    position: absolute;
    top: @ticksLegendPosition;
    transform: translate(-50%, 0);
    max-width: 50px;
    white-space: normal;
  }

  &.rz-vertical {
    position: relative;
    width: @barDimension;
    height: 100%;
    margin: 0 20px;
    padding: 0;
    vertical-align: baseline;

    .rz-base {
      width: 100%;
      height: 100%;
      padding: 0;
    }

    .rz-bar-wrapper {
      top: auto;
      left: 0;
      margin: 0 0 0 -@handleSize / 2;
      padding: 0 0 0 @handleSize / 2;
      height: 100%;
      width: @handleSize;
    }

    .rz-bar {
      bottom: 0;
      left: auto;
      width: @barDimension;
      height: 100%;
    }

    .rz-pointer {
      left: -@handleSize / 2 + @barDimension / 2 !important;
      top: auto;
      bottom: 0;
    }

    .rz-bubble {
      left: @handleSize / 2 !important;
      margin-left: 3px;
      bottom: 0;
    }

    .rz-ticks {
      height: 100%;
      width: 0;
      left: -(@ticksHeight - @barDimension) / 2;
      top: 0;
      z-index: 1;
    }
    .rz-tick {
      vertical-align: middle;
      margin-left: auto;
      margin-top: @handleSize / 2 - @ticksWidth / 2; // for centering
    }
    .rz-tick-value {
      left: @ticksValuePositionOnVertical;
      top: auto;
      transform: translate(0, -28%);
    }
    .rz-tick-legend {
      top: auto;
      right: @ticksLegendPosition;
      transform: translate(0, -28%);
      max-width: none;
      white-space: nowrap;
    }
    .rz-ticks-values-under {
      .rz-tick-value {
        bottom: auto;
        left: auto;
        right: @ticksValuePositionOnVertical;
      }
    }
  }
}