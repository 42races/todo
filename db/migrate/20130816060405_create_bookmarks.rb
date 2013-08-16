class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.string :tags
      t.string :url
      t.text :description
      t.integer :permission

      t.timestamps
    end
  end
end
