class AddReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false
      t.belongs_to :album, null: false

      t.integer :rating, null: false
      t.text :review

      t.timestamps null: false
    end
  end
end
