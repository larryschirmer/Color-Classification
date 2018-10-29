### Workflow

1. make a new slice (export)
2. process slice (react app)
3. combine slice with whole data (import)
4. normalize cleaned data
5. retrain

### Train Notes

- Even out the amount of each color

### Progress Notes

| index     | loss 20 ep  |
| --------- | ----------- |
| --0 - 100 | 0.827, 0.66 |
| 100 - 200 | 0.821, 0.66 |
| 200 - 300 | 0.819, 0.66 |

first smartclean = loss: 0.77 val_loss: 0.80
second clean = loss: 0.67 val_loss: 0.68
third clean = loss: 0.594 val_loss:0.592 | loss: 0.599 val_loss: 0.531
fourth clean = | loss: 0.568 val_loss: 0.53
